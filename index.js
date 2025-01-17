/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.log('App Name:', appName);
AppRegistry.registerComponent(appName, () => App);
