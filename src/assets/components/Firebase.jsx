import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createFile } from "./helpers";


const firebaseConfig = {

  apiKey: "AIzaSyCbsMZ03Hu9QFWhYSl_FClfJmOfcANgygg",
  authDomain: "collabarator-771e2.firebaseapp.com",
  projectId: "collabarator-771e2",
  storageBucket: "collabarator-771e2.appspot.com",
  messagingSenderId: "373037605641",
  appId: "1:373037605641:web:682cb13231aa581d1fe9d8"

};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const allItems = (path) =>{
  const storage = getStorage();
  const listRef = ref(storage, 'files');
 
  listAll(listRef)
    .then((res) => {
     
      res.prefixes.forEach((folderRef) => {
      });
      res.items.forEach(async (itemRef) => {
          const name = itemRef.name ;
          const path = itemRef.fullPath ;
          let URL = await getDownloadURL(itemRef);
          console.log(URL);
          createFile({
             name : name ,
             path : path,
             URL : URL ,
          }) 
      })
    }).catch((error) => {
    });  
}

export const signInWithGoogle = () =>{
  signInWithPopup(auth , provider).then((result) =>{
         const name = result.user.displayName;
         const email = result.user.email;
         const profilepic = result.user.photoURL;
         localStorage.setItem("name" , name);
         localStorage.setItem("email" , email);
         localStorage.setItem("profilepic" , profilepic);
  });

}