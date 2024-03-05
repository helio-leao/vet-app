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


type ChartCardProps = {
  exams: Exam[],
  text: string,
}


function ChartCard({exams, text}: ChartCardProps): React.JSX.Element {
  return (
    <View style={styles.chartCard}>              
      <Text style={[styles.text, {marginBottom: 10, marginLeft: 10}]}>
        {text}
      </Text>

      {exams.length > 1 ? (
        <Chart exams={exams} />
      ) : (
        <Image
          source={chartPlaceholder}
          style={{height: 100, aspectRatio: 1, alignSelf: 'center', opacity: 0.3}}
        />
      )}
    </View>
  );
}

function Chart({exams}: {exams: Exam[]}) {
  const data = exams.map(exam => exam.result);
  const labels = exams.map(exam => exam.date);

  return(
    <View style={{ marginHorizontal: 20 }}>
      <View style={{ height: 180, flexDirection: 'row' }}>
        <YAxis
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          formatLabel={(value: any, index: number) => value}
          svg={{
            fill: 'grey',
            fontSize: 14,
          }}
          numberOfTicks={3}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{ stroke: '#0ab', strokeWidth: 2 }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
      <XAxis
        style={{ marginTop: 5 }}
        data={labels}
        formatLabel={(value: any, index: number) => labels[index]}
        contentInset={{ left: 50, right: 20 }}
        svg={{ fontSize: 14, fill: 'grey' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#999',
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