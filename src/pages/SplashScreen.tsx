// src/pages/SplashScreen.tsx
import React from 'react';
import '/src/pages/styles/pageStyles.css';
import { useHistory } from 'react-router';
import { IonButton } from '@ionic/react';

const SplashScreen: React.FC = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    console.log("-> logreg");
    // Navigate to the specific page
    history.push('/logreg'); 
    // Update '/my-page' with the actual path of your specific page
  };

  return (

      <div className="tausta">
        {/* ... */}
        <h1 id='splashTxtFirst'>Welcome aboard!</h1>
        <img id="splashKuva" src="./src/images/splash.png" />
        <h3 id='splashTxtSecond'>Navigate the waters like a pro with our spot revealing AI </h3>
        <IonButton id='splashNappi' onClick={() => handleButtonClick()}>
          <b>Get started</b>
        </IonButton>
      </div> 
    
  );
};

export default SplashScreen;

