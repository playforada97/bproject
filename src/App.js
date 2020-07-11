import * as React from 'react';
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon} from 'native-base';

import HomeScreen from "./screens/HomeScreen";
import MenuScreen from './screens/MenuScreen';
import SettingScreen from './screens/SettingScreen';
import DetailScreen from './components/DetailScreen';



const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Icon name='menu'  style = {{paddingLeft : 16, color: '#1e90ff'}}/>
      </TouchableOpacity>
    </View>
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <View style={{ padding: 5}}>
      {/* <TouchableOpacity
        onPress={() => {
          alert('Open cart');
        }}> */}
        <View style={{
          position: 'absolute', height: 30, width: 30,
          borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)',
          right: 15, bottom: 15, alignItems: 'center',
          justifyContent: 'center', zIndex: 2000
        }}>
          <Text>0</Text>
        </View>
        <Icon name='cart' size={30}/>
      {/* </TouchableOpacity> */}
    </View>
  );
};

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const MenuStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerLeft: () => <HeaderLeft />, headerRight: () => <HeaderRight /> }} />
  </HomeStack.Navigator>
)

const MenuStackScreen = () => (
  <MenuStack.Navigator>
    <MenuStack.Screen name="Menu" component={MenuScreen} options={{ headerLeft: () => <HeaderLeft />, headerRight: () => <HeaderRight /> }} />
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
