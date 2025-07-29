import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts ,deletePostThunk} from "./postsThunks";
import type { Post } from "../../types"; 



interface PostsState {
  data: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
      state.data = state.data.filter((post) => post.id !== action.payload);
    });
  },
});

export default postsSlice.reducer;
