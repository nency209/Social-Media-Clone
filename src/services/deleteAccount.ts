// services/deleteAccount.ts
import { auth, db } from "./config";
import { deleteUser } from "firebase/auth";
import { deleteDoc, doc, collection, getDocs, query, where } from "firebase/firestore";

export const deleteAccount = async () => {
  const user = auth.currentUser;

  if (!user) return alert("No user logged in");

  const confirm = window.confirm("Are you sure you want to delete your account? ");
  if (!confirm) return;

  try {
    // 1. Delete Firestore user profile
    await deleteDoc(doc(db, "users", user.uid));

    // Optional: delete user's posts
    const postsSnap = await getDocs(
      query(collection(db, "posts"), where("userId", "==", user.uid))
    );
    const deletePostPromises = postsSnap.docs.map((docSnap) =>
      deleteDoc(doc(db, "posts", docSnap.id))
    );
    await Promise.all(deletePostPromises);
    await deleteUser(user);

    alert("Account deleted successfully.");
    window.location.href = "/";
  }
   catch (error) {
    console.error("Delete error:", error);
    // alert("Failed to delete account. You may need to reauthenticate.");
  }
};
