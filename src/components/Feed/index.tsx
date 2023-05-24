import { UserCircle } from "@phosphor-icons/react";
import { Post } from "../../models/Post";
import Heading from "../Heading";
import Text from "../Text";
import PostItem from "../PostItem";
import api from "../../services/api";
import { getAuthHeader } from "../../services/auth";
import { useEffect, useState } from "react";

interface FeedProps {
    posts: Post[]
    handleLike: (postId: string) => void;
}

interface userProps {
    name: string;
    email: string;
    avatarImgUrl: string;
}

function Feed({ posts, handleLike }: FeedProps) {
    const auth = getAuthHeader();
    const [user, setUser] = useState<userProps>();

    useEffect(() => {
        function getLoggedUser() {
            try {
                api.get("/auth/get-logged", auth).then(response => {
                    setUser(response.data);
                })
            } catch (error) {
                console.log(error)
            }
        }
        getLoggedUser();
    }, [])


    return (
        <div className="basis-5/6 overflow-y-auto scroll-smooth">
            <Heading className="border-b border-slate-400 mt-4">
                <Text size="lg" className="font-extrabold text-white ml-5" >
                    Página Inicial
                </Text>
                <div className="flex items-center ml-5 my-4">
                    {
                        user?.avatarImgUrl ? 
                        <img src={user.avatarImgUrl} className='w-[48px] h-[48px] rounded-full' /> :
                        <UserCircle size={48} weight="light" className="text-slate-50"></UserCircle>
                    }
                    <Text size="lg" className="font-extrabold ml-2 text-white" >{user && user.name}</Text>
                </div>
            </Heading>
            <section>
                {
                    posts &&
                    posts.map((post: Post) =>
                        <PostItem handleLike={handleLike} post={post} key={post.id} />
                    )
                }
            </section>
        </div>
    );
}

export default Feed;