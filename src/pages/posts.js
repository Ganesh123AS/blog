import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
    const [post, setPost ] = useState([]);

    useEffect(() => {
      let url = `${process.env.REACT_APP_API_ROOT}/posts`;
        axios.get(url)
        .then(res => {
          setPost(res.data)
        })
    }, []);

  return (
    <div>
      {
        post && post.map((item) => {
          console.log(item)
            return <div key={item.id}>
              <Link to={`/posts/${post.id}`}>
              <h1>{item.title.rendered}</h1>
              <h1 dangerouslySetInnerHTML={{__html : item.excerpt.rendered}}></h1>
              </Link>
            </div>
          })
      }
    </div>
  )
}

export default Posts;