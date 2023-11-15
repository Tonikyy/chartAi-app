// LoginPage.tsx
import React, { useState } from 'react';
import { IonInput, IonButton } from '@ionic/react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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
    <div>
      <h1>Login Page</h1>
      <IonInput type="email" placeholder="Email" value={email} onIonChange={(e) => setEmail(e.detail.value!)} />
      <IonInput type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)} />
      <IonButton onClick={handleLogin}>Login</IonButton>
    </div>
  );
};

export default Login;
