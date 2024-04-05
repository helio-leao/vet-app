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

// todo: verify if set 1 and 2 items dates are equals


type RelationChartCardProps = {
  set1: Exam[],
  set2: Exam[],
  titleSet1: string,
  titleSet2: string,
  unit: string,
  yMinGridValue: number,
  yMaxGridValue: number,
}


function RelationChartCard({
  set1,
  set2,
  titleSet1,
  titleSet2,
  unit,
  yMinGridValue,
  yMaxGridValue,
}: RelationChartCardProps): React.JSX.Element {

  return (
    <View style={styles.chartCard}>              
      <Text style={[styles.text, {marginBottom: 10, marginLeft: 10}]}>
        <Text style={{color: '#0ab'}}>
          {titleSet1}
        </Text>
        <Text>
          {' x '}
        </Text>
        <Text style={{color: '#f00'}}>
          {titleSet2}
        </Text>
        <Text>
          {` (${unit})`}
        </Text>
      </Text>

      {set1.length > 1 ? (
        <Chart
          set1={set1} 
          set2={set2}
          yMinGridValue={yMinGridValue}
          yMaxGridValue={yMaxGridValue}
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
  set1,
  set2,
  yMinGridValue, 
  yMaxGridValue,
}: { set1: Exam[], set2: Exam[], yMinGridValue: number, yMaxGridValue: number }) {

  const labels = set1.map(exam => moment(exam.date).utc().format('DD-MM-YY'));
  const dataList = [
    {
        data: set1.map(exam => exam.result),
        svg: { stroke: '#0ab' },
    },
    {
        data: set2.map(exam => exam.result),
        svg: { stroke: '#f00' },
    },
  ];


  return(
    <View style={{ marginHorizontal: 20 }}>
      <View style={{ height: 200, flexDirection: 'row' }}>
        <YAxis
          style={{width: 40}}
          data={[yMinGridValue, yMaxGridValue]}
          contentInset={{ top: 20, bottom: 20 }}
          formatLabel={(value: number, index: number) => value}
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
          data={dataList}
          svg={{ strokeWidth: 2 }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
      <XAxis
        style={{ marginTop: 5 }}
        data={labels}
        formatLabel={(_value: number, i: number) => {
          const set1ItemResult = set1?.[i]?.result;
          const set2ItemResult = set2?.[i]?.result;
          
          if (set1ItemResult && set2ItemResult) {
            return (set1ItemResult / set2ItemResult).toFixed(2);
          } else {
            return set1ItemResult ?? set2ItemResult ?? undefined;
          }
        }}
        contentInset={{ left: 66, right: 14 }}
        svg={{ fontSize: 14, fill: 'darkgreen' }}
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

export default RelationChartCard;