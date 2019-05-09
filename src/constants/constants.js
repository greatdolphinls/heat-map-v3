import { Dimensions, StatusBar, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
const isIOS = Platform.OS === "ios";

export const WINDOW_WIDTH = width;
export const WINDOW_HEIGHT = height;
export const IS_IPHONE_X = WINDOW_HEIGHT === 812;
export const STATUSBAR_HEIGHT = isIOS
  ? IS_IPHONE_X
    ? 35
    : 20
  : StatusBar.currentHeight;
export const NAVBAR_HEIGHT = isIOS ? 44 : WINDOW_HEIGHT * 0.066;
export const NAV_TAB_BAR_HEIGHT = isIOS ? 49 : 56;
export const BOTTOM_SPACING_HEIGHT = 30;

export const FONT_FAMILY = "HelveticaLT67MC";
