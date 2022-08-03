import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { addBlog, updateBlog } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";

const NewBlog = () => {
  const { blog,setBlog,initialValues} = useContext(BlogContext);
  const {currentUser} = useContext(AuthContext)
  const navigate=useNavigate()

  const handleChange = (e)=> {
    e.preventDefault()
    const {name,value}=e.target
    setBlog({ ...blog, [name]: value });
  }
  console.log(blog);

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(blog.id){
      updateBlog(blog)
    }else{
      addBlog(blog,currentUser)
    }
    setBlog(initialValues)
    navigate("/")
  }


  return (
    <div>
      <form className="row new-form d-flex justify-content-center align-items-center flex-column gap-3 m-auto mt-5 p-3 rounded-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="TITLE"
          required
          value={blog.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="url"
          placeholder="IMAGE URL"
          // required
          value={blog.url}
          onChange={handleChange}
        />
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          placeholder="CONTENT"
          required
          value={blog.content}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bg-primary rounded-5 text-white py-1">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
