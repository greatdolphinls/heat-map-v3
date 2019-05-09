import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import {
  PANEL_COLOR,
  POSITIVE_COLOR,
  MAIN_FORE_COLOR,
  NEGATIVE_COLOR,
  SUB_FORE_COLOR
} from "@colors";

import { tempData, getTempData } from '@services/tempData';

const screenWidth = Math.round(Dimensions.get('window').width);

class BarCharts extends Component {
  state = {
    currencyArray: tempData
  }

  componentDidMount() {
    const { getListStreams } = this.props;
    this.updateData();
    this.refreshTimer = setInterval(() => {
      this.updateData();
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.refreshTimer);
  }

  updateData = () => {
    const newCurrencyArray = tempData.map(item => {
      return {
        title: item.title,
        up : (item.up * 4 + Math.random() * 100) * 0.2,
        down : (item.down * 4 + Math.random() * 100) * 0.2,
        value : (item.value * 4 + Math.random() * 100) * 0.2
      };
    });
    this.setState({currencyArray: newCurrencyArray});
  }

  render() {
    const { title } = this.props;
    const { currencyArray } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.barChart}>
          <View style={styles.barContainer}>
            { currencyArray.map(data => {
              const isMax = data.title === 'CAD';
              const isMin = data.title === 'AUD';

              return (
                <View
                  key={data.title}
                  style={styles.barWithPercent}>
                  <Text style={[styles.capLabel, isMax && styles.greenColor, isMin && styles.redColor]}>{data.value.toFixed(1)}%</Text>
                  <View style={{flex: data.value * 0.01 }}>
                    <View style={styles.singleBar}></View>
                  </View>
                  <Text style={styles.bottomLabel}>{data.title}</Text>
                </View>
              );
            }) } 
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PANEL_COLOR,
    borderRadius: 16,
    margin: 8
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 8,
    color: MAIN_FORE_COLOR,
    fontSize: 24,
    fontFamily: "HelveticaLT67MC"
  },
  barChart: {
    flex: 1
  },
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 24,
    paddingRight: 24,
    justifyContent: 'space-between'
  },
  barWithPercent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capLabel: {
    color: MAIN_FORE_COLOR,
    fontSize: 16,
    fontFamily: "HelveticaLT67MC",
    marginBottom: 8
  },
  chartLabel: {
    flex: 0.5
  },
  bottomLabel: {
    color: SUB_FORE_COLOR,
    fontSize: 20,
    marginTop: 24,
    marginBottom: 24,
    fontFamily: "HelveticaLT67MC"
  },
  singleBar: {
    flex: 1,
    backgroundColor: SUB_FORE_COLOR,
    width: screenWidth / 16
  },
  redColor: {
    color: NEGATIVE_COLOR
  },
  greenColor: {
    color: POSITIVE_COLOR
  }
});

export default BarCharts;
