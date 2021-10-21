import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { Text, View } from './Themed';

export default function CardPersonal({ path }: { path: string }) {
    return (
        <View style={{
            backgroundColor: 'transparent',
            flex: 1
        }}>
            <View style={[styles.getStartedContainer, { backgroundColor: 'transparent', flex: 1 }]}>
                <View style={{ backgroundColor: 'transparent', flex: 1 }}>
                    <Text
                        selectable={false}
                        style={{
                            fontFamily: 'MPLUSRounded1c-Bold',
                            fontSize: 36,
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
        textAlign: 'center',
        color: '#1A202C'
    },
});
