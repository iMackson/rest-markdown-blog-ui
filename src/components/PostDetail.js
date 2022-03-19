import React, { useEffect, useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import Message from './Message';
import Loader from './Loader';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { postSlug } = useParams()


    useEffect(() => {
        setLoading(true)
        async function fetchPost() {
            try {
                const res = await axios.get(`http://127.0.0.1:8000/post/${postSlug}`)
                setPost(res.data)
                setLoading(false)
            }
            catch(error) {
                setError(error.message)
                setLoading(false)
            }
        }
        fetchPost()
    }, [postSlug])

    return (
        <div>
            <Container text>
                <Header>{ post && post.title}</Header>
                {error && <Message negative message={error}/>}
                {loading && <Loader />}
                {post && (
                    <p>{post.content}</p>                    
                )}
            </Container>
        </div>
    )
}


export default PostDetail;