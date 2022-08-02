import React from 'react'
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"

const Details = () => {
  const {state}  = useLocation()
  const navigate = useNavigate()
  const {url, title, content} = state;
  return (
    <div className='bg-light m-auto detailContainer'>
      <div>
    <img src={url} alt={title} />
      </div>
      <h1>{title}</h1>
      <p className="text-dark fs-4">
          {new Date().getDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear()}
        </p>
        <p>{content}</p>
        <button onClick={()=>navigate(-1)}>Back To Home</button>
    </div>
  )
}

export default Details