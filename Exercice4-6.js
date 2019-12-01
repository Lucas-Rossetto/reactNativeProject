import React, { useState, useEffect } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, ActivityIndicator } from 'react-native';

const initialState = {
  latitude: null,
  longitude: null,
  latitudeDelta: 0.010,
  longitudeDelta: 0.010
}

function Exo6() {
  const [currentPosition, setCurentPosition] = useState(initialState);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords
      setCurentPosition({
        ...currentPosition,
        latitude,
        longitude
      })
    },
      error => alert(error, message),
      { timeout: 20000 }
    )
  }, [])

  return currentPosition.latitude ? (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={style.mapstyle}
      showsUserLocation
      initialRegion={currentPosition}
    />
  ) : <ActivityIndicator style={{ flex: 1 }} animating size="large" />
};
const style = StyleSheet.create({
  mapstyle: {
    width: "100%",
    height: "75%"
  }
});

export default Exo6;