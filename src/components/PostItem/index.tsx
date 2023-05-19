import { Chat, Heart, IconWeight, UserCircle } from "@phosphor-icons/react";
import { Post } from "../../models/Post";
import Heading from "../Heading";
import Text from "../Text";
import { useState } from "react";

interface PostItemProps {
    post: Post;
}

function PostItem({ post }: PostItemProps) {

    const [weight, setWeight] = useState<IconWeight>("regular");
    const [weightChat, setWeightChat] = useState<IconWeight>("regular");

    function hoverHeart(){
        setWeight("fill")
    }
    
    function unHoverHeart(){
        setWeight("regular")
    }

    function hoverChat(){
        setWeightChat("fill")
    }
    
    function unHoverChat(){
        setWeightChat("regular")
    }

    return (
        <div className="border-b border-slate-400" key={post.id}>
            <Heading className="flex items-center ml-5 my-4">
                <UserCircle size={48} weight="light"/>
                <Text size="xl" className="font-extrabold text-white ml-2">{post.userId}</Text>
            </Heading>
            <div className="ml-20 flex flex-col gap-2">
                <Heading size="sm">{post.content}</Heading>
                <Text asChild>
                    <p>{post.fileUrl}</p>
                </Text>
            </div>
            <footer className="flex items-center ml-20 my-4 space-x-2">
                <Chat onMouseOver={hoverChat} onMouseLeave={unHoverChat} weight={weightChat} size={24} className="text-slate-50 cursor-pointer text-white" />
                <Text size="sm">{post.comments}</Text>

                <Heart onMouseOver={hoverHeart} onMouseLeave={unHoverHeart} weight={weight} size={24} className="text-slate-50 cursor-pointer hover:text-[#67e8f9]" />
                <Text size="sm">{post.likes}</Text>
            </footer>
        </div>
    );
}
export default PostItem;