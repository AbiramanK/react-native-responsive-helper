import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  responsiveHeight,
  responsiveSize,
} from 'react-native-responsive-helper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles?.title}>React Native Responsive Helper</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: responsiveSize(350),
    height: responsiveHeight(100),
    backgroundColor: '#FFFF33',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderWidth: responsiveSize(5),
  },
  title: {
    fontSize: responsiveSize(21),
  },
});
