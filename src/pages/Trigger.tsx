import {
  IonHeader,
  IonContent,
  IonPage,
  IonButton,
  IonProgressBar,
  IonItem,
  IonLabel,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonInput,
  IonRouterLink,
  IonToolbar,
} from "@ionic/react";

import Cta from "../components/Cta";

const Trigger: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Cta />
          <IonProgressBar
            className="ion-margin-top"
            value={0.2}
          ></IonProgressBar>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding ion-margin-top">
        <h3>What triggered your reaction?</h3>
        <IonList>
          <IonRadioGroup value="triggers">
            <IonItem>
              <IonLabel>An eyeroll</IonLabel>
              <IonRadio slot="end" value="An eyeroll"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>A look of annoyance</IonLabel>
              <IonRadio slot="end" value="A look of annoyance"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Negative tone of voice</IonLabel>
              <IonRadio slot="end" value="Negative tone of voice"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Walking away</IonLabel>
              <IonRadio slot="end" value="Walking away"></IonRadio>
            </IonItem>

            <IonItem>
              <IonLabel>Being loud</IonLabel>
              <IonRadio slot="end" value="Being loud"></IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonList>

        <IonItem className="ion-margin-top">
          <IonLabel position="stacked">Other</IonLabel>
          <IonInput></IonInput>
        </IonItem>

        <IonRouterLink routerLink="emotion">
          <IonButton color="light" className="ion-text-center buttonStyle">
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Trigger;
