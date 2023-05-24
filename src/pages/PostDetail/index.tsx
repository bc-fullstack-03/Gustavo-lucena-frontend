import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import api from '../../services/api';
import { Post } from '../../models/Post';
import { getAuthHeader } from '../../services/auth';
import MainScreen from '../../components/MainScreen';
import PostDetailItem from '../../components/PostDetailItem';

function PostDetail() {

    const { postId } = useParams();
    const [postDetail, setPostDetail] = useState<Post>();

    useEffect(() => {
        async function getPostDetail() {
            try {
                const { data } = await api.get(`/post/${postId}`, getAuthHeader());
                setPostDetail(data)
            } catch (error) {
                console.log(error)
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