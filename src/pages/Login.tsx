import React from 'react';
import {
    IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
    IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar
} from '@ionic/react';

import './Login.css';
import axios from 'axios';

const Login: React.FC = () => {

    const apiKEY = "Basic YmIyNjRiY2UtYzQwNy00OTgyLTkwMTctOTdkMzcyN2ZjZmE0OiQyYSQxMCQ2MTlraQ==";
    const [data, setData] = React.useState({ehrId: ''} );
    const [subjectId, setSubjectId] = React.useState('9999999000');
    const [endpoint, setEndpoint] = React.useState('');
    const [templates, setTemplates] = React.useState([]);

   React.useEffect(() => {

    console.log(`subjectId: ${subjectId}`) ;
    console.log(`endpoint: ${endpoint}`) ;

       const getEhrIdFromSubjectId = async () =>{
           const result =  await axios({
               url: endpoint,
               method: 'get',
               headers: {Authorization: apiKEY, contentType: 'application/json'},
           });
           setData(result.data)
       };

       const getTemplates = async () =>{
           const result =  await axios({
               url: 'https://cdr.code4health.org/rest/v1/template',
               method: 'get',
               headers: {Authorization: apiKEY, contentType: 'application/json'},
           });
           setTemplates(result.data.templates)
       };

       getEhrIdFromSubjectId();
       getTemplates();

    }, [endpoint]);


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>NHS Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader color="primary">
                        <IonCardSubtitle>subjectID to ehrID</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                        When you press the login button, a call is made to the openEHR CDR to get the patient's internal
                        ehrId, from their NHS Number known as the subjectID in the API.
                        You should cache the ehrID for subsequent calls to the the CDR. A list of registered templates is also displayed
                    </IonCardContent>
                    <IonCardContent>
                        <IonItem>
                            <IonLabel>NHS Number</IonLabel>
                            <IonInput
                                type="text"
                                onIonChange={(e) => setSubjectId((e.target as HTMLInputElement).value)}
                            />

                            <IonButton
                                type="submit"
                                color="primary"
                                slot="end"
                                onClick={() =>
                                    setEndpoint(`https://cdr.code4health.org/rest/v1/ehr/?subjectId=${subjectId}&subjectNamespace=uk.nhs.nhs_number`)
                                }
                            >
                                Login
                            </IonButton>
                        </IonItem>
                    </IonCardContent>
                    <IonCardContent>
                        <IonItem key={data.ehrId}>
                            <IonLabel>EhrId : {data.ehrId} </IonLabel>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader color="primary">
                        <IonCardSubtitle>List of templates</IonCardSubtitle>
                    </IonCardHeader>
                            <IonList color="primary">
                                {
                                    templates.map(template => {
                                        return (
                                            <IonItem key={template['templateId']}>
                                                {template['templateId']}
                                            </IonItem>
                                        );
                                    })
                                }
                            </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
