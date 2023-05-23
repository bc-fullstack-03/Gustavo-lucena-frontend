import { Post } from "../models/Post";
import api from "./api";
import { getAuthHeader } from "./auth";


async function likePost(post: Post, profile: string, isUnLike: boolean): Promise<Post> {
    api.post(`/post/like/${post.id}`, null, getAuthHeader());
    if (isUnLike) {
        return unlike(post, profile)
    }
    return like(post, profile);
}

function like(post: Post, profile: string) {
    post.likes.push(profile);
    return post;
}

function unlike(post: Post, profile: string) {
    const index = post.likes.indexOf(profile);
    post.likes.splice(index, 1);
    return post;
}

export { likePost };