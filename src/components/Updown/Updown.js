import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';  

import {
  PANEL_COLOR,
  POSITIVE_COLOR,
  MAIN_FORE_COLOR,
  NEGATIVE_COLOR
} from "@colors";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const upImage = require("@assets/img/icon/up.png");
const downImage = require("@assets/img/icon/down.png");

class Updown extends Component {
  render() {
    const { title, down, up } = this.props;
    return (
      <View style={styles.panel}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.arrowRow}>
          <View style={styles.arrowWithPercent}>
            <Image resizeMode="contain" source={downImage} style={styles.updownImage} />
            <Text style={[styles.percentText, styles.redColor]}>{down}%</Text>
          </View>
          <View style={styles.arrowWithPercent}>
            <Image resizeMode="contain" source={upImage} style={styles.updownImage} />
            <Text style={[styles.percentText, styles.greenColor]}>{up}%</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // flex: 1,
    backgroundColor: PANEL_COLOR,
    borderRadius: 16,
    margin: 8,
    width: screenWidth * 0.5 - 16,
    height: screenHeight * 0.25 - 50
  },
  title: {
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 4,
    fontSize: 20,
    fontFamily: "HelveticaLT67MC",
    color: MAIN_FORE_COLOR,
    textTransform: 'uppercase'
  },
  updownImage: {
    height: 44,
  },
  arrowRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  arrowWithPercent: {
    flex: 1,
    alignItems: 'center'
  },
  percentText: {
    marginTop: 4,
    fontSize: 18
  },
  redColor: {
    color: NEGATIVE_COLOR
  },
  greenColor: {
    color: POSITIVE_COLOR
  }
});

export default Updown;