import { Navigation } from "react-native-navigation";
import { registerScreens } from "./register-screens";

import { FONT_FAMILY } from "@constants";
import {
  BACKGROUND_COLOR,
  PANEL_COLOR,
  DISABLED_COLOR,
  SUB_FORE_COLOR,
  MAIN_FORE_COLOR,
  LABEL_COLOR
} from "@colors";

import {
  SPLASH_SCREEN,
  HOME_SCREEN,
  STRENGTH_SCREEN,
  VOLUME_SCREEN,
  VOLATILITY_SCREEN,
  SENTIMENT_SCREEN
} from "@navigator/constants";

registerScreens();

Navigation.setDefaultOptions({
  topBar: {
    background: {
      color: PANEL_COLOR
    },
    title: {
      color: MAIN_FORE_COLOR,
      fontFamily: FONT_FAMILY,
      fontSize: 25,
      alignment: "center"
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
    animate: true
  },
  bottomTab: {
    textColor: DISABLED_COLOR,
    selectedTextColor: LABEL_COLOR,
    iconColor: DISABLED_COLOR,
    selectedIconColor: LABEL_COLOR,
    fontFamily: FONT_FAMILY,
    fontSize: 14
  }
});

export function startSplashScene() {
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
