import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/DogGif';
import SoftwareRepository from '../components/SoftwareRepository';
import FooterComponent from '../components/FooterComponent';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function SourceScreen({ navigation }: RootTabScreenProps<'Source'>) {
  return (
    <ScrollView>
      <View style={[styles.container, {backgroundColor: '#ededed'}]}>
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <SoftwareRepository path="/screens/TabTwoScreen.tsx" />
        <FooterComponent path="/screens/TabTwoScreen.tsx" />
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
