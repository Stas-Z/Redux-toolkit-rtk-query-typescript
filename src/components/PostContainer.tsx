import React, { useState } from 'react'
import { postAPI } from '../services/PostService'
import Dropdown from './Dropdown'
import PostItem from './PostItem'

const PostContainer = () => {
    const [limit, setLimit] = useState(3);
    const{data: posts, error, isLoading} = postAPI.useFetchAllUsersQuery(limit)
  return (
    <div>
        <div className="post__list">
        <div className="title__head">
          <h1>Posts:</h1>
          <Dropdown limit={limit} setLimit={setLimit} />
        </div>
        
       
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