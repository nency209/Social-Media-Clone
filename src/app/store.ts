// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../Features/post/postsSlice";
import notificationsReducer from '../Features/notification/notificationsSlice'
import messagesReducer from "../Features/messages/messagesSlice"; 

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    notifications: notificationsReducer,
     messages: messagesReducer

  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
