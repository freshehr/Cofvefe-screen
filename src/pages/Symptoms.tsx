import React from 'react';
import {
    IonButton,
    IonCheckbox,
    IonContent, IonDatetime,
    IonHeader,
    IonInput, IonItem,
    IonLabel,
    IonList, IonListHeader,
    IonPage, IonRadio, IonRadioGroup,
    IonTitle, IonToggle,
    IonToolbar
} from '@ionic/react';

import './Symptoms.css';
import axios from "axios";



const Symptoms: React.FC = () => {

    const Symptoms = {
        coughCode : "at0.3",
        dateOfOnset : "2020-03-01",
        feverCode :"at0.3",
        breathingCode : "at0.3",
        throatCode : "at0.3",
    };

    const targetComposition = () => {
       return {
           "ctx/language": "en",
           "ctx/territory": "GB",
           "ctx/composer_name": "Dr Jones",
           "ctx/id_namespace": "HOSPITAL-NS",
           "ctx/id_scheme": "HOSPITAL-NS",
           "ctx/health_care_facility|name": "Hospital",
           "ctx/health_care_facility|id": "9091",

           "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/symptom_sign_name|code": "315642008",
           "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/symptom_sign_name|value": "Influenza-like symptoms",
           "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/first_onset_of_symptoms": Symptoms.dateOfOnset,
           "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/presence|code": "at0.3",

           "suspected_covid-19_risk_assessment/symptoms/cough:0/symptom_sign_name|code": "49727002",
           "suspected_covid-19_risk_assessment/symptoms/cough:0/symptom_sign_name|value": "Cough",
           "suspected_covid-19_risk_assessment/symptoms/cough:0/presence|code": Symptoms.coughCode,

           "suspected_covid-19_risk_assessment/symptoms/fever:0/symptom_sign_name|code": "386661006",
           "suspected_covid-19_risk_assessment/symptoms/fever:0/symptom_sign_name|value": "Fever",
           "suspected_covid-19_risk_assessment/symptoms/fever:0/presence|code": Symptoms.feverCode,

           "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/symptom_sign_name|code": "267036007",
           "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/symptom_sign_name|value": "Difficulty breathing",
           "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/presence|code": Symptoms.breathingCode,

           "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/symptom_sign_name|code": "162397003",
           "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/symptom_sign_name|value": "Pain in throat",
           "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/presence|code": Symptoms.breathingCode
       }
    };

    const apiKEY = "Basic YmIyNjRiY2UtYzQwNy00OTgyLTkwMTctOTdkMzcyN2ZjZmE0OiQyYSQxMCQ2MTlraQ==";

    const [ehrId, setEhrId] = React.useState('b80a3a97-be75-41c6-a497-6ed53ce8f8c6' );
    const [compositionId, setCompositionId] = React.useState("");
    const [endpoint, setEndpoint] = React.useState('');


    React.useEffect(() => {

       // console.log(`ehrId: ${ehrId}`) ;
       // console.log(`endpoint: ${endpoint}`) ;

        const postComposition = async () =>{
            const result =  await axios({
                url: endpoint,
                method: 'post',
                headers: {Authorization: apiKEY, contentType: 'application/json'},
                data: targetComposition()
            });
            setCompositionId(result.data.compositionUid);

            console.log(`compositionId: ${compositionId}`) ;

        };


     postComposition();

    }, [endpoint]);



    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Symptoms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
          <IonItem>
              <IonLabel>Onset of symptoms</IonLabel>
              <IonDatetime displayFormat="DD MMM YY" placeholder="Select Date"/>
          </IonItem>
          <IonList>
              <IonRadioGroup value="fever">
                  <IonListHeader>
                      <IonLabel>Fever</IonLabel>
                  </IonListHeader>
                  <IonItem>
                      <IonLabel>Present</IonLabel>
                      <IonRadio slot="start" value="at001"/>
                  </IonItem>
                  <IonItem>
                      <IonLabel>Absent</IonLabel>
                      <IonRadio slot="start" value="at003" />
                  </IonItem>
                  <IonItem>
                      <IonLabel>Unknown</IonLabel>
                      <IonRadio slot="start" value="at004" />
                  </IonItem>
              </IonRadioGroup>

              <IonRadioGroup value="Cough">
                  <IonListHeader>
                      <IonLabel>Cough</IonLabel>
                  </IonListHeader>
                  <IonItem>
                      <IonLabel>Present</IonLabel>
                      <IonRadio slot="start" value="at001"/>
                  </IonItem>
                  <IonItem>
                      <IonLabel>Absent</IonLabel>
                      <IonRadio slot="start" value="at003" />
                  </IonItem>
                  <IonItem>
                      <IonLabel>Unknown</IonLabel>
                      <IonRadio slot="start" value="at004" />
                  </IonItem>
              </IonRadioGroup>

              <IonRadioGroup value="breathlessness">
                  <IonListHeader>
                      <IonLabel>Breathlessness</IonLabel>
                  </IonListHeader>
                  <IonItem>
                      <IonLabel>Present</IonLabel>
                      <IonRadio slot="start" value="at001"/>
                  </IonItem>
                  <IonItem>
                      <IonLabel>Absent</IonLabel>
                      <IonRadio slot="start" value="at003" />
                  </IonItem>
                  <IonItem>
                      <IonLabel>Unknown</IonLabel>
                      <IonRadio slot="start" value="at004" />
                  </IonItem>
              </IonRadioGroup>

              <IonRadioGroup value="sorethoat">
                  <IonListHeader>
                      <IonLabel>Sore throat</IonLabel>
                  </IonListHeader>
                  <IonItem>
                      <IonLabel>Present</IonLabel>
                      <IonRadio slot="start" value="at001"/>
                  </IonItem>
                  <IonItem>
                      <IonLabel>Absent</IonLabel>
                      <IonRadio slot="start" value="at003" />
                  </IonItem>
                  <IonItem>
                      <IonLabel>Unknown</IonLabel>
                      <IonRadio slot="start" value="at004" />
                  </IonItem>
              </IonRadioGroup>

              <IonButton
                  type="submit"
                  color="primary"
                  slot="end"
                  onClick={() =>
                      setEndpoint(`https://cdr.code4health.org/rest/v1/composition/?ehrId=${ehrId}&templateId=openEHR-Suspected Covid-19 assessment.v0&format=FLAT`)
                  }
              >
                  Save
              </IonButton>
              <IonLabel>Composition ID= {compositionId}</IonLabel>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Symptoms;
