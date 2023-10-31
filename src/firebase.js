import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAslDtRyuZOMRe3BtbmCxvSbxuL7HTXRQM",
  authDomain: "reluchallenge1.firebaseapp.com",
  projectId: "reluchallenge1",
  storageBucket: "reluchallenge1.appspot.com",
  messagingSenderId: "609499553187",
  appId: "1:609499553187:web:dd07b86d383bee00aace16",
  databaseURL: "https://reluchallenge1-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);