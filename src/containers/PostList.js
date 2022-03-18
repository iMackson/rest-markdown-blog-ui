import React, { useState, useEffect } from 'react';
import {Divider, Header, Item } from 'semantic-ui-react'
import axios from 'axios'

import Loader from '../components/Loader';
import Message from '../components/Message';

const PostList = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true)
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/posts/')
                setPosts(res.data)
                setLoading(false)
            }
            catch (error) {
                setError(error.message)
                setLoading(false)
            }
            
        }
        fetchPosts()

    }, [])
     return (
        <div>
            <Header>Post List</Header>
            <Divider />
            {loading && <Loader/>}
            <Item.Group>
            {posts?.map(post => {
                return (
                    <Item key={post.id}>
                        <Item.Image size='small' src={post.thumbnail} />
                        <Item.Content>
                            <Item.Header as='a'>{post.title}</Item.Header>
                            <Item.Description>{post.content}</Item.Description>
                        </Item.Content>
                    </Item>
                )
            })}
            {error && <Message negative message={error}/>}
            </Item.Group>
        </div>
    )
}


export default PostList;




