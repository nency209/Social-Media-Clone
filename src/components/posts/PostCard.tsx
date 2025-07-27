// src/components/post/PostCard.tsx
export const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="bg-[#1f1f1f] p-4 rounded-xl text-white shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={post.userAvatar}
          alt="avatar"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold">@{post.username}</p>
          <p className="text-xs text-gray-400">{post.timestamp}</p>
        </div>
      </div>
      <p className="mb-2">{post.caption}</p>
      {post.mediaUrl && (
        <img
          src={post.mediaUrl}
          alt="post"
          className="rounded-lg mt-2 max-h-96 object-cover"
        />
      )}
      {/* Like/Comment section here */}
    </div>
  );
};
