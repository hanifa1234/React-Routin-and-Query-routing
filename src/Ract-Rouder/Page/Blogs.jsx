import React, { useState,useEffect } from 'react'
import { useParams,useLocation } from 'react-router-dom'
import { blogsData } from './Data';




const Blogs = () => {
    const {title} = useParams();
    const Location = useLocation();
    // console.log(Location);


    // const [bodyData, setBodyData ] = useState(' ');


    // useEffect(() => {
    //  const blogData = blogsData.filter((blog)=> blog.title === title)
    //  setBodyData(blogData[0].body)
    // }, [])
    


  return (
    <div>
        <h1>{title} pages</h1>
        <p>{Location.state.body.slice(0,500)}</p>
        <p>{Location.state.body.slice(0,100000)}</p>
    </div>
  );
}

export default Blogs;