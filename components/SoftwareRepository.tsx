import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

export default function SoftwareRepository({ path }: { path: string }) {
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
                    backgroundColor: 'transparent'
                }}>
                Software Repository
            </Text>
            <View style={{
                backgroundColor: 'orange',
                marginTop: 10
            }}>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Lenguage</th>
                        <th>Created at</th>
                        <th>Forks</th>
                        <th>Open Issues</th>
                        <th>Size (kb)</th>
                        <th>Stars</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                        <td>Germany</td>
                    </tr>
                </table>
            </View>
        </View>
    );
}