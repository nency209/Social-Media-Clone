import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../services/config";
import type { Post } from "../types"; // if your file is at same level



export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  const posts: Post[] = [];
  snapshot.forEach((doc) => {
    posts.push({ id: doc.id, ...(doc.data() as Post) });
  });
  return posts;
});
