import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from "react-native-chart-kit";

export default function TabThreeScreen() {
  return (
    <View>
      <Text style={styles.titleText}>O uso de ChatGPT nos trabalhos de TIAW</Text>
      <LineChart
        data={{
          labels: ["Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho"],
          datasets: [
            {
              data: [
                Math.random() * 10,
                Math.random() * 20,
                Math.random() * 30,
                Math.random() * 30,
                Math.random() * 40,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel=""
        yAxisSuffix="%"
        yAxisInterval={1}
        chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#7FFF00',
        backgroundGradientTo: '#00C957',
                  decimalPlaces: 2,
          color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#fff"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,        
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    backgroundColor: '#00C000',
    padding: 8,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    marginHorizontal: "auto",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
