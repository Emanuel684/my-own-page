import React from 'react';

import { Text, View } from './Themed';

export default function FooterComponent({ path }: { path: string }) {
    return (
        <View style={{
            backgroundColor: 'transparent',
            marginBottom: 20
        }}>
            <View style={{
                backgroundColor: 'transparent',
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
