import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Pressable } from 'react-native';

import CustomButton from './CustomButton';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
    return (
        <View>
            <Text
                style={{
                    fontSize: 20,
                    // lineHeight: 24,
                    borderBottomWidth: 4,
                    fontFamily: 'MPLUSRounded1c-Medium',
                    width: 50,
                    borderColor: '#1A202C'
                }}>
                Work
            </Text>
            <Text style={{
                marginTop: 10,
                marginBottom: 10,
                fontSize: 16,
                fontFamily: 'MPLUSRounded1c-Light',
                borderColor: '#1A202C'
            }}>
                Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called Inkdrop.
            </Text>

            <CustomButton
                style={{
                    padding: 11,
                    borderRadius: 13,
                    width: 120
                }}
                onPress={() => console.log('hg')}
                initialColor='red'
                hoverColor='black'
                pressColor='grey' >
                <Text>
                    My portafolio
                </Text>
            </CustomButton>

        </View>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        // backgroundColor: 'brown'
    },
    getStartedText: {
        fontSize: 17,
        lineHeight: 24,
        textAlign: 'center',
    },
    separator: {
        height: 5,
        width: 40,
        backgroundColor: 'orange'
    },
});