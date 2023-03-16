import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const{data: posts, error, isLoading} = postAPI.useFetchAllUsersQuery(5)
  return (
    <div>
        <div className="post__list">
        <h1>Posts:</h1>
            {isLoading && <h1>Loading...!</h1>}
            {error && <h1>Loading failure!</h1>}
            {posts && posts.map(post => 
                <PostItem post ={post} key={post.id}/>
                )}
        </div>
    </div>
  )
}

export default PostContainer