import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/DogGif';
import FooterComponent from '../components/FooterComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: '#ededed', }]}>
        <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
        <View style={{
          flex: 1
        }}>
          <Text>
            Works
          </Text>
          <View style={{
            backgroundColor: 'red',
            width: 239,
            height: 133,
          }}>
            <Image style={{
              width: 239,
              height: 133,
              borderRadius: 10
            }}
              source={{ uri: 'https://www.craftz.dog/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fworks%2Finkdrop_eyecatch.e5148a4760950d74f545dec50aa87cfd.png&w=750&q=75' }}
            />
            <View>
              <Text>
                Inkdrop
              </Text>
              <Text>
                A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support
              </Text>
            </View>
          </View>
        </View>
      </View>
      <FooterComponent path="/screens/TabOneScreen.tsx" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
