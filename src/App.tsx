import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SplashScreen from './pages/SplashScreen';
import LogReg from './pages/logreg';
import login from './pages/login';
import register from './pages/register';

// Import Firebase and Firebase configuration
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import MapApp from './pages/mapApp';


// ...

// Initialize Firebase
initializeApp(firebaseConfig);

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/splash" component={SplashScreen} exact />
        <Route path="/logreg" component={LogReg} />
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
        <Route path="/mapApp" component={MapApp} />
        {/* Add other routes here */}
        <Redirect exact from="/" to="/splash" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;