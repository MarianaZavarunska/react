import { useEffect, useState } from "react";
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <div>
      {posts.map((post) => <Post key={post.id} userId={post.userId} id={post.id} title ={post.title} body={post.body}/>)}
    </div>
  )
};

export default Posts;
