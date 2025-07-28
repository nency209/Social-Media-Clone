import { signInWithEmailAndPassword,createUserWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
import {auth,db} from '../services/config'
import { doc, setDoc ,getDoc} from "firebase/firestore";



export const Loginuser=async(email:string,password:string)=>
{
  const res=await signInWithEmailAndPassword(auth, email, password);
  return res.user
}

export const Signuser=async(username:string,email:string,password:string)=>
{
      const res = await createUserWithEmailAndPassword(auth,email,password);
      const user=res.user;

      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        username:username,
        createdAt: new Date(),
      });

      return user;
}


export const signwithgoogle=async ()=>
{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const User = result.user;

    const docRef = doc(db, "users", User.uid);
    const docSnap = await getDoc(docRef);

  // Only store user data if it doesn't already exist
  if (!docSnap.exists()) {
    await setDoc(docRef, {
      uid: User.uid,
      email: User.email,
      createdAt: new Date(),
    });
  }
          return User;
}

