import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import chartPlaceholder from '../../../assets/images/chart-placeholder.png';
import { LineChart, YAxis, Grid, XAxis } from 'react-native-svg-charts';
import { Exam } from '../../../types';
import moment from 'moment';


type ChartCardProps = {
  exams: Exam[],
  title: string,
  yMinGridValue: number,
  yMaxGridValue: number,
  decimalPlaces?: number,
}


function ChartCard({
  exams, 
  title,
  yMinGridValue,
  yMaxGridValue,
  decimalPlaces,
}: ChartCardProps): React.JSX.Element {

  return (
    <View style={styles.chartCard}>              
      <Text style={[styles.text, {marginBottom: 10, marginLeft: 10}]}>
        {title}
      </Text>

      {exams.length > 0 ? (
        <Chart
          exams={exams} 
          yMinGridValue={yMinGridValue}
          yMaxGridValue={yMaxGridValue}
          decimalPlaces={decimalPlaces}
        />
      ) : (
        <Image
          source={chartPlaceholder}
          style={{marginVertical: 60, height: 100, aspectRatio: 1, alignSelf: 'center', opacity: 0.3}}
        />
      )}
    </View>
  );
}

function Chart({
  exams, 
  yMinGridValue, 
  yMaxGridValue,
  decimalPlaces,
}: { exams: Exam[], yMinGridValue: number, yMaxGridValue: number, decimalPlaces?: number }) {

  const data = exams.map(exam => exam.result);
  const labels = exams.map(exam => moment(exam.date).utc().format('DD-MM-YY'));

  return(
    <View style={{ marginHorizontal: 20 }}>
      <View style={{ height: 200, flexDirection: 'row' }}>
        <YAxis
          style={{width: 40}}
          data={[yMinGridValue, yMaxGridValue]}
          contentInset={{ top: 20, bottom: 20 }}
          formatLabel={(value: number, index: number) => decimalPlaces ? value.toFixed(decimalPlaces) : value}
          svg={{
            fill: 'grey',
            fontSize: 14,
          }}
          numberOfTicks={8}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          gridMin={yMinGridValue}
          gridMax={yMaxGridValue}
          data={data}
          svg={{ stroke: '#0ab', strokeWidth: 2 }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
      <XAxis
        style={{ marginTop: 5 }}
        data={data}
        formatLabel={(value: number, index: number) => decimalPlaces ? data[index].toFixed(decimalPlaces) : data[index]}
        contentInset={{ left: 66, right: 18 }}
        svg={{ fontSize: 14, fill: '#0ab' }}
      />
      <XAxis
        style={{ marginTop: 5 }}
        data={labels}
        formatLabel={(value: number, index: number) => labels[index]}
        contentInset={{ left: 76, right: 28 }}
        svg={{ fontSize: 14, fill: 'grey' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#0ab',
  },
  chartCard: {
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderLeftColor: '#999',
    borderBottomColor: '#999',
    borderRightColor: '#999',
  },
});

export default ChartCard;