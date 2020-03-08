import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  airplaneOutline,
  chatbubblesOutline,
  ellipse, glassesOutline,
  logInOutline,
  peopleCircleOutline,
  square,
  triangle
} from 'ionicons/icons';
import Login from './pages/Login';
import Symptoms from './pages/Symptoms';
import Contact from './pages/Contact';
import Travel from "./pages/Travel";
import Assess from "./pages/Assess";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/login" component={Login} exact={true} />
          <Route path="/symptoms" component={Symptoms} exact={true} />
          <Route path="/contact" component={Contact} exact={true} />
          <Route path="/travel" component={Travel} exact={true} />
          <Route path="/assess" component={Assess} exact={true} />
          <Route path="/" render={() => <Redirect to="/login" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="login" href="/login">
            <IonIcon icon={logInOutline} />
            <IonLabel>Login</IonLabel>
          </IonTabButton>
          <IonTabButton tab="symptoms" href="/symptoms">
            <IonIcon icon={chatbubblesOutline} />
            <IonLabel>Symptoms</IonLabel>
          </IonTabButton>
          <IonTabButton tab="contacts" href="/contacts">
            <IonIcon icon={peopleCircleOutline} />
            <IonLabel>Contacts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="travel" href="/travel">
            <IonIcon icon={airplaneOutline} />
            <IonLabel>Travel</IonLabel>
          </IonTabButton>
          <IonTabButton tab="assess" href="/assess">
            <IonIcon icon={glassesOutline} />
            <IonLabel>Assessment</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
