import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonPage,
  IonRouterLink,
  IonButton,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
  IonProgressBar,
} from "@ionic/react";

const PreSummary: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonProgressBar
            className="ion-margin-top"
            value={0.8}
          ></IonProgressBar>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonText color="dark" className="ion-text-center">
          <h2 className="ion-padding">
            {" "}
            You are doing well ! Now we are running up the summary for you...
          </h2>
        </IonText>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center loader"></IonCol>
          </IonRow>
        </IonGrid>
        <IonRouterLink routerLink="cycleSummary">
          <IonButton
            color="light"
            className="ion-text-center discliamerContinue"
          >
            CONTINUE
          </IonButton>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default PreSummary;