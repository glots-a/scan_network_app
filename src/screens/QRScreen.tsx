import {StyleSheet, View} from 'react-native';
import React from 'react';
import {BarcodeScanner} from '../components';

export const QRScreen = () => {
  return (
    <View style={S.CTR}>
      <BarcodeScanner />
    </View>
  );
};

const S = StyleSheet.create({
  CTR: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 16,
  },
});
