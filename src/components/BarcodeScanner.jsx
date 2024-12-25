import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

export const BarcodeScanner = () => {
  const [barcodes, setBarcodes] = useState([]);

  const handleBarCodeRead = barcode => {
    if (!barcodes.some(item => item.data === barcode.data)) {
      setBarcodes(prev => [
        ...prev,
        {id: Date.now().toString(), data: barcode.data},
      ]);
    }
  };

  const clearBarcodes = () => setBarcodes([]);

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={handleBarCodeRead}
        captureAudio={false}>
        <Text style={styles.scanText}>Скануйте штрих-код</Text>
      </RNCamera>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Список відсканованих штрих-кодів:</Text>
        <FlatList
          data={barcodes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Text style={styles.barcodeItem}>{item.data}</Text>
          )}
        />
        <TouchableOpacity onPress={clearBarcodes} style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Очистити список</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  scanText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  listContainer: {
    flex: 2,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  barcodeItem: {
    fontSize: 16,
    marginBottom: 5,
    backgroundColor: '#e9ecef',
    padding: 5,
    borderRadius: 5,
  },
  clearButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
