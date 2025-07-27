// src/services/postService.ts

import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./firebase";
import { Post } from "@/types/post";

export const getAllPosts = (callback: (posts: Post[]) => void) => {
  const postsRef = collection(db, "posts");
  const q = query(postsRef, orderBy("createdAt", "desc"));

  return onSnapshot(q, (snapshot) => {
    const posts: Post[] = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Post),
    }));
    callback(posts);
  });
};
