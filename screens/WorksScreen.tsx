import * as React from 'react';
import { StyleSheet, Image, ScrollView } from 'react-native';

import EditScreenInfo from '../components/DogGif';
import FooterComponent from '../components/FooterComponent';
import { Text, View } from '../components/Themed';

export default function WorksScreen() {
  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: '#ededed', width: '100%', }]}>
        <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
        <Text
          selectable={false}
          style={{
            fontSize: 20,
            color: '#1A202C',
            alignSelf: 'flex-start',
            fontFamily: 'MPLUSRounded1c-Bold'
          }}>
          Works
        </Text>
        <View style={{
          backgroundColor: 'transparent',
          padding: 10,
          width: 249,
          height: 241,
        }}>
          <Image style={{
            width: 239,
            height: 133,
            alignSelf: 'center',
            borderRadius: 10
          }}
            source={{ uri: 'https://www.craftz.dog/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Fworks%2Finkdrop_eyecatch.e5148a4760950d74f545dec50aa87cfd.png&w=750&q=75' }}
          />
          <View
            style={{
              backgroundColor: 'transparent'
            }}
          >
            <Text
              selectable={false}
              style={{
                textAlign: 'center',
                fontSize: 20,
                color: '#1A202C'
              }}>
              Inkdrop
            </Text>
            <Text
              selectable={false}
              style={{
                textAlign: 'center',
                fontSize: 14,
                color: '#1A202C'
              }}>
              A Markdown note-taking app with 100+ plugins, cross-platform and encrypted data sync support
            </Text>
          </View>
        </View>
      </View>
      <View style={{
        position: 'relative'
      }}>
        <FooterComponent path="/screens/TabOneScreen.tsx" />
      </View>
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
