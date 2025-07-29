import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../services/config";
import type { Post } from "../../types";
import { deletePost } from "../../services/Postservice";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const posts: Post[] = [];

snapshot.forEach((doc) => {
  const data = doc.data() as Post;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: _, ...rest } = data;

  posts.push({
    id: doc.id,
    ...rest,
    likes: Array.isArray(data.likes) ? data.likes : [],
  });
});

  return posts;
});




export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async (postId: string, { rejectWithValue }) => {
    try {
      await deletePost(postId);
      return postId;
    } catch (error) {
      return rejectWithValue(`Failed to delete post ${error}`);
    }
  }
);
