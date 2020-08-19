import React from 'react';
import CDRService from "../services/CDRService";
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import {CdrTemplates} from "./templates";

import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar
} from '@ionic/react';

import './Login.css';


const cdr =new CDRService(undefined);


const Login: React.FC = () => {

    const [cdrName, setCDRName] = React.useState(undefined);

    const [ehrId, setEhrId] = React.useState('' );
    const [subjectId, setSubjectId] = React.useState('9999999000');
    const [subjectNamespace, setSubjectNamespace] = React.useState('uk.nhs.nhs_number');
    //const [templates, setTemplates] = React.useState([]);



    const findEhrId = () => {

        const getEhrIdFromSubjectId = async () =>{
            const result =  await cdr.findEhrIdBySubjectId(subjectId,subjectNamespace);
            setEhrId(result)
        };

        if (cdrName && subjectId) getEhrIdFromSubjectId().then();

    }

   React.useEffect(() => {

        console.log(cdrName);

        cdr.setActiveCDR(cdrName);


    },[cdrName]);






    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>NHS Login</IonTitle>
                    <IonItem>
                        <IonLabel>CDR</IonLabel>
                        <IonSelect value={cdr.config.name}
                                   placeholder="Select CDR"
                                   onIonChange={ e => setCDRName(e.detail.value) }>
                            <IonSelectOption value="c4h">C4H</IonSelectOption>
                            <IonSelectOption value="EhrBase">EhrBase</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader color="primary">
                        <IonCardSubtitle>subject to ehrID</IonCardSubtitle>
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
                                value = {subjectId}
                                onIonChange={(e) => {
                                       setSubjectId((e.target as HTMLInputElement).value);
                                    }
                                }
                            />
                        <IonButton
                            disabled = { !cdrName }
                            onClick={ (e) => {findEhrId(); }
                        }>
                            Select
                        </IonButton>
                        </IonItem>

                    </IonCardContent>
                    <IonCardContent>
                        <IonItem key={ehrId}>
                            <IonLabel>EhrId : {ehrId} </IonLabel>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
                <IonCard>
                    <IonCardHeader color="primary">
                        <IonCardSubtitle>List of templates</IonCardSubtitle>
                    </IonCardHeader>
                    <IonList color="primary">
                        {

                            if (this.cdrName)
                        {
                            CdrTemplates(  (template: any) =>

                        {
                            return <IonItem key={template['templateId']}>
                            {template['templateId']}
                            </IonItem>}

                            )
                        }


                        }
                    </IonList>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Login;
