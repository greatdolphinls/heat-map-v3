import React, { Component } from "react";
import { View, Text } from "react-native";
import { Navigation } from "react-native-navigation";

import { NOTIFICATIONS_SCREEN, SETTINGS_SCREEN } from "@navigator/constants";
import BarCharts from "@components/BarCharts/BarCharts";
class VolatilityScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    Navigation.events().bindComponent(this);
  }

  navigationButtonPressed({ buttonId }) {
    switch (buttonId) {
      case "nav_setting_btn": {
        this.routeToScreen(SETTINGS_SCREEN, "Settings");
        break;
      }
      case "nav_navigation_btn": {
        this.routeToScreen(NOTIFICATIONS_SCREEN, "Notifications");
        break;
      }
      default:
        break;
    }
  }

  routeToScreen = (name, title) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: name,
        passProps: {
          // props
        },
        options: {
          topBar: {
            title: {
              text: title
            }
          },
          bottomTabs: {
            visible: false
          }
        }
      }
    });
  };

  render() {
    return <BarCharts title="Volatility" />;
  }
}

export default VolatilityScreen;
