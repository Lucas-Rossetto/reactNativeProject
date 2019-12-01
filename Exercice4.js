import React from 'react';
import {MapView , Permissions} from 'expo';
import {StyleSheet} from 'react-native';

export class Map extends React.Component {

    state = {
        latitude : null,
        longitude : null,
      };

      async componentDidMount() {
        const { status } = await Permissions.getAsync(Permissions.LOCATION)

        if (status !== 'granted') {
          const response = await Permissions.askAsync(Permissions.LOCATION)
        }
      }

    render() {
        return (
    
    <MapView
      style={style.mapstyle}
      initialRegion={{
      //latitude: POSITION.getPosition.latitude,
      //longitude: POSITION.getPosition.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
    </MapView>
        );
    }
}

const style = StyleSheet.create({
    mapstyle: {
        width: "100%",
        height: "75%"
    }
  });