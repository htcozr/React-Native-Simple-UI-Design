import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Giris from './GirisSayfasi';
import Login from './LoginSayfasi';
import Kaydol from './KaydolSayfasi';

const stack = createStackNavigator();

class UI2 extends React.Component{

  navigasyon() {
    return (
        <NavigationContainer>
            <stack.Navigator 
            screenOptions={{ headerShown: false }}
            initialRouteName={'Giris'}
            >
                <stack.Screen name={'Giris'} component={Giris} />
                <stack.Screen name={'Login'} component={Login} />
                <stack.Screen name={'Kaydol'} component={Kaydol} />
            </stack.Navigator>
        </NavigationContainer>
    );
}

  render(){
    //alert('test');


    return (
      <>
      <View></View>

      <View style={styleee.navContainer}>{this.navigasyon()}</View>

      <View></View>
  </>
    );
  }
}

const styleee=StyleSheet.create({

    navContainer: {
		flex: 1,
    } 
    
  })

export default UI2;