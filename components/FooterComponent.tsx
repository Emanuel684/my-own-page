import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

export default function FooterComponent({ path }: { path: string }) {
    return (
        <View style={{
            // backgroundColor: '#ededed',
            // backgroundColor: 'green',
            // position: 'absolute',
            // bottom: 0,
            // width: '100%',
            // height: 60,
            // marginBottom: 32
        }}>
            <View style={{
                backgroundColor: 'transparent',
                // padding: 10,
            }}>
                <Text
                    selectable={false}
                    style={{
                        fontSize: 14,
                        textAlign: 'center',
                        backgroundColor: 'transparent',
                        opacity: 0.4,
                        color: '#1A202C'
                    }}>
                    © 2021 Emanuel Acevedo. All Rights Reserved.
                </Text>
            </View>

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
