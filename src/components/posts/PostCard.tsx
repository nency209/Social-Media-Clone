/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { useState } from "react";
import { likePost,unlikePost } from '../../services/Postservice' 
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/config";
import type { Post } from "../../types";

export const PostCard = ({ post }: { post: Post }) => {
const [user] = useAuthState(auth);
const [isLiked, setIsLiked] = useState((post.likes ?? []).includes(user?.uid || ""));
const [likesCount, setLikesCount] = useState(post.likes?.length ?? 0);


 const handleLike = async () => {
  if (!user || !user.uid) return;

  if (isLiked) {
    await unlikePost(post.id, user.uid);
    setLikesCount(likesCount - 1);
  } else {
    await likePost(post.id, user.uid, post.userId!);
    setLikesCount(likesCount + 1);
  }

  setIsLiked(!isLiked);
};

  return (
    <div className="bg-zinc-900 p-4 rounded-xl mb-4 text-white shadow-lg">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-2">
        <img src={post.avatarUrl || "/default-avatar.png"} alt={post.username} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">@{post.username}</p>
          <p className="text-xs text-gray-400">{post.createdAt ? (post.createdAt as any)?.toDate?.()?.toLocaleString?.() ?? "Unknown date" : "Unknown date"}</p>
        </div>
      </div>

      {/* Caption and Image */}
      <p className="mb-2">{post.caption}</p>
      {post.imageUrl && <img src={post.imageUrl} alt="Post" className="w-full rounded-lg mb-2" />}

      {/* Like & Comment */}
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <button onClick={handleLike} className="flex items-center gap-1">
          {isLiked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />} {likesCount}
        </button>
        <button className="flex items-center gap-1">
          <FaRegCommentDots /> {post.commentsCount || 0}
        </button>
      </div>
    </div>
  );
};
