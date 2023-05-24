import { Chat, Heart, IconWeight, UserCircle } from "@phosphor-icons/react";
import { Post } from "../../models/Post";
import Heading from "../Heading";
import Text from "../Text";
import { useState } from "react";
import { getUserId } from "../../services/auth";
import { useNavigate } from "react-router-dom";

interface PostItemProps {
    post: Post;
    handleLike: (postId: string) => void;
}

function PostItem({ post, handleLike }: PostItemProps) {
    const [weight, setWeight] = useState<IconWeight>("regular");
    const [weightChat, setWeightChat] = useState<IconWeight>("regular");

    const navigate = useNavigate();


    return (
        <div className="border-b border-slate-400">
            <div onClick={() => navigate(`/post/${post.id}`)}>
                <Heading className="flex items-center ml-5 mt-4 mb-2">
                    <UserCircle size={48} weight="light" />
                    <Text size="xl" className="font-extrabold text-white ml-2  cursor-pointer">{post.userEmail}</Text>
                </Heading>
                <div className="ml-20 flex flex-col gap-2">
                    <Heading size="sm" className="font-normal">{post.content}</Heading>
                    {post.fileUrl && 
                        <img className="max-w-lg rounded-lg  cursor-pointer" src={post.fileUrl} alt="" />
                    }
                </div>
            </div>
            <footer className="flex items-center ml-20 my-4 space-x-2">
                <Chat
                    onClick={() => navigate(`/post/${post.id}`)}
                    onMouseOver={() => { setWeightChat("fill") }}
                    onMouseLeave={() => { setWeightChat("regular") }}
                    weight={weightChat} size={24}
                    className="text-slate-50 cursor-pointer text-white"
                />
                <Text size="sm">{post.comments}</Text>

                {post.likes.includes(getUserId()) ? 
                    (
                        <Heart
                        weight='fill' size={24}
                        className="text-slate-50 cursor-pointer text-red-500 hover:text-[#67e8f9]"
                        onClick={() => handleLike(post.id)}
                    />
                    ) :
                    (
                <Heart
                    onMouseOver={() => { setWeight("fill") }}
                    onMouseLeave={() => { setWeight("regular") }}
                    weight={weight} size={24}
                    className="text-slate-50 cursor-pointer hover:text-[#67e8f9]"
                    onClick={() => handleLike(post.id)}
                />
                    )
                }

                <Text size="sm">{post.likes.length}</Text>
            </footer>
        </div>
    );
}
export default PostItem;