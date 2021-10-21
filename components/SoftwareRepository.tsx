import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Text, View } from './Themed';

export default function SoftwareRepository({ path }: { path: string }) {

    const [repoData, setRepoData] = useState([]) as any;

    const getData = () => {

        const RepoData = axios.get('https://api.github.com/users/Emanuel684/repos')
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            // always executed
          }); 

          console.log("data", RepoData.data);
          setRepoData(RepoData)

    }

    useEffect(() => {
        getData();
    }, [])

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
                {/* {
                    data.map(  )
                } */}
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