import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyA0EZJ2I3q3p8Q_F8T-l5yBc2MgCLbiRHs",
    authDomain: "pizza-planet-87d56.firebaseapp.com",
    databaseURL: "https://pizza-planet-87d56.firebaseio.com",
    projectId: "pizza-planet-87d56",
    storageBucket: "pizza-planet-87d56.appspot.com",
    messagingSenderId: "478179432299"
  };
  const firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database();
  export const dbMenuRef = db.ref('menu');
  export const dbOrdersRef = db.ref('orders');