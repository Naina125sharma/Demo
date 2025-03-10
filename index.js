/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Welcome from './src/screens/auth/welcome';
import SignIn from './src/screens/auth/signIn';
import SignUp from './src/screens/auth/signUp';
import ForgotPassword from './src/screens/auth/forgotPassword';
import Splash3 from './src/screens/auth/splash3';
import TrendingProducts from './src/screens/trendingProducts';


AppRegistry.registerComponent(appName, () => TrendingProducts);
