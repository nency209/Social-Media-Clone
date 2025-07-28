/* eslint-disable @typescript-eslint/no-explicit-any */
import {  useParams ,useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../services/config";
import { PostCard } from "../../components/posts/PostCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/config";

export const ProfilePage = () => {
  const { uid } = useParams<{ uid: string }>();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [profileData, setProfileData] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);

  // Fetch user info
  useEffect(() => {
    const fetchUser = async () => {
      const ref = doc(db, "users", uid!);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProfileData(snap.data());
      }
    };
    if (uid) fetchUser();
  }, [uid]);

  // Fetch user's posts
  useEffect(() => {
    const fetchUserPosts = async () => {
      const q = query(collection(db, "posts"), where("userId", "==", uid));
      const snapshot = await getDocs(q);
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    if (uid) fetchUserPosts();
  }, [uid]);

  if (!profileData) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="p-6 text-white">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profileData.avatar || `https://i.pravatar.cc/150?u=${uid}`}
          className="w-20 h-20 rounded-full border-2 border-[var(--Louge-color)]"
          alt="avatar"
        />
        <div>
          <h2 className="text-2xl font-bold">@{profileData.username}</h2>
          <p className="text-sm text-gray-400">{profileData.bio || "No bio added"}</p>
          {user?.uid === uid && (
            <button
        onClick={() => navigate(`/dashboard/profile/${uid}/edit`)}
        className="mt-4 bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded"
      >
        Edit Profile
      </button>
          )}
        </div>
      </div>

      <h3 className="text-xl mb-2">Posts</h3>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};
