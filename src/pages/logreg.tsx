import React from 'react';
import './styles/logreg.css';
import { useHistory } from 'react-router-dom';
import { IonBackButton, IonButton } from '@ionic/react';

const LogReg: React.FC = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    console.log('Login button clicked');
    // Navigate to the login page
    history.push('/login');
  };

  const handleRegisterClick = () => {
    console.log('Register button clicked');
    // Navigate to the register page
    history.push('/register');
  };

  return (
    <div className="tausta">
      <div className="sisalto">
        <IonBackButton className='takaisin' defaultHref="/splashscreen" />
        <IonButton className="logregbtn1" onClick={handleLoginClick}>
          <b> Login </b>
        </IonButton>
        <br/>
        <IonButton className="logregbtn2" onClick={handleRegisterClick}>
          <b> Register </b>
        </IonButton>
      </div>
    </div>
  );
};

export default LogReg;
