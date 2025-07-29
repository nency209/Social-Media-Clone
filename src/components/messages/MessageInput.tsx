// MessageInput.tsx
import { useState } from "react";
import { db } from "../../services/config";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";

export const MessageInput = ({
  conversationId,
  senderId,
}: {
  conversationId: string;
  senderId: string;
}) => {
  const [text, setText] = useState("");

  const handleSend = async () => {
    if (!text.trim()) return;

    await addDoc(collection(db, "conversations", conversationId, "messages"), {
      text,
      senderId,
      createdAt: serverTimestamp(),
    });

    await updateDoc(doc(db, "conversations", conversationId), {
      lastMessage: text,
      updatedAt: serverTimestamp(),
    });

    setText("");
  };

  return (
    <div className="p-2 border-t border-gray-800 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message..."
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="flex-1 p-2 rounded bg-gray-700 text-white"
      />
      <button onClick={handleSend} className="bg-[var(--Louge-color)] px-4 rounded text-white">
        Send
      </button>
    </div>
  );
};
