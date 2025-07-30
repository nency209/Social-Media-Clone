/* eslint-disable @typescript-eslint/no-explicit-any */
// ConversationLayout.tsx
import { useState } from "react";
import { AllUsersList } from "./AllUsersList";
import { ChatWindow } from "./ChatWindow";
import { getOrCreateConversation } from "../../Features/messages/messagesThunks";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/config";

export const ConversationLayout = () => {
  const [, setSelectedUser] = useState<any>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [user] = useAuthState(auth);

  const handleSelect = async (userToChat: any) => {
    setSelectedUser(userToChat);
    if (!user?.uid) return;
    const convId = await getOrCreateConversation(user.uid, userToChat.uid);
    setConversationId(convId);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
       <div className="w-full lg:max-w-sm border-b lg:border-b-0 lg:border-r border-gray-700 overflow-y-auto">
      <AllUsersList onSelect={handleSelect} />
          </div>
      {conversationId ? (
           <div className="flex flex-col flex-1 h-full">
        <ChatWindow
          conversationId={conversationId}
          currentUserId={user?.uid || ""}
        />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-white text-xl">
         <button className="bg-white rounded-md p-4 text-center text-[var(--Louge-color)]">Select a user to start chatting</button> 
        </div>
      )}
    </div>
  );
};

