import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from "./components/HomeScreen";
import MenuScreen from './components/MenuScreen';
import SettingScreen from './components/SettingScreen';
import Appetizers from './Menu/Appetizers';

const navigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Menu: {screen: MenuScreen},
    Settings: {screen: SettingScreen},
  },
  {
    initialRouteName: 'Home',
    // defaultNavigationOptions: {
    //   title: "App"
    // }
  }
);
const menunavigator = createStackNavigator(
  {
    Appetizers: {screen: Appetizers},
    
  });
const App = createAppContainer(navigator);

export default App;
