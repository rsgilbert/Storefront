import * as firebase from "firebase/app"

export function getIdFromWindow() {
    // pathname could be "/items/1"
    const pathname = window.location.pathname
    return pathname.substring(7)
}


// eg 
// for http://localhost:3000/admin/items/kRx9WrRtwRjGrmzULbik/pictures
// id = getIdFromPath(3)
export function getIdFromPath (position) {
  const pathname = window.location.pathname
  const paths = pathname.split("/")
  return paths[position]
}

export function initializeFirebase() {
    // Generated from https://console.firebase.google.com/project/tsc-feedback/settings/general/web:ODhjMWNlMDktMDc4ZS00ZWZlLTg1MjItMTY5NTIyNTFlOTg5
      const firebaseConfig = {
        apiKey: "AIzaSyAiFmYX7tWxC5F6amDtJnDiOfxzipveCoY",
        authDomain: "milzcollection.firebaseapp.com",
        databaseURL: "https://milzcollection.firebaseio.com",
        projectId: "milzcollection",
        storageBucket: "milzcollection.appspot.com",
        messagingSenderId: "366091822440",
        appId: "1:366091822440:web:9e2380ed7b9649ac0962dd",
        measurementId: "G-WCRBDJZ4D2"
      };
    // Initialize Firebase
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}





