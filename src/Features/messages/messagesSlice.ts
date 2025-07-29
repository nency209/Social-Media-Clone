import { createSlice } from "@reduxjs/toolkit";
import type { Message, Conversation } from "../../types/message";

interface MessagesState {
  conversations: Conversation[];
  messages: Message[];
  loading: boolean;
}

const initialState: MessagesState = {
  conversations: [],
  messages: [],
  loading: false,
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setConversations: (state, action) => {
      state.conversations = action.payload;
    },
    setMessages: (state, action) => {
      state.messages = action.payload;
    },
  },
});

export const { setConversations, setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;
