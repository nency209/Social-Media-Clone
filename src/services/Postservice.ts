import {
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./config";

// ✅ Like a post
export const likePost = async (
  postId: string,
  userId: string,
  ownerId: string
) => {
  const postRef = doc(db, "posts", postId);

  await updateDoc(postRef, {
    likes: arrayUnion(userId),
  });

  if (userId !== ownerId) {
    // ✅ Store under correct path: users/{ownerId}/notifications
    const notifRef = collection(db, "users", ownerId, "notifications");

    await addDoc(notifRef, {
      type: "like",
      fromUserId: userId,
      postId: postId,
      message: "liked your post",
      timestamp: serverTimestamp(),
      read: false,
    });
  }
};

// ✅ Unlike a post
export const unlikePost = async (postId: string, userId: string) => {
  const postRef = doc(db, "posts", postId);
  await updateDoc(postRef, {
    likes: arrayRemove(userId),
  });
};
