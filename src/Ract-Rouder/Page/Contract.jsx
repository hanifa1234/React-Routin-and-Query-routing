import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contract = () => {

  const navigate = useNavigate(" ")
  return (
    <div>
         <h1> Contract Page </h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae laborum sint numquam facilis aliquam debitis perspiciatis, labore eveniet cumque esse molestias placeat soluta ea earum aliquid impedit ut quasi nam.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quam placeat perferendis! Temporibus similique quidem cumque repudiandae est. Architecto quod adipisci sint incidunt cum doloremque molestiae tempora dolores iste facere!</p>
    <button onClick={()=>{navigate("/Home")}}> go to Home Page </button>
    <button onClick={()=>{navigate("/Blog")}}> go to Blog Page </button>
    </div>

    
  )
}

export default Contract