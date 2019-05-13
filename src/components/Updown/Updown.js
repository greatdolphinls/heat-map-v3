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

class Updown extends Component {
  render() {
    const { title, down, up } = this.props;
    const flagImage = require("@assets/img/flags/EUR.png");

    return (
      <Panel label={title} width={width} height={height}>
        <View style={styles.contianer}>
          <View style={styles.flagContainer}>
            <Image
              resizeMode="contain"
              source={flagImage}
              style={styles.flagImage}
            />
          </View>
          <View style={styles.statsContainer}>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  flagContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
  flagImage: {
    height: 60
  },
  statsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    paddingLeft: 0
  },
  updownImage: {
    height: 25
  },
  arrowRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
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
