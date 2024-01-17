import React, { useState } from 'react';
import { IonButtons, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonMenuButton, IonImg, IonMenuToggle } from '@ionic/react';
import '/src/pages/styles/pageStyles.css';

const MapApp: React.FC = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="map-container">
            <IonButtons slot='start' id='menuBtn'>
                <IonMenuButton onClick={toggleMenu} class='mapMenuButton'></IonMenuButton>
                <IonTitle id='titleMenu' >ChartAiApp</IonTitle>
            </IonButtons>

            <IonMenu side="start" contentId="main-content" menuId="main-menu">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem onClick={toggleMenu}>
                            <IonLabel>Option 1</IonLabel>
                        </IonItem>
                        <IonItem onClick={toggleMenu}>
                            <IonLabel>Option 2</IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>

            <div className="map-content" id="main-content">
                {/* Map content */}
                <iframe width="100%" height="100%" src="https://api.maptiler.com/maps/367841e2-b0d0-43f4-a6d7-ed66c7a0b218/?key=2zkfkuwjjwxntEBENk9b#1.0/0.00000/0.00000"></iframe>
            </div>
        </div>
    );
};

export default MapApp;

