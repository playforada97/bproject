import * as React from 'react';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'native-base';

import HomeScreen from "./components/HomeScreen";
import MenuScreen from './components/MenuScreen';
import SettingScreen from './components/SettingScreen';
import DetailScreen from './Menu/DetailScreen';



const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Icon name='menu' />
      </TouchableOpacity>
    </View>
  );
};

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const MenuStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerLeft: ({}) => <HeaderLeft /> }} />
  </HomeStack.Navigator>
)

const MenuStackScreen = () => (
  <MenuStack.Navigator>
    <MenuStack.Screen name="Menu" component={MenuScreen} options={{ headerLeft: ({}) => <HeaderLeft /> }} />
    <MenuStack.Screen name="Detail" component={DetailScreen} />
  </MenuStack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Menu" component={MenuStackScreen} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
