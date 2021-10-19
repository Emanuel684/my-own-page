import * as React from 'react';
import { StyleSheet } from 'react-native';

import DogGif from '../components/DogGif';
import CardPersonal from '../components/CardPersonal';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <DogGif path="/screens/TabOneScreen.tsx" />
      <Text style={styles.title}>Hello, I'm a full-stack developer based in Colombia!</Text>
      <CardPersonal path="/screens/TabOneScreen.tsx"  />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
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
