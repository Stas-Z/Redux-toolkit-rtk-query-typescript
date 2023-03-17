import React, { useEffect, useState } from "react";
import { postAPI } from "../services/PostService";
import { IPost } from "../store/models/IPost";
import Dropdown from "./Dropdown";
import PostItem from "./PostItem";

const PostContainer = () => {
  const [limit, setLimit] = useState(100);
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);
  const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  const handleCreate = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const handleRemove = (post:IPost) =>{
    deletePost(post)
  }
  const handleUpdate = (post:IPost) =>{
    updatePost(post)
  }

  return (
    <div>
      <div className="post__list">
        <button onClick={handleCreate}>Add new post</button>
        <div className="title__head">
          <h1>Posts:</h1>
          <Dropdown limit={limit} setLimit={setLimit} />
        </div>
        {isLoading && <h1>Loading...!</h1>}
        {error && <h1>Loading failure!</h1>}
        {posts && posts.map((post) => <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id} />)}        
      </div>
    </div>
  );
};

export default PostContainer;
