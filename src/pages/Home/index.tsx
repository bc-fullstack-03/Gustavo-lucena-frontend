import { useEffect, useState } from "react";
import api from "../../services/api";
import { getAuthHeader } from "../../services/auth";
import Feed from "../../components/Feed";
import MainScreen from "../../components/MainScreen";

function Home(){
    const authHeader = getAuthHeader();

    const [posts, setPosts] = useState([]);

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

    return(
        <MainScreen>
            <Feed posts={posts}/>
        </MainScreen>
    );
}

export default Home;