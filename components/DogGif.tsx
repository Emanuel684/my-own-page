import React from 'react';
import { StyleSheet, Image } from 'react-native';

import { View } from './Themed';

export default function DogGif({ path }: { path: string }) {
  return (
    <View style={{
      backgroundColor: 'transparent',
      marginBottom: 10
  }}>
      <View style={{
                    backgroundColor: 'transparent'
                }}>
                    <Image
                        style={{
                          width: 500,
                          height: 500,
                          borderRadius: 100,
                          borderWidth: 4,
                          borderColor: 'white'
                        }}
                        source={require('../assets/images/personal/EmanuelAcevedo.jpeg')}
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
