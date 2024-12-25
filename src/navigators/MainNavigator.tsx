import React from 'react';
import {Wrapper} from '../components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BluetothScreen, Home, QRScreen, WifiScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <Wrapper>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} options={{headerShown: false}} />
        <Screen
          name="QrScreen"
          component={QRScreen}
          options={{title: 'QR Scanner', headerTitleAlign: 'center'}}
        />
        <Screen
          name="Wifi"
          component={WifiScreen}
          options={{title: 'Wifi', headerTitleAlign: 'center'}}
        />
        <Screen
          name="Bluetoth"
          component={BluetothScreen}
          options={{title: 'Bluetoth', headerTitleAlign: 'center'}}
        />
      </Navigator>
    </Wrapper>
  );
};
