/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db, auth } from "../../services/config";
import { PostCard } from "../../components/posts/PostCard";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { deletePostThunk } from "../../Features/post/postsThunks";
import type { AppDispatch } from "../../app/store"; 
// import type { Post } from "../../types";

export const ProfilePage = () => {
  const { uid } = useParams<{ uid: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [profileData, setProfileData] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);

  // Fetch user profile data
  useEffect(() => {
    const fetchUser = async () => {
      if (!uid) return;
      const ref = doc(db, "users", uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setProfileData(snap.data());
      }
    };
    fetchUser();
  }, [uid]);

  // Fetch posts by this user
  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!uid) return;
      const q = query(collection(db, "posts"), where("userId", "==", uid));
      const snapshot = await getDocs(q);
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postData);
    };
    fetchUserPosts();
  }, [uid]);

  const handleDelete = async (postId: string) => {
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      dispatch(deletePostThunk(postId));
      // Remove the deleted post from local state to reflect change
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    }
  };

  if (!profileData) return <p className="text-white p-4">Loading...</p>;

  return (
    <div className="p-6 text-white">
      {/* Profile Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={profileData.avatar || `https://i.pravatar.cc/150?u=${uid}`}
          className="w-20 h-20 rounded-full border-2 border-[var(--Louge-color)]"
          alt="avatar"
        />
        <div>
          <h2 className="text-2xl font-bold">@{profileData.username}</h2>
          <p className="text-sm text-gray-400">
            {profileData.bio || "No bio added"}
          </p>
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

      {/* Posts Section */}
      <h3 className="text-xl mb-2">Posts</h3>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#111] p-4 rounded-xl">
              <PostCard post={post} />
              {user?.uid === post.userId && (
                <button
                  onClick={() => handleDelete(post.id)}
                  className="mt-2 bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete Post
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
