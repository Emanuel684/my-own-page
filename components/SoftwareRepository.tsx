import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataTable } from 'react-native-paper';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

export default function SoftwareRepository({ path }: { path: string }) {

    const [repoData, setRepoData] = useState([]) as any;

    const getData = () => {

        axios.get('https://api.github.com/users/Emanuel684/repos')
            .then(function (response) {
                setRepoData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={{
            backgroundColor: 'transparent',
            width: '90%'
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
                backgroundColor: 'transparent',
                marginTop: 10
            }}>
                <View
                style={{
                    width: '100%',
                    backgroundColor: 'transparent'
                }}
                >
                    <DataTable style={{
                        width: '90%',
                        alignSelf: 'center',
                        backgroundColor: '#ededed'
                    }}>
                        <DataTable.Header>
                            {/* <DataTable.Title numeric>Age</DataTable.Title> */}
                            <DataTable.Title >Title</DataTable.Title>
                            <DataTable.Title>Description</DataTable.Title>
                            <DataTable.Title>Lenguage</DataTable.Title>
                            <DataTable.Title>Created at</DataTable.Title>
                            <DataTable.Title>Forks</DataTable.Title>
                            <DataTable.Title>Open Issues</DataTable.Title>
                            <DataTable.Title>Size (kb)</DataTable.Title>
                            <DataTable.Title>Clone url</DataTable.Title>
                        </DataTable.Header>

                        {
                            repoData.map((i: any, index: number) => {
                                return (
                                    <DataTable.Row key={index}>
                                        <DataTable.Cell>{i.name}</DataTable.Cell>
                                        <DataTable.Cell>{i.description}</DataTable.Cell>
                                        <DataTable.Cell>{i.language}</DataTable.Cell>
                                        <DataTable.Cell>{i.created_at}</DataTable.Cell>
                                        <DataTable.Cell>{i.forks}</DataTable.Cell>
                                        <DataTable.Cell>{i.open_issues}</DataTable.Cell>
                                        <DataTable.Cell>{i.size}</DataTable.Cell>
                                        <DataTable.Cell>{i.clone_url}</DataTable.Cell>
                                    </DataTable.Row>
                                )
                            })
                        }

                    </DataTable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});