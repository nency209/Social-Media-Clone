/* eslint-disable @typescript-eslint/no-explicit-any */
// ChatWindow.tsx
import { useEffect, useState } from "react";
import { db } from "../../services/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { MessageInput } from "./MessageInput";

type Props = {
  conversationId: string;
  currentUserId: string;
};

export const ChatWindow = ({ conversationId, currentUserId }: Props) => {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(db, "conversations", conversationId, "messages"),
      orderBy("createdAt", "asc")
    );
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, [conversationId]);

  return (
    <div className="flex flex-col flex-1 h-full">
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`p-2 my-1 rounded max-w-xs ${
            msg.senderId === currentUserId
              ? "bg-[var(--Louge-color)] ml-auto"
              : "bg-gray-700"
          } text-white`}
        >
          {msg.text}
          <p className="text-xs text-gray-400">
            {msg.createdAt
              ? (msg.createdAt as any)?.toDate?.()?.toLocaleString?.() ?? "Unknown date"
              : "Unknown date"}
          </p>
        </div>
      ))}
    </div>

    <MessageInput conversationId={conversationId} senderId={currentUserId} />
  </div>
  );
};
