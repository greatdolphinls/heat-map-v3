import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import SplashScreen from "@screens/Splash/Splash";
import HomeScreen from "@screens/Home/Home";
import StrengthScreen from "@screens/Strength/Strength";
import VolumeScreen from "@screens/Volume/Volume";
import VolatilityScreen from "@screens/Volatility/Volatility";
import SentimentScreen from "@screens/Sentiment/Sentiment";
import NotificationsScreen from "@screens/Notifications/Notifications";
import SettingsScreen from "@screens/Settings/Settings";
import configureStore from "@store/configureStore";

import {
  SPLASH_SCREEN,
  HOME_SCREEN,
  STRENGTH_SCREEN,
  VOLUME_SCREEN,
  VOLATILITY_SCREEN,
  SENTIMENT_SCREEN,
  NOTIFICATIONS_SCREEN,
  SETTINGS_SCREEN
} from "./constants";

const store = configureStore();

export function registerScreens() {
  Navigation.registerComponent(SPLASH_SCREEN, () => SplashScreen);
  Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
  Navigation.registerComponent(STRENGTH_SCREEN, () => StrengthScreen);
  Navigation.registerComponent(VOLUME_SCREEN, () => VolumeScreen);
  Navigation.registerComponent(VOLATILITY_SCREEN, () => VolatilityScreen);
  Navigation.registerComponent(SENTIMENT_SCREEN, () => SentimentScreen);
  Navigation.registerComponent(NOTIFICATIONS_SCREEN, () => NotificationsScreen);
  Navigation.registerComponent(SETTINGS_SCREEN, () => SettingsScreen);
}
