import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';


const config = {
  apiKey: "AIzaSyAWWN_YfstPDMkOdD8GM9jTkZGzcNZaZH4",
  authDomain: "netflix-clone-ee83f.firebaseapp.com",
  projectId: "netflix-clone-ee83f",
  storageBucket: "netflix-clone-ee83f.appspot.com",
  messagingSenderId: "6585286276",
  appId: "1:6585286276:web:d8799689edb55d33f9ccd1"
}


const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
