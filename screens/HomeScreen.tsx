import * as React from 'react';
import { StyleSheet } from 'react-native';

import DogGif from '../components/DogGif';
import CardPersonal from '../components/CardPersonal';
import WorkComponent from '../components/WorkComponent';
import BioComponent from '../components/BioComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={[
      styles.container,
      {
        backgroundColor: '#ededed',
        width: '100%',
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
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <CardPersonal path="/screens/TabOneScreen.tsx" />
      <WorkComponent path="/screens/TabOneScreen.tsx" />
      <BioComponent path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'orange'
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
