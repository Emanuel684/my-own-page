import React from 'react';
import { StyleSheet } from 'react-native';

import CustomButton from './CustomButton';
import { AntDesign } from '@expo/vector-icons';

import { Text, View } from './Themed';

export default function SocialMediaComponent({ path }: { path: string }) {
    return (
        <View style={{
            backgroundColor: 'transparent'
        }}>
            <Text
                selectable={false}
                style={{
                    fontSize: 20,
                    borderBottomWidth: 4,
                    fontFamily: 'MPLUSRounded1c-Medium',
                    borderColor: '#1A202C',
                    width: 120,
                    backgroundColor: 'transparent'
                }}>
                On the web
            </Text>
            <Text
                selectable={false}
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontSize: 16,
                    fontFamily: 'MPLUSRounded1c-Light',
                    borderColor: '#1A202C',
                    backgroundColor: 'transparent'
                }}>
                https://www.linkedin.com/in/emanuel-acevedo-mu%C3%B1oz-1b062b204/
            </Text>
            <Text
                selectable={false}
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontSize: 16,
                    fontFamily: 'MPLUSRounded1c-Light',
                    borderColor: '#1A202C',
                    backgroundColor: 'transparent'
                }}>
                https://www.hackerrank.com/emanuelacag
            </Text>
            <Text
                selectable={false}
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    fontSize: 16,
                    fontFamily: 'MPLUSRounded1c-Light',
                    borderColor: '#1A202C',
                    backgroundColor: 'transparent'
                }}>
                https://twitter.com/ElEmaneitor
            </Text>

            <CustomButton
                style={{
                    padding: 11,
                    borderRadius: 13,
                    width: 150,
                    alignSelf: 'center'
                }}
                onPress={() => console.log('hg')}
                initialColor='#319795'
                hoverColor='#277a79'
                pressColor='#3db3b0' >
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'transparent',
                }}>
                    <Text
                        selectable={false}
                        style={{
                            textAlign: 'center',
                            alignSelf: 'center',
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'MPLUSRounded1c-Medium'
                        }}>
                        Popular posts
                    </Text>
                    <AntDesign
                        selectable={false}
                        style={{
                            alignSelf: 'center'
                        }} name="right" size={15} color="white" />
                </View>
            </CustomButton>

        </View>
    );
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
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
