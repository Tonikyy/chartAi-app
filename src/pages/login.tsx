// LoginPage.tsx
import React, { useState } from 'react';
import { IonInput, IonButton, IonBackButton, IonImg } from '@ionic/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './styles/login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const auth = getAuth();
    
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Onnistunut kirjautuminen
      const user = userCredential.user;
      console.log('Logged in user:', user);
      // Redirect or perform any action upon successful login
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure (e.g., display error message)
    }
  };

  return (
    <div className='tausta'>
      <div className='sisalto'>
        <IonBackButton className='takaisin' defaultHref="/logreg" />
        <div className="loginTxt">Login</div>
        <img className="loginKuva" src="./src/images/logKuva.png" />
      
        <IonInput className='input' type="email" placeholder="  Email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        <IonInput className='input' type="password" placeholder="  Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonButton className='logiNappi' onClick={handleLogin}>Login</IonButton>
      </div>
    </div>
  );
};

export default Login;

