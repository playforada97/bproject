import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from "./components/HomeScreen";
import ListScreen from './components/ListScreen';
import SettingScreen from './components/SettingScreen';

const navigator = createDrawerNavigator(
  {
    Home: {screen: HomeScreen},
    Menu: {screen: ListScreen},
    Settings: {screen: SettingScreen},
  },
  {
    initialRouteName: 'Home',
    // defaultNavigationOptions: {
    //   title: "App"
    // }
  }
);

const App = createAppContainer(navigator);

export default App;
