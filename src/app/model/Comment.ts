export interface Comment {
  commentId?: number;
  userId: number;
  postId: number;
  content: string;
  createDate: Date;
}
