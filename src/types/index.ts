export interface Post {
  id: string;
  userId?: string;
  content?: string;
  imageUrl?: string;
  createdAt?: string;
  caption?: string;
  username?: string;
  avatarUrl?: string;
  likes?: string[] ;
  commentsCount?: number;
}
