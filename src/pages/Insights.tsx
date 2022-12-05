// import { useState } from "react";

import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonRouterLink,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonImg,
} from "@ionic/react";

const Insights: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonProgressBar className="ion-margin-top" value={0.8}></IonProgressBar>

        <h2 className="ion-padding ion-text-center">Insights </h2>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h4 className="ion-text-center" color="grey">
                Top Triggers
              </h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonImg src="https://placekitten.com/200/200"></IonImg>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol>
              <h4 className="ion-text-center">Top Emotions</h4>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonImg src="https://placekitten.com/201/201"></IonImg>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonRouterLink routerLink="/">
          <IonButton color="light" className="ion-text-center">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Insights;
