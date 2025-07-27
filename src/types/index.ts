export interface PostType {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  mediaUrl?: string;
  createdAt: string;
  likes: string[]; // userIds who liked
  commentCount: number;
}
