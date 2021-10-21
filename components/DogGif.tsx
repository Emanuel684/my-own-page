import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { View } from './Themed';

export default function DogGif({ path }: { path: string }) {
  return (
    <View>
      <View style={[styles.getStartedContainer, { backgroundColor: 'transparent' }]}>
        <Image
          style={{
            width: 500,
            height: 500
          }}
          source={require('../assets/images/DogOffice/DogOffice.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    backgroundColor: 'red'
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
});
