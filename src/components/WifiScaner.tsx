import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {WifiSvg} from '../assets';
import {useAppDispatch, useAppSelector} from '../redux/hooks/redux-hooks';
import WifiManager from 'react-native-wifi-reborn';
import {addNewNetwork} from '../redux/dataSlice';
import {permission} from '../helpers/permission';
import {delay} from '../helpers/delay';
import {WifiNetwork} from '../types/WIFI';

const WIDTH = Dimensions.get('screen').width;

export const WifiScaner = () => {
  const [scaning, setScanning] = useState(false);
  const dispatch = useAppDispatch();
  const networkData = useAppSelector(state => state.storeddata.wifi);
  const [selectedSSID, setSelectedSSID] = useState<string | null>(null);

  const getWifiList = async () => {
    setScanning(true);
    try {
      const res = await WifiManager.loadWifiList();
      await delay(2000);
      dispatch(addNewNetwork(res));
    } catch (error) {
      console.error('error message', error);
    } finally {
      setScanning(false);
    }
  };

  const keyExtractor = useCallback(
    (item: WifiNetwork, index: number) => {
      return item.BSSID || index.toString();
    },
    [networkData],
  );

  useEffect(() => {
    permission();
  }, []);

  const handleConnectToNetwork = (SSID: string | undefined) => {
    //string | undefined
    if (SSID) {
      setTimeout(() => {
        Alert.alert(`Імітація: успішно підключено до мережі "${SSID}"`);
        setSelectedSSID(SSID);
      }, 500);
    } else {
      Alert.alert('Імітація: не вдалося підключитися до мережі');
    }
  };

  const renderItem = useCallback(
    ({item}: {item: WifiNetwork}) => {
      return (
        <TouchableOpacity
          style={[S.renderItem, item.SSID === selectedSSID && S.selected]}
          onPress={() => {
            handleConnectToNetwork(item?.SSID);
          }}>
          <Text style={S.item_text}>SSID: {item?.SSID}</Text>
          <Text style={S.item_text}>Потужність: {item?.level}</Text>
        </TouchableOpacity>
      );
    },
    [networkData, selectedSSID],
  );

  return (
    <View style={S.container}>
      <TouchableOpacity style={S.startScan} onPress={() => getWifiList()}>
        {scaning ? (
          <ActivityIndicator color={'#D128A1'} />
        ) : (
          <>
            <WifiSvg />
            <Text style={S.scan}>{'Сканувати'} </Text>
          </>
        )}
      </TouchableOpacity>
      <Text style={S.title}>Знайдені мережі:</Text>
      {networkData && networkData?.length > 0 ? (
        <FlatList
          data={networkData}
          contentContainerStyle={S.flatlist}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          windowSize={19}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={S.noDevicesText}>Мережу wifi не знайдено</Text>
      )}
    </View>
  );
};

const S = StyleSheet.create({
  container: {
    marginTop: 8,
    alignItems: 'center',
    rowGap: 16,
    flex: 1,
  },
  startScan: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9a9da1',
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '60%',
  },
  scan: {
    fontSize: 16,
    color: '#343b36',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    marginTop: 16,
    color: '#000',
  },
  noDevicesText: {
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  renderItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    columnGap: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9a9da1',
    width: WIDTH - 32,
    paddingHorizontal: 8,
    paddingVertical: 32,
  },
  flatlist: {
    rowGap: 8,
  },
  item_text: {fontSize: 16, fontWeight: '600'},
  selected: {backgroundColor: 'rgba(207, 43, 193, 0.2)'},
});
