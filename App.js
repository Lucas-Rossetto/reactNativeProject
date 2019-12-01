// Exercice 1 et 2

import React, { useState, useEffect } from 'react';
import {Button, Animated , Dimensions , StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import {Exercice3, Dataview}  from './Exercice3';
import Map from './Exercice4';

class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <FadeInView style={{width: "100%", backgroundColor: 'powderblue'}}></FadeInView>
       <FadeInView style= {{width: "100%", backgroundColor: 'red'}}/>
       <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Maps"
          onPress={() => this.props.navigation.navigate('Map')}
        />
      </View>
    );
  }
}

class MapScreen extends React.Component {
  render() {
    return (
      <View>
      <Map style={styles.mapStyle}>
      </Map>
      </View>
    )
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Voici les détails de ce bouton</Text>
        <Button
          title="Go to Details again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Map: MapScreen,

  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
       toValue: 300,
       duration: 1000,
    }).start();
  }, [])

  return (
    <Animated.View                
      style={{
        ...props.style,
        height: fadeAnim,       
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

/*export default function App() {
  return (
  
  );
}
*/