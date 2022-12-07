import {
  IonPage,
  IonHeader,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonCard,
  IonIcon,
  useIonToast,
  IonCardHeader,
  IonCardTitle,
  IonNavLink,
  setupIonicReact,
} from "@ionic/react";
import { useRef } from "react";
import { arrowForwardOutline, logoGoogle } from "ionicons/icons";
import Dashboard from "../../pages/Dashboard";
import React from "react";
import { Link, RouteComponentProps } from 'react-router-dom';

import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../features/api/auth";
// Import store
import { useUserStatusStore } from "../../features/store";

// import { register } from "../../serviceWorkerRegistration";

// interface SignUpProps {
//   history?: any;
//   location?: any;
//   match?: any;
//   message?: string;
//   error?: any;
//   url?: string;
// }

interface componentProps extends RouteComponentProps {
  history: any;
  location: any;
  match: any;
  message?: string;
  error?: any;
  url?: string;
}

setupIonicReact();
const SignUp: React.FC<componentProps> = () => {
  const setUserStatus = useUserStatusStore((state) => state.setUserStatus);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);

  // setup toast
  const [present] = useIonToast();

  const showToast = (message: string) => {
    present({
      message,
      duration: 3000,
      position: "top",
      color: "dark",
    });
  };

  const { mutate: register, data, isLoading, isSuccess } = useMutation(
    (formData: object) => registerUser(formData),
    {
      onSuccess: (data) => {
        setUserStatus("registered");
        showToast(data.status.message);
      },
      onError: (error: any) => {
        showToast(JSON.stringify(error.response.data.errors.data));
      }
    }
  );

  const handleSignUp = (
    e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const formData = {
      email: emailRef.current!.value,
      password: passwordRef.current!.value,
    };
    console.log(formData);
    formData.email && formData.password ? register(formData) : alert("Fill in all fields");
    // resume default behavior
  };

  console.log("Sign up form rendered.");

  return (
    <IonPage className="ion-padding">
      <IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="signInTitle">Logo goes here</IonCardTitle>
          </IonCardHeader>
        </IonCard>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            <h1 className="ion-text-left ion-font-weight-800">Sign up</h1>
          </IonRow>
        
          <IonRow>
            <IonCol>
              <IonItem className="signInInput">
                <IonLabel position="floating">Email address</IonLabel>
                <IonInput ref={emailRef} type="email" required></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem className="signInInput">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput ref={passwordRef} type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                onClick={(e) => handleSignUp(e)}
                expand="block"
                color="dark"
                size="large"
                routerDirection="back"
                routerLink="/sign-in"
              >
                {isLoading ? "Loading..." : "Sign up"}
                <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top">
            <IonCol>
              <IonNavLink
                onClick={() => setUserStatus("guest")}
                routerDirection="forward"
                component={() => <Dashboard />}
              >
                <IonButton expand="block" color="dark" size="large">
                  Try out as guest
                  <IonIcon icon={arrowForwardOutline} slot="end"></IonIcon>
                </IonButton>
              </IonNavLink>
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center ion-margin-top">
            <IonCol>
              <a href="https://google.com">
                <IonIcon icon={logoGoogle} size="large" color="dark"></IonIcon>
              </a>
            </IonCol>
            <IonCol>
              <a href="https://google.com">
                <IonIcon icon={logoGoogle} size="large" color="dark"></IonIcon>
              </a>
            </IonCol>
            <IonCol>
              <a href="https://google.com">
                <IonIcon icon={logoGoogle} size="large" color="dark"></IonIcon>
              </a>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <h5 className="ion-text-center">
                Already a User? <Link to="/sign-in">Log in</Link>
              </h5>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
