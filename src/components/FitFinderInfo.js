import {
  deleteDocs,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from ".././components/firebase";
const challengeRef = collection(db, "challenge");
const beginnerRef = collection(db, "beginner");
const intermediateRef = collection(db, "intermediate");
const advanceRef = collection(db, "advance");

class ChallengeC {
  addDocData(newDoc) {
    return addDoc(challengeRef, newDoc);
  }
  updateDocData(id, newDoc) {
    const FitDoc = doc(challengeRef, id);
    return updateDoc(FitDoc, newDoc);
  }
  deleteDocData(id) {
    const FitDoc = doc(challengeRef, id);
    return deleteDoc(FitDoc);
  }
  getDocsData() {
    return getDocs(challengeRef);
  }
  getDocData(id) {
    const FitDoc = doc(challengeRef, id);
    return getDoc(FitDoc);
  }
  deleteDocsData() {
    return collection.remove(challengeRef);
  }
}

class BeginnerC {
  addDocData(newDoc) {
    return addDoc(beginnerRef, newDoc);
  }
  updateDocData(id, newDoc) {
    const FitDoc = doc(beginnerRef, id);
    return updateDoc(FitDoc, newDoc);
  }
  deleteDocData(id) {
    const FitDoc = doc(beginnerRef, id);
    return deleteDoc(FitDoc);
  }
  getDocsData() {
    return getDocs(beginnerRef);
  }
  getDocData(id) {
    const FitDoc = doc(beginnerRef, id);
    return getDoc(FitDoc);
  }
  deleteDocsData() {
    return collection.remove(beginnerRef);
  }
}
class IntermediateC {
  addDocData(newDoc) {
    return addDoc(intermediateRef, newDoc);
  }
  updateDocData(id, newDoc) {
    const FitDoc = doc(intermediateRef, id);
    return updateDoc(FitDoc, newDoc);
  }
  deleteDocData(id) {
    const FitDoc = doc(intermediateRef, id);
    return deleteDoc(FitDoc);
  }
  getDocsData() {
    return getDocs(intermediateRef);
  }
  getDocData(id) {
    const FitDoc = doc(intermediateRef, id);
    return getDoc(FitDoc);
  }
  deleteDocsData() {
    return collection.remove(intermediateRef);
  }
}
class AdvanceC {
  addDocData(newDoc) {
    return addDoc(advanceRef, newDoc);
  }
  updateDocData(id, newDoc) {
    const FitDoc = doc(advanceRef, id);
    return updateDoc(FitDoc, newDoc);
  }
  deleteDocData(id) {
    const FitDoc = doc(advanceRef, id);
    return deleteDoc(FitDoc);
  }
  getDocsData() {
    return getDocs(advanceRef);
  }
  getDocData(id) {
    const FitDoc = doc(advanceRef, id);
    return getDoc(FitDoc);
  }
  deleteDocsData() {
    return collection.remove(advanceRef);
  }
}

const usercollectionRef = collection(db, "UserData");

class UserC {
  setDocData(id,newDoc){
    return setDoc(doc(usercollectionRef,id),newDoc)
  }
    addDocData(newDoc) {
    return addDoc(usercollectionRef, newDoc);
  }
  updateDocData(id, newDoc) {
    const data = doc(usercollectionRef, id);
    return updateDoc(data, newDoc);
  }
  deleteDocData(id) {
    const data = doc(usercollectionRef, id);
    return deleteDoc(data);
  }
  getDocData(id) {
    const data = doc(usercollectionRef, id);
    return getDoc(data);
  }
  getDocsData() {
    return getDocs(usercollectionRef);
  }
}

export { ChallengeC, BeginnerC, IntermediateC, AdvanceC, UserC };

// export default new FitFinder;
