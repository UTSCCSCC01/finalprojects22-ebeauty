import { Store } from 'react-notifications-component';

// https://teodosii.github.io/react-notifications-component/ 
export default function Alerting(msg, typ){
  Store.addNotification({
    title: msg,
    message: "",
    type: typ,
    insert: "top",
    container: "top-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 1000,
      delay: 0
    }
  });
}