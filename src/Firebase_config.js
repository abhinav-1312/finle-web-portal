/* ----------------------------------------------------------------------------
Information Contained Herein is Proprietary and Confidential. copyright notice in all copies, 
acknowledging that the code is provided without warranties, and strictly prohibiting unauthorized 
sharing or distribution without prior written consent from the copyright holder<DKG Labs Pvt. Ltd>
------------------------------------------------------------------------------ */

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAdtV7BvLrSw0TBNwgdiHL7sLDvoUF8Io",
  authDomain: "e-savari.firebaseapp.com",
  projectId: "e-savari",
  storageBucket: "e-savari.appspot.com",
  messagingSenderId: "327330615283",
  appId: "1:327330615283:web:32b4d94be6d00f9218cc86",
  measurementId: "G-FS875YNPKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;