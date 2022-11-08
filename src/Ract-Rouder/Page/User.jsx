import React, { useState } from 'react'

// Quary perameter jonno useSearchPaeams
import { useParams, useSearchParams } from 'react-router-dom'
const User = () => {


  //query perameter jonno use
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("id"));
  const [name, setNames] = useState(' ')
  const [age, setAge] = useState(' ')


  //route perameter jonno use
  // const {userid} = useParams()





  // SubmitHandel
  const SubmitHandel = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age })
  }

  return (

    //query perameter jonno use
    <div>
      <h1>User : </h1>
      <form onSubmit={SubmitHandel}>
        <input type="text"
         value={name}
         placeholder="Name"
          onChange={(e) => {
          setNames(e.target.value)
        }} />

        <input type="text"
         value={age}
         placeholder="age"
          onChange={(e) => {
          setAge(e.target.value)
        }} />

        <button type='submit'> Find User </button>
      </form>




      <h1> {searchParams.get("id")}</h1>
      <h1> {searchParams.get("age")}</h1>
      <h1> {searchParams.get("name")}</h1>
    </div>


    //route perameter jonno use
    // <div>User <h1>{userid}</h1> </div>

  )
}

export default User