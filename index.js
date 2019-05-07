/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import { startSplashScene } from "@navigator/navigator";

Navigation.events().registerAppLaunchedListener(() => startSplashScene());
