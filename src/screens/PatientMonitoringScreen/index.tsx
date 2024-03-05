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
      <ScrollView>
        <View style={{paddingHorizontal: 10, paddingVertical: 20}}>

          <PatientCard patient={patient} />            

          {/* CHARTS */}
          <View style={{marginTop: 20, gap: 20}}>
            <ChartCard
              text='Fósforo(mg/dL)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Fósforo(mg/dL)'))}
            />
            <ChartCard
              text='Cálcio ionizado(mg/dL)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Cálcio ionizado(mg/dL)'))}
            />
            <ChartCard
              text='Pressão arterial(mmHg)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Pressão arterial(mmHg)'))}
            />
            <ChartCard
              text='Ureia(mg/dL)'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Ureia(mg/dL)'))}
            />
            <ChartCard
              text='Creatinina'
              exams={examsMocks.filter(exam =>
                exam.patientId === patient.id && exam.type.includes('Creatinina'))}
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