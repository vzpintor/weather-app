import React from 'react';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {globalStyles} from '../theme/styles';

const {width, height} = Dimensions.get('window');

const Background = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? '-40%' : '-55%',
    left: '-70%',
    transform: [
      {
        rotate: '70deg',
      },
    ],
  },
  background: {
    ...globalStyles.shadow,
    backgroundColor: '#000000',
    width: width * 2,
    height,
  },
});

export default Background;
