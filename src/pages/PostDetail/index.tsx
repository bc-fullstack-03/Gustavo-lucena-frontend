import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import api from '../../services/api';
import { Post } from '../../models/Post';
import { getAuthHeader } from '../../services/auth';
import MainScreen from '../../components/MainScreen';
import PostDetailItem from '../../components/PostDetailItem';

function PostDetail() {

    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState<Post>();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPostDetail() {
            try {
                const { data } = await api.get(`/post/${postId}`, getAuthHeader());
                setPostDetail(data)
            } catch (error: any) {
                if(error.response.status == 403){
                    navigate("/");
                }
            }
        }

        getPostDetail();
    },[])
    return (
        <MainScreen>
            {
                postDetail &&
                (<PostDetailItem post={postDetail} setPost={setPostDetail}/>)
            }

        </MainScreen>
    );
}

export default PostDetail;