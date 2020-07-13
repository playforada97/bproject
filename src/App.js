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
import ShoppingCartIcon from './components/ShoppingCartIcon';
import ShoppingCartScreen from './screens/ShoppingCartScreen';



const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.openDrawer());
        }}>
        <Icon name='menu' style = {{paddingLeft : 16,fontSize:40, color: '#1e90ff'}}/>
      </TouchableOpacity>
    </View>
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <ShoppingCartIcon navigation={navigation}/>
  );
};

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const MenuStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerLeft: () => <HeaderLeft />, headerRight: () => <HeaderRight /> }} />
    <HomeStack.Screen name="Cart" component={ShoppingCartScreen} options={{ headerRight: () => <HeaderRight /> }} />
  </HomeStack.Navigator>
)

const MenuStackScreen = () => (
  <MenuStack.Navigator>
    <MenuStack.Screen name="Menu" component={MenuScreen} options={{ headerLeft: () => <HeaderLeft />, headerRight: () => <HeaderRight /> }} />
<<<<<<< Updated upstream
    <MenuStack.Screen name="Detail" component={DetailScreen} options={{ headerRight: () => <HeaderRight /> }}/>
=======
    <MenuStack.Screen name="Detail" component={DetailScreen} options={{ headerRight: () => <HeaderRight /> }} />
    <HomeStack.Screen name="Cart" component={ShoppingCartScreen} options={{ headerRight: () => <HeaderRight /> }} />
>>>>>>> Stashed changes
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
