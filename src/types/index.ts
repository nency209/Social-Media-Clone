export interface Post {
  id: string;
  userId: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  likes: string[]; // user IDs
  commentsCount: number;
}
