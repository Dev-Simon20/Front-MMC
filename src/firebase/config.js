
import { initializeApp } from "firebase/app";
import {getStorage,ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import {v4} from'uuid';
const firebaseConfig = {
  apiKey: "AIzaSyAN0fo7Yj4EplPesR84S1fDr7GEsaWknpU",
  authDomain: "react-firebase-images-bca8f.firebaseapp.com",
  projectId: "react-firebase-images-bca8f",
  storageBucket: "react-firebase-images-bca8f.appspot.com",
  messagingSenderId: "724974285037",
  appId: "1:724974285037:web:2b68127aba50db61439ce4"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const storage=getStorage(app);

// export async function uploadFile(file){
//   const storageRef=ref(storage,v4());
//    await uploadBytes(storageRef,file);
//    const url= await getDownloadURL(storageRef);
//    return url;
// }

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export async function uploadFile(file) {
  const storageRef = ref(storage, v4());
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function addUser(userData) {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), userData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}