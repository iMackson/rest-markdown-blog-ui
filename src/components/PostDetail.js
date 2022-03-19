import React, { useEffect, useState } from 'react';
import { Container, Header, Image } from 'semantic-ui-react';
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
                const res = await axios.get(`http://127.0.0.1:8000/api/posts/${postSlug}`)
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
                {error && <Message negative message={error}/>}
                {loading && <Loader />}
                {post && (
                    <div>
                        <Image src={post.thumbnail} />
                        <Header>
                            {post.title}
                        </Header>
                        <Header as='h4'>Author: {post.user.username}</Header>
                        <Header as='h4'>Last Updated: {`${new Date(post.updated_at).toLocaleDateString()}`}</Header>
                        <p>{post.content}</p>                                            
                    </div>
                )}
            </Container>
        </div>
    )
}


export default PostDetail;