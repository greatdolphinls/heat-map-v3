import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import {
  PANEL_COLOR,
  POSITIVE_COLOR,
  MAIN_FORE_COLOR,
  NEGATIVE_COLOR
} from "@colors";
import { FONT_FAMILY } from "@constants";
import Panel from "@components/Panel/Panel";
import { getScale } from "@utils";

const { width, height } = getScale(2, 4);
const upImage = require("@assets/img/icon/up.png");
const downImage = require("@assets/img/icon/down.png");
const euImage = require("@assets/img/flags/eu.png");

class Updown extends Component {
  render() {
    const { title, down, up } = this.props;

    return (
      <Panel label={title} width={width} height={height}>
        <View style={styles.contianer}>
          <View style={styles.arrowWithPercent}>
            <Image
              resizeMode="contain"
              source={euImage}
              style={styles.flagImage}
            />
          </View>
          <View style={styles.arrowCol}>
            <View style={styles.arrowRow}>
              <Image
                resizeMode="contain"
                source={upImage}
                style={styles.updownImage}
              />
              <Text style={[styles.percentText, styles.greenColor]}>{up}%</Text>
            </View>
            <View style={styles.arrowRow}>
              <Image
                resizeMode="contain"
                source={downImage}
                style={styles.updownImage}
              />
              <Text style={[styles.percentText, styles.redColor]}>{down}%</Text>
            </View>
          </View>
        </View>
      </Panel>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  flagImage: {
    height: 55
  },
  updownImage: {
    height: 25
  },
  arrowRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  arrowCol: {
    flex: 1,
    justifyContent: "center"
  },
  arrowWithPercent: {
    flex: 1,
    alignItems: "center"
  },
  percentText: {
    marginTop: 4,
    fontSize: 18,
    fontFamily: FONT_FAMILY
  },
  redColor: {
    color: NEGATIVE_COLOR
  },
  greenColor: {
    color: POSITIVE_COLOR
  }
});

export default Updown;
