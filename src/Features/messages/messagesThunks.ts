// messagesThunks.ts
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../services/config";

export const getOrCreateConversation = async (uid1: string, uid2: string): Promise<string> => {
  const q = query(
    collection(db, "conversations"),
    where("participants", "in", [
      [uid1, uid2],
      [uid2, uid1]
    ])
  );
  const snapshot = await getDocs(q);
  if (!snapshot.empty) return snapshot.docs[0].id;

  const newDoc = await addDoc(collection(db, "conversations"), {
    participants: [uid1, uid2],
    createdAt: serverTimestamp(),
    lastMessage: "",
  });
  return newDoc.id;
};
