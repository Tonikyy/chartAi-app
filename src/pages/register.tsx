import React, { useState } from 'react';
import { IonContent, IonInput, IonButton } from '@ionic/react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './styles/register.css';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // If registration is successful, you can handle the userCredential or redirect the user
      console.log('User registered:', userCredential.user);
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration.');
    }
  };

  return (
    <IonContent>
      <div>
        <IonInput
          type="email"
          placeholder="Email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
        />
        <IonInput
          type="password"
          placeholder="Password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
        <IonButton onClick={handleRegister}>Register</IonButton>
        {error && <p>{error}</p>}
      </div>
    </IonContent>
  );
};

export default Register;
