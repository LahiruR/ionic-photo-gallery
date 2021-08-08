import './ExploreContainer.css';

import { camera, trash, close, images } from 'ionicons/icons';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
         IonFab, IonFabButton, IonIcon, IonGrid, IonRow,
         IonCol, IonImg, IonText } from '@ionic/react';

import { usePhotoGallery } from "../hooks/useGalleryPhotos";


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { takePhoto, photos } = usePhotoGallery();

   console.log('photos', photos);
  
  return (
    <div className="container">
    
      <IonContent>
          <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={ () => takePhoto() } >
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
          <IonGrid> 
              <IonRow>
                {photos.map((photo, index) => (
                  <IonCol size="6" key={index}>
                    <IonImg src={photo.webviewPath} />
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </IonFab>
        </IonContent>
    </div>
  );
};

export default ExploreContainer;
