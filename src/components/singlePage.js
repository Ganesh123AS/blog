import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePage = () => {
    const { id } = useParams();
    const [ post, setPost ] = useState();
    
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
        axios.get(url)
        .then(res => {
            setPost(res)
        })
        .catch(err => {
            console.error("error msg: ", err)
        })
    }, []);

  return (
    <div>
      Single Page
      {
        Object.keys(post).length ? (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="" alt="image" />
                        </div>
                        <div className="col">
                            {post.title.rendered}
                        </div>
                    </div>
                </div>
            </>
        ) : "Loading...."
      }
    </div>
  )
}

export default SinglePage;