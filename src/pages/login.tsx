// Import the necessary dependencies
import React, { useState } from 'react';
import { IonInput, IonButton, IonBackButton } from '@ionic/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import './styles/pageStyles.css';

/**
 * React functional component that handles user login functionality.
 * @returns JSX.Element
 */
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  /**
   * Handles the login process when the user clicks the login button.
   * Uses Firebase's authentication API to sign in the user with the provided email and password.
   */
  const handleLogin = async () => {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Logged in user:', user);

      // Redirect to /mapApp upon successful login
      history.push('/mapApp');
    } catch (err: any) {
      console.error('Login failed:', err.message);
      // Handle login failure (e.g., display error message)
    }
  };

  return (
    <div className='tausta'>
      <div className='sisalto'>
        <IonBackButton className='takaisin' defaultHref="/logreg" />
        <div className="loginTxt">Login</div>
        <img className="loginKuva" src="./src/images/logKuva.png" alt="Login" />
        <IonInput className='input' type="email" placeholder="  Email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
        <IonInput className='input' type="password" placeholder="  Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
        <IonButton id='logiNappi' onClick={handleLogin}>Login</IonButton>
      </div>
    </div>
  );
}

export default Login;



