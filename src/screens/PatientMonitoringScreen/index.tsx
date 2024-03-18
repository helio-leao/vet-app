import {API_URL} from '@env';
import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Exam, Patient } from '../../types';
import PatientCard from '../../components/PatientCard';
import { PatientMonitoringScreenProp } from '../../navigation/HomeStack';
import { useRoute } from '@react-navigation/native';
import ChartCard from './components/ChartCard';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthProvider';
import ContainerLoadingIndicator from '../../components/ContainerLoadingIndicator';
import ContainerMessage from '../../components/ContainerMessage';
import RelationChartCard from './components/RelationChartCard';


function PatientMonitoringScreen(): React.JSX.Element {
  const {accessToken} = useContext(AuthContext);
  const route = useRoute<PatientMonitoringScreenProp>();
  const [isLoading, setIsLoading] = useState(true);
  const [patient, setPatient] = useState<Patient>();
  const [exams, setExams] = useState<Exam[]>([]);


  useEffect(() => {
    async function loadData() {
      const { id } = route.params;

      try {
        const examsRequest = axios.get(`${API_URL}/exams/${id}`);
        const patientRequest = axios.get(`${API_URL}/patients/${id}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          }
        });
  
        const [examsResponse, patientResponse] =
          await Promise.all([examsRequest, patientRequest]);
  
        setPatient(patientResponse.data);
        setExams(examsResponse.data);
        setIsLoading(false);
      } catch {
        Alert.alert('Atenção', 'Ocorreu um erro inesperado.');
      }
    }
    loadData();
  }, []);


  if(isLoading) {
    return (
      <ContainerLoadingIndicator />
    );
  }

  if(!patient) {
    return (
      <ContainerMessage text='Paciente não encontrado' />
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
              title='Fósforo (mg/dL)'
              exams={exams.filter(exam => exam.type === 'fósforo').slice(-4)}
              yMaxGridValue={4}
              yMinGridValue={7.3}
            />
            <ChartCard
              title='Cálcio ionizado (mmol/L)'
              exams={exams.filter(exam => exam.type === 'cálcio ionizado').slice(-4)}
              yMaxGridValue={1.1}
              yMinGridValue={1.4}
            />
            <ChartCard
              title='Pressão arterial (mmHg)'
              exams={exams.filter(exam => exam.type === 'pressão arterial').slice(-4)}
              yMaxGridValue={80}
              yMinGridValue={220}
            />
            <ChartCard
              title='Ureia (mg/dL)'
              exams={exams.filter(exam => exam.type === 'ureia').slice(-4)}
              yMaxGridValue={10}
              yMinGridValue={60}
            />
            <ChartCard
              title='Creatinina (mg/dL)'
              exams={exams.filter(exam => exam.type === 'creatinina').slice(-4)}
              yMaxGridValue={0.4}
              yMinGridValue={1.6}
            />
            <ChartCard
              title='Densidade urinária'
              exams={exams.filter(exam => exam.type === 'densidade urinária').slice(-4)}
              yMaxGridValue={1.001}
              yMinGridValue={1.080}
            />
            <RelationChartCard
              titleSet1='Albumina'
              titleSet2='Globulinas'
              unit='g/dL'
              set1={exams.filter(exam => exam.type === 'albumina').slice(-4)}
              set2={exams.filter(exam => exam.type === 'globulinas').slice(-4)}
              yMaxGridValue={2.3}
              yMinGridValue={4.5}
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