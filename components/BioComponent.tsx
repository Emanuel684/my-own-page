import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

export default function BioComponent({ path }: { path: string }) {
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
                    width: 35,
                    borderColor: '#1A202C',
                    backgroundColor: 'transparent'
                }}>
                Bio
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
                Data Science Engineering Student | Passionate About Data Science & Data Analytics | Software Developer | Full Stack Developer.
            </Text>
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
