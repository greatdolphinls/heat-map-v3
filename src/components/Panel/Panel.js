import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { PANEL_COLOR, MAIN_FORE_COLOR, LABEL_COLOR } from "@colors";
import { FONT_FAMILY } from "@constants";

const Panel = ({ label, width, height, children }) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: PANEL_COLOR,
      alignItems: "center",
      borderRadius: 8,
      margin: 10,
      width: width,
      height: height
    },
    label: {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
      fontFamily: FONT_FAMILY,
      width: width / 2,
      color: MAIN_FORE_COLOR,
      backgroundColor: LABEL_COLOR,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {children}
    </View>
  );
};

export default Panel;
