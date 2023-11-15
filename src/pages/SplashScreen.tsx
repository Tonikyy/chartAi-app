// src/pages/SplashScreen.tsx
import React from 'react';
import './styles/SplashScreen.css';
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
    <div className="taustasplash">
      {/* Your existing content */}
      
      <div className="sisalto">
        {/* ... */}
        <IonButton className="splashbtn" onClick={() => handleButtonClick()}>
          <b>Get started</b>
        </IonButton>
      </div> 
    </div>
  );
};

export default SplashScreen;

