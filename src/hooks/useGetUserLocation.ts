import {useEffect, useState} from 'react';
import GetLocation from 'react-native-get-location';

const useGetUserLocation = () => {
  const [userLocation, setuserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        setuserLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
      })
      .catch(error => {
        const {code, message} = error;
        console.log(code, message);
        setuserLocation({
          latitude: 50.44151138023848,
          longitude: 30.4996872396613,
        });
      });
  }, []);
  console.log('getUserLocation', userLocation);
  return userLocation;
};
export default useGetUserLocation;
