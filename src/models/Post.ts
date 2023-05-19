export interface Post {
    id: string;
    userId: string;
    content: string;
    fileUrl: string;
    likes: string[];
    comments: [];
    createdAt: string;
}