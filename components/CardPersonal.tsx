import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function EditScreenInfo({ path }: { path: string }) {
    return (
        <View style={{
            // backgroundColor: 'red',
            backgroundColor: 'transparent'
        }}>
            <View style={[styles.getStartedContainer, { backgroundColor: 'transparent' }]}>
                <View style={{ backgroundColor: 'transparent' }}>
                    <Text
                        selectable={false}
                        style={{
                            fontFamily: 'MPLUSRounded1c-Bold',
                            fontSize: 36,
                            // lineHeight: 24,
                            textAlign: 'center',
                            color: '#1A202C',
                            backgroundColor: 'transparent'
                        }}>
                        Emanuel Acevedo Muñoz
                    </Text>
                    <Text
                        selectable={false}
                        style={{
                            fontFamily: 'MPLUSRounded1c-Light',
                            fontSize: 16,
                            // lineHeight: 24,
                            textAlign: 'center',
                            color: '#1A202C',
                            backgroundColor: 'transparent'
                        }}>
                        Digital Craftsman ( Artist / Developer / Designer )
                    </Text>
                </View>
                <View style={{
                    backgroundColor: 'transparent'
                }}>
                    <Image
                        style={{
                            // backgroundColor: 'red',
                            width: 100,
                            height: 100,
                            borderRadius: 100,
                            borderWidth: 4,
                            borderColor: 'white'
                        }}
                        source={require('../assets/images/personal/EmanuelAcevedo.jpeg')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        flexDirection: 'row',
    },
    getStartedText: {
        fontSize: 36,
        // lineHeight: 24,
        textAlign: 'center',
        color: '#1A202C'
    },
});
