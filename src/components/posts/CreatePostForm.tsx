import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { useSelector } from "react-redux";

export const CreatePostForm = () => {
  const user = useSelector((state: any) => state.auth.user);
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handlePost = async () => {
    let mediaUrl = "";
    if (file) {
      const storageRef = ref(storage, `posts/${file.name}`);
      await uploadBytes(storageRef, file);
      mediaUrl = await getDownloadURL(storageRef);
    }

    await addDoc(collection(db, "posts"), {
      userId: user.uid,
      username: user.username,
      avatar: user.avatar,
      text,
      mediaUrl,
      createdAt: serverTimestamp(),
      likes: [],
      commentCount: 0,
    });

    setText("");
    setFile(null);
  };

  return (
    <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full p-2 border rounded mb-2"
      />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handlePost} className="bg-purple-600 text-white px-4 py-2 mt-2 rounded">
        Post
      </button>
    </div>
  );
};
