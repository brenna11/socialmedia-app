import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from './config';

/**
 * loads all documents from posts collection
 * @returns 
 *    Array with posts 
 */
export async function load() {
   try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      return processQuerySnapshot(querySnapshot);
   }
   catch (error) {
      throw new Error('failed to load database');
   }
}

/**
 * loads all promoted documents from posts collection
 * @returns 
 *    Array with the posts
 */
export async function loadPromoted() {
   try {
      const q = query(collection(db, "posts"), where("promote", "==", true));
      const querySnapshot = await getDocs(q);
      return processQuerySnapshot(querySnapshot);
   }
   catch (error) {
      throw new Error('failed to query the database');
   }
}

/**
 * convert a firebase query snapshot into array
 * @param {object} querySnapshot 
 *    query snapshot return by firebase
 * @returns 
 *  Array with the data 
 */
function processQuerySnapshot(querySnapshot) {
   const data = [];
   querySnapshot.forEach((doc) => {
      data.push({
         ...doc.data(),
         id: doc.id
      });
   });
   return data;
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export async function loadById(id) {
   try {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);
   
      if (docSnap.exists()) {
         return docSnap.data();
      }
   }
    catch {
      return null;
    }

   //return null;
} 