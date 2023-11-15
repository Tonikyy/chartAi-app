import React, { useState } from 'react';
import { IonInput, IonButton, IonBackButton } from '@ionic/react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'; // Adjusted import for Firebase Storage
import './styles/register.css';

  const Register: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      if (profilePicture) {
        const storage = getStorage(); // Get the storage instance
        const storageRef = ref(storage, `profilePictures/${userCredential.user.uid}`);
        await uploadBytes(storageRef, profilePicture);

        // Update user profile information
        await updateProfile(userCredential.user, {
          displayName: fullName,
          photoURL: await getDownloadURL(storageRef),
        });
      } else {
        // Update user profile information (without profile picture)
        await updateProfile(userCredential.user, {
          displayName: fullName,
        });
      }

      console.log('User registered:', userCredential.user);
    } catch (err: any) {
      setError(err.message || 'An error occurred during registration.');
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePicture(event.target.files[0]);
    }
  };

  return (
    <div className='tausta'>
      <div className='sisalto'>
        <IonBackButton className='takaisin' defaultHref="/logreg" />
        <div className="registerTxt">Register</div>
        <img className="registerKuva" src="./src/images/register.png" />
        
        <IonInput className='input' type="email" placeholder="Email" value={email} onIonChange={(e) => setEmail(e.detail.value!)}/>
        <IonInput className='input' type="password" placeholder="Password" value={password} onIonChange={(e) => setPassword(e.detail.value!)}/>
        <IonInput className='input' type="text" placeholder="Full Name" value={fullName} onIonChange={(e) => setFullName(e.detail.value!)}/>
       
        <label htmlFor="tiedostoLataus" className="fileInputLabel">
          Upload Profile Picture
        </label>
        <input id='tiedostoLataus' type="file" accept="image/*" onChange={handleFileChange} />
      
        <IonButton className='registerNappi' onClick={handleRegister}>Register</IonButton>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Register;
