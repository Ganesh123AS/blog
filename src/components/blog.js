import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./blog.css";

const Blog = () => {
  const [value, setValue] = useState('');

  return (
    <div className='blog'>
      <div className="container">
        <div className="row">
          <div className="col">
            <form className='mt-5 form'>

              <div className="title mt-3">                
                <label className='col-lg-3' htmlFor="title">Title:</label>
                <input className='col-lg-5' type="text" name='title' placeholder='Enter the Title' />
              </div>

              <div className="Author mt-3">                
                <label className='col-lg-3' htmlFor="Author">Author Name:</label>
                <input className='col-lg-5' type="text" name='Author' placeholder='Enter the Author Name' />
              </div>

              <div className="Description mt-4">                
                <label htmlFor="Description">Description:</label>
                <ReactQuill className='mt-2 quill col-lg-9' theme="snow" value={value} onChange={setValue} />
              </div>

              <div className="button col-lg-8 text-center mt-5">
                <button>Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog;