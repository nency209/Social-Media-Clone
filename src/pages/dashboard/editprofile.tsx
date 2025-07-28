import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../services/config";

export const EditProfile = () => {
  const { uid } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", bio: "", photoURL: "" });

  useEffect(() => {
    const fetchUser = async () => {
      if (!uid) return;
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setForm({
          username: data.username || "",
          bio: data.bio || "",
          photoURL: data.photoURL || "",
        });
      }
    };
    fetchUser();
  }, [uid]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uid) return;
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, form);
    navigate(`/dashboard/profile/${uid}`);
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">✏️ Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Username</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            className="w-full px-3 py-2 text-white rounded border-2 border-white"
          />
        </div>
        <div>
          <label className="block">Bio</label>
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            className="w-full px-3 py-2 text-white rounded border-2 border-white"
          />
        </div>
        <div>
          <label className="block">Photo URL</label>
          <input
            type="text"
            name="photoURL"
            value={form.photoURL}
            onChange={handleChange}
            className="w-full px-3 py-2 text-white rounded border-2 border-white"
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
