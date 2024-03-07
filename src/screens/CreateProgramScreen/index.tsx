import { useNavigation, useRoute } from '@react-navigation/native';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { PatientStatusScreenProp, StackNavigationProp } from '../../navigation/HomeStack';
import patientsMocks from '../../mocks/patients.json';
import { Patient } from '../../types';
import PatientCard from '../../components/PatientCard';


function CreateProgramScreen(): React.JSX.Element {
  const navigation = useNavigation<StackNavigationProp>();
  const route = useRoute<PatientStatusScreenProp>();
  const [patient, setPatient] = useState<Patient>();
  const [isEnabled, setIsEnabled] = useState<boolean[]>([]);


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

      <PatientCard patient={patient} />

      <ScrollView style={styles.contentContainer}>
        <View style={{padding: 10, gap: 10}}>

          <View style={{gap: 10, paddingRight: 10}}>
            <SwitchRow
              text={'Aferição de pressão arterial'}
              value={isEnabled[0]}
              onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[0] = value
                return updated
              })}
            />
            <SwitchRow
              text={'Escore corporal'}
              value={isEnabled[1]}
              onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[1] = value
                return updated
              })}
            />
          </View>

          <View>
            <Text style={styles.title}>
              Hematologia
            </Text>

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, gap: 10}}>
              <SwitchRow
                text={'Hemograma'}
                value={isEnabled[2]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[2] = value
                return updated
              })}
              />
            </View>
          </View>

          <View>
            <Text style={styles.title}>
              Bioquímicos
            </Text>

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, gap: 10}}>
              <SwitchRow
                text={'Albumina'}
                value={isEnabled[3]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[3] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Globulinas'}
                value={isEnabled[4]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[4] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Creatinina'}
                value={isEnabled[5]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[5] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Ureia'}
                value={isEnabled[6]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[6] = value
                return updated
              })}
              />
              <SwitchRow
                text={'SDMA'}
                value={isEnabled[7]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[7] = value
                return updated
              })}
              />
            </View>
          </View>

          <View style={{paddingRight: 10}}>
            <SwitchRow
              text={'Hemogasometria'}
              value={isEnabled[8]}
              onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[8] = value
                return updated
              })}
            />
          </View>

          <View>
            <Text style={styles.title}>
              Urina
            </Text>

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, gap: 10}}>
              <SwitchRow
                text={'Sumário'}
                value={isEnabled[9]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[9] = value
                return updated
              })}
              />
              <SwitchRow
                text={'RPCU'}
                value={isEnabled[10]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[10] = value
                return updated
              })}
              />
            </View>
          </View>

          <View>
            <Text style={styles.title}>
              Eletrólitos
            </Text>

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, gap: 10}}>
              <SwitchRow
                text={'Cálcio ionizado'}
                value={isEnabled[11]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[11] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Cálcio total'}
                value={isEnabled[12]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[12] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Fósforo'}
                value={isEnabled[13]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[13] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Sódio'}
                value={isEnabled[14]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[14] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Potássio'}
                value={isEnabled[15]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[15] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Cloreto'}
                value={isEnabled[16]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[16] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Magnésio'}
                value={isEnabled[17]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[17] = value
                return updated
              })}
              />
            </View>
          </View>
          
          <View>
            <Text style={styles.title}>
              Imagem
            </Text>

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, gap: 10}}>
              <SwitchRow
                text={'Ultrassonografia abdominal'}
                value={isEnabled[18]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[18] = value
                return updated
              })}
              />
              <SwitchRow
                text={'Raio X'}
                value={isEnabled[19]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[19] = value
                return updated
              })}
              />
            </View>
          </View>

          <View>
            <Text style={styles.title}>
              Hormônios
            </Text>

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, gap: 10}}>
              <SwitchRow
                text={'PTH'}
                value={isEnabled[20]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[20] = value
                return updated
              })}
              />
              <SwitchRow
                text={'TSH'}
                value={isEnabled[21]}
                onValueChange={value => setIsEnabled(prev => {
                const updated = [...prev]
                // @ts-ignore
                updated[21] = value
                return updated
              })}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
            <TouchableOpacity
              style={{borderWidth: 2, borderColor: '#0ab',paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8}}
            >
              <Text style={[styles.text, {color: '#0ab', fontWeight: '600'}]}>
                Cancelar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor: '#0ab', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 8}}
              onPress={() => navigation.navigate('PatientMonitoringScreen', {id: route.params.id})}
            >
              <Text style={[styles.text, {color: '#fff', fontWeight: '600'}]}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

    </View>
  );
}

type SwitchRowProps = {
  text: string,
  value: boolean,
  onValueChange: Dispatch<SetStateAction<boolean>>,
}

function SwitchRow({text, value, onValueChange}: SwitchRowProps) {
  return(
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Text style={styles.text}>
        {text}
      </Text>

      <View style={{backgroundColor: value ? '#0ab':'#ccc', borderRadius: 20}}>
        <Switch
          style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
          trackColor={{false: '#aabbcc00', true: '#aabbcc00'}}
          thumbColor={'#fff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value={value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    marginTop: 10,
    flex: 1,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
    color: '#666',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});

export default CreateProgramScreen;