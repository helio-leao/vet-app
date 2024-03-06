import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import patientsMocks from '../../mocks/patients.json';
import examsMocks from '../../mocks/exams.json';
import { Patient } from '../../types';
import PatientCard from '../../components/PatientCard';
import { PatientMonitoringScreenProp } from '../../navigation/HomeStack';
import { useRoute } from '@react-navigation/native';
import ChartCard from './components/ChartCard';


function PatientMonitoringScreen(): React.JSX.Element {
  const route = useRoute<PatientMonitoringScreenProp>();
  const [patient, setPatient] = useState<Patient>();


  useEffect(() => {
    const { id } = route.params;
    setPatient(patientsMocks.find(patient => patient.id === id));
  }, []);


  if(!patient) {
    return (
      <View style={[
        styles.screenContainer,
        {justifyContent: 'center', alignItems: 'center'}
      ]}>
        <Text>Not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.screenContainer}>
      <View style={{paddingHorizontal: 16, paddingTop: 16}}>
        <PatientCard patient={patient} />
      </View>

      <ScrollView style={{flex: 1, marginTop: 10}}>
        <View style={{paddingHorizontal: 16, paddingBottom: 16}}>

          {/* CHARTS */}
          <View style={{gap: 20}}>
            <ChartCard
              type='Fósforo (mg/dL)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Fósforo'))}
              yMaxGridValue={4}
              yMinGridValue={7.3}
            />
            <ChartCard
              type='Cálcio ionizado (mmol/L)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Cálcio ionizado'))}
              yMaxGridValue={1.1}
              yMinGridValue={1.4}
            />
            <ChartCard
              type='Pressão arterial (mmHg)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Pressão arterial'))}
              yMaxGridValue={80}
              yMinGridValue={220}
            />
            <ChartCard
              type='Ureia (mg/dL)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Ureia'))}
              yMaxGridValue={10}
              yMinGridValue={60}
            />
            <ChartCard
              type='Creatinina (mg/dL)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Creatinina'))}
              yMaxGridValue={0.4}
              yMinGridValue={1.6}
            />
          </View>
          {/* END CHARTS */}

          {/* BUTTONS */}
          <View style={{alignSelf: 'center', marginTop: 10, gap: 10}}>
            <TouchableOpacity style={{backgroundColor: '#0ab', paddingVertical: 20, paddingHorizontal: 40, borderRadius: 6}}>
              <Text style={[styles.text, {color: '#fff', fontWeight: '600', alignSelf: 'center'}]}>
                Anexar Exames
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderWidth: 2, borderColor: '#0ab', paddingVertical: 20, paddingHorizontal: 40, borderRadius: 8}}>
              <Text style={[styles.text, {color: '#0ab', fontWeight: '600', alignSelf: 'center'}]}>
                Digitar Resultados
              </Text>
            </TouchableOpacity>
          </View>
          {/* END BUTTONS */}

        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: '#999',
  },
});

export default PatientMonitoringScreen;