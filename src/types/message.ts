/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: any;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: string;
  lastUpdated: any;
}
