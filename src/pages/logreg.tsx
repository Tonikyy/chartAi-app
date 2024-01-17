import React from 'react';
import '/src/pages/styles/pageStyles.css';
import { useHistory } from 'react-router-dom';
import { IonBackButton, IonButton } from '@ionic/react';

const LogReg: React.FC = () => {
  const history = useHistory();

  const handleLoginClick = () => {
    //console.log('Login button clicked');
    // Navigate to the login page
    history.push('/login');
  };

  const handleRegisterClick = () => {
    //console.log('Register button clicked');
    // Navigate to the register page
    history.push('/register');
  };

  return (
    <div className="tausta">
        <IonBackButton className='takaisin' defaultHref="/splash" />
        <img id="logRegKuva" src="/src/images/logreg.png" />
        <h3 id='logRegTxt'>Register to start your journey towards new spots or Login to continue killing it!</h3>
        <IonButton id="logregbtn1" onClick={handleLoginClick}>
          <b> Login </b>
        </IonButton>
        <br/>
        <IonButton id="logregbtn2" onClick={handleRegisterClick}>
          <b> Register </b>
        </IonButton>
    </div>
  );
};

export default LogReg;
