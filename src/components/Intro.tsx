import { useState } from "react";
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonIcon,
  IonNavLink,
} from "@ionic/react";
import { close } from "ionicons/icons";

import Dashboard from "./Dashboard";

const Intro: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Closer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton
          className="openModal"
          expand="block"
          onClick={() => setIsOpen(true)}
          color="dark"
        >
          Open here for the Info !
        </IonButton>

        <IonNavLink routerDirection="forward" component={() => <Dashboard />}>
          <IonButton expand="block" color="dark">
            Continue
          </IonButton>
        </IonNavLink>

        <IonModal
          isOpen={isOpen}
          initialBreakpoint={0.75}
          breakpoints={[0, 0.25, 0.5, 1.0]}
        >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                  <IonIcon icon={close} slot="end" color="dark"></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h3>Welcome to Closer!</h3>
            <p>
              Closer aims to turn the pain of conflicts into positive
              experiences that promote a deeper understanding of your partner
              and yourself.
              <br />
              <br />
              Closer will guide you through a "de-escalation" of conflict cycle,
              based on the methods of Emotionally Focused Therapy (EFT),
              throughout which the focus is on understanding your and your
              partner's emotions."
              <br />
              <br />
              Closer is a simple yet powerful app that guides you through a
              relationship conflict cycle, based on the methods of Emotionally
              Focused Therapy (EFT).
              <br />
              <br />
              Remember that, no matter how the particular relationship conflict
              cycle manifests, there are logical reasons for why it appears the
              way it does. EFT helps to shift your focus from "we have a
              problem" to "we need to break this cycle".
              <br />
              <br />
              Ready to uncover some insights and restore closeness in your
              relationship?
            </p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Intro;