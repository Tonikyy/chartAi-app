// src/pages/SplashScreen.tsx
import React from 'react';
import './SplashScreen.css';
import { useHistory } from 'react-router';

const SplashScreen: React.FC = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Navigate to the specific page
    history.push('/logreg'); 
    // Update '/my-page' with the actual path of your specific page
  };
return (
    <div className="SplashScreen">
      {/* Your existing content */}
      
      <div className="splashbtn">
        {/* ... */}
        <button
  className="splashbtn"
  style={{
    width: 303,
    height: 60,
    left: 44,
    top: 710,
    position: 'absolute',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    background: 'aquamarine',
    borderRadius: 10,
    fontFamily: 'sans-serif',
    font: 'poppins',
    fontSize: 16,
    color: 'black',
  }}
  onClick={() => handleButtonClick()}
>
  Get started
</button>
      </div> 
    </div>
  );
};

export default SplashScreen;
