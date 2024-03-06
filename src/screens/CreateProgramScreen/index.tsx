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
  const [isEnabled, setIsEnabled] = useState(false);


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
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
            <SwitchRow
              text={'Escore corporal'}
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
          </View>

          <View>
            <Text style={styles.title}>
              Hematologia
            </Text>

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, gap: 10}}>
              <SwitchRow
                text={'Hemograma'}
                value={isEnabled}
                onValueChange={setIsEnabled}
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
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Globulinas'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Creatinina'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Ureia'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'SDMA'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
            </View>
          </View>

          <View style={{paddingRight: 10}}>
            <SwitchRow
              text={'Hemogasometria'}
              value={isEnabled}
              onValueChange={setIsEnabled}
            />
          </View>

          <View>
            <Text style={styles.title}>
              Urina
            </Text>

            <View style={{backgroundColor: '#fff', padding: 10, borderRadius: 10, gap: 10}}>
              <SwitchRow
                text={'Sumário'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'RPCU'}
                value={isEnabled}
                onValueChange={setIsEnabled}
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
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Cálcio total'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Fósforo'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Sódio'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Potássio'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Cloreto'}
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Magnésio'}
                value={isEnabled}
                onValueChange={setIsEnabled}
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
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'Raio X'}
                value={isEnabled}
                onValueChange={setIsEnabled}
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
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <SwitchRow
                text={'TSH'}
                value={isEnabled}
                onValueChange={setIsEnabled}
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