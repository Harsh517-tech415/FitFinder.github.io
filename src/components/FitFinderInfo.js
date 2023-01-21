import {deleteDocs,collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';
import { db } from '.././components/firebase';
const  fitcollectionRef=collection(db,"FitFinder") 
class FitFinder
{
   addDocData(newDoc){
return addDoc(fitcollectionRef,newDoc)
  }
  updateDocData(id,newDoc)
  {
const FitDoc=doc(db,"FitFinder",id)
return updateDoc(FitDoc,newDoc)
  }
  deleteDocData(id)
  {
const FitDoc=doc(db,"FitFinder",id)
return deleteDoc(FitDoc)
  }
  getDocsData()
  {
    return getDocs(fitcollectionRef)
  }
  getDocData(id)
  {
const FitDoc=doc(fitcollectionRef,id)
return getDocs(FitDoc)
  }
  deleteDocsData()
  {
    return collection.remove(fitcollectionRef)
  }
}

export default new FitFinder;