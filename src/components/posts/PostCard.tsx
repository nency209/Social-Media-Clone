import type { Post } from "../types"; // if your file is at same level


export const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="bg-zinc-900 p-4 rounded-xl mb-4 text-white shadow-lg">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={post.avatarUrl || "/default-avatar.png"}
          alt={post.username}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">@{post.username}</p>
          <p className="text-xs text-gray-400">{new Date(post.createdAt).toLocaleString()}</p>
        </div>
      </div>

      <p className="mb-2">{post.caption}</p>
      {post.imageUrl && <img src={post.imageUrl} alt="Post" className="w-full rounded-lg" />}
    </div>
  );
};