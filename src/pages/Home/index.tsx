import { useEffect, useState } from "react";
import api from "../../services/api";
import { getAuthHeader } from "../../services/auth";
import Feed from "../../components/Feed";
import MainScreen from "../../components/MainScreen";
import { Post } from "../../models/Post";

function Home(){
    const user = localStorage.getItem("user") || "";
    const authHeader = getAuthHeader();

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {

        async function getPosts() {
            try{
                const { data } = await api.get("/post", authHeader);
                setPosts(data);
            }catch(err) {
                alert("Erro ao obter o Feed.");
            }
        }

        getPosts();
    }, [])

    function postCreated(post: Post) {
        post = {
            ...post,
            userEmail: user
        }
        setPosts((posts) => [post, ...posts])
    }

    return(
        <MainScreen postCreated={postCreated}>
            <Feed posts={posts}/>
        </MainScreen>
    );
}

export default Home;