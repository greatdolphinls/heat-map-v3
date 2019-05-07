import { Navigation } from "react-native-navigation";
import { NativeModules } from "react-native";
import { registerScreens } from "./register-screens";

import {
  BACKGROUND_COLOR,
  PANEL_COLOR,
  DISABLED_COLOR,
  POSITIVE_COLOR,
  SUB_FORE_COLOR,
  MAIN_FORE_COLOR
} from "@colors";

import {
  SPLASH_SCREEN,
  HOME_SCREEN,
  STRENGTH_SCREEN,
  VOLUME_SCREEN,
  VOLATILITY_SCREEN,
  SENTIMENT_SCREEN
} from "./constants";

registerScreens();

export function startSplashScene() {
  Navigation.setDefaultOptions({
    topBar: {
      background: {
        color: BACKGROUND_COLOR
      },
      title: {
        color: MAIN_FORE_COLOR,
        fontFamily: "HelveticaLT67MC",
        fontSize: 28
      },
      backButton: {
        title: "",
        color: MAIN_FORE_COLOR
      },
      buttonColor: MAIN_FORE_COLOR
    },
    statusBar: {
      style: "light"
    },
    layout: {
      orientation: ["portrait"],
      backgroundColor: BACKGROUND_COLOR
    },
    bottomTabs: {
      backgroundColor: PANEL_COLOR,
      titleDisplayMode: "alwaysShow",
      animate: true,
      elevation: 8
    },
    bottomTab: {
      textColor: DISABLED_COLOR,
      selectedTextColor: POSITIVE_COLOR,
      iconColor: DISABLED_COLOR,
      selectedIconColor: POSITIVE_COLOR,
      fontFamily: "HelveticaLT67MC",
      fontSize: 14
    }
  });

  Navigation.setRoot({
    root: {
      component: {
        name: SPLASH_SCREEN
      }
    }
  });
}
const options = {
  topBar: {
    title: {
      text: "HeatMap"
    },
    leftButtons: [
      {
        id: "nav_setting_btn",
        icon: require("@assets/img/icon/settings.png"),
        color: SUB_FORE_COLOR
      }
    ],
    rightButtons: [
      {
        id: "nav_navigation_btn",
        icon: require("@assets/img/icon/notification.png"),
        color: SUB_FORE_COLOR
      }
    ]
  }
};
export function startMainScene() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: HOME_SCREEN,
                    options: options
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require("@assets/img/icon/home.png"),
                  testID: "FIRST_TAB_BAR_BUTTON",
                  text: "HOME"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: STRENGTH_SCREEN,
                    options: options
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require("@assets/img/icon/strength.png"),
                  testID: "SECOND_TAB_BAR_BUTTON",
                  text: "STRENGTH"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: VOLUME_SCREEN,
                    options: options
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require("@assets/img/icon/volume.png"),
                  testID: "SECOND_TAB_BAR_BUTTON",
                  text: "VOLUME"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: VOLATILITY_SCREEN,
                    options: options
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require("@assets/img/icon/volatility.png"),
                  testID: "FOURTH_TAB_BAR_BUTTON",
                  text: "VOLATILITY"
                }
              }
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: SENTIMENT_SCREEN,
                    options: options
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require("@assets/img/icon/sentiment.png"),
                  testID: "FIFTH_TAB_BAR_BUTTON",
                  text: "SENTIMENT"
                }
              }
            }
          }
        ]
      }
    }
  });
}

//     tabsStyle: {
//       tabBarButtonColor: DISABLED_COLOR,
//       tabBarSelectedButtonColor: POSITIVE_COLOR,
//       tabBarBackgroundColor: PANEL_COLOR,
//       forceTitlesDisplay: true,
//       tabFontFamily: "HelveticaLT67MC",
//       tabFontSize: 14,
//       selectedTabFontSize: 14
//     },
//     appStyle: {
//       screenBackgroundColor: BACKGROUND_COLOR,
//       statusBarColor: SUB_FORE_COLOR,
//       tabBarButtonColor: DISABLED_COLOR,
//       tabBarSelectedButtonColor: POSITIVE_COLOR,
//       tabBarBackgroundColor: PANEL_COLOR,
//       forceTitlesDisplay: true,
//       tabFontFamily: "HelveticaLT67MC",
//       tabFontWeight: 400,
//       tabFontSize: 14,
//       selectedTabFontSize: 14,
//       navBarHidden: true,
//       navBarTitleTextCentered: true,
//       navBarBackgroundColor: BACKGROUND_COLOR,
//       navBarTextColor: MAIN_FORE_COLOR,
//       navBarButtonColor: SUB_FORE_COLOR,
//       navBarTextFontSize: 25,
//       navBarTextFontFamily: "HelveticaLT67MC",
//       navBarTextFontBold: true
//     }
