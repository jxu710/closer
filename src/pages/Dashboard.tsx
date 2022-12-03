import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonNavLink,
  IonButton,
} from "@ionic/react";

import Intro from "../components/Intro";
import Intro2 from "../components/Intro2";
const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonNavLink routerDirection="forward" component={() => <Intro2 />}>
          <IonButton
            color="dark"
            className="signInTitle ion-text-center"
            size="large"
            style={{ margin: "10%" }}
          >
            Log in a new conflict cycle
          </IonButton>
        </IonNavLink>
      </IonContent>
      <Intro />
    </IonPage>
  );
};

export default Dashboard;
