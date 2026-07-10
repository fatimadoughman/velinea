
export class Review {}
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,

} from 'firebase/firestore';



import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDjefBGmVDsR4jRe86kYsFWGC4stHGmOUc",
  authDomain: "velinea-8a164.firebaseapp.com",
  projectId: "velinea-8a164",
  storageBucket: "velinea-8a164.firebasestorage.app",
  messagingSenderId: "1002669229932",
  appId: "1:1002669229932:web:2d9ebcb58e7b9c259c5549",
  measurementId: "G-7VZG6PBKMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private app = initializeApp(firebaseConfig);
  private db = getFirestore(this.app);


async addSubscriber(email: string) {
  return addDoc(collection(this.db, 'subscribers'), {
    email,
    subscribedAt: new Date()
  });
}



  async addReview(review: any) {
    return addDoc(collection(this.db, 'reviews'), {
      ...review,
      createdAt: new Date()
    });
  }

  async getReviews() {
    const q = query(collection(this.db, 'reviews'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => doc.data());
  }
}