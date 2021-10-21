import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import DogGif from '../components/DogGif';
import CardPersonal from '../components/CardPersonal';
import WorkComponent from '../components/WorkComponent';
import BioComponent from '../components/BioComponent';
import SocialMediaComponent from '../components/SocialMediaComponent';
import FooterComponent from '../components/FooterComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <ScrollView>
      <View style={[
        styles.container,
        {
          // backgroundColor: '#ededed',
          backgroundColor: 'transparent',
          width: '100%',
          marginBottom: 20,
          marginTop: 30,
          paddingLeft: 50,
          paddingRight: 50
        }
      ]}>
        <DogGif path="/screens/TabOneScreen.tsx" />

        <View style={{
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 12,
          width: '55%'
        }}>
          <Text style={{
            fontSize: 16,
            color: '#1A202C',
            textAlign: 'center'
          }}>Hello, I'm a full-stack developer based in Colombia!</Text>
        </View>
        <CardPersonal path="/screens/TabOneScreen.tsx" />
        <WorkComponent path="/screens/TabOneScreen.tsx" />
        <BioComponent path="/screens/TabOneScreen.tsx" />
        <SocialMediaComponent path="/screens/TabOneScreen.tsx" />
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
