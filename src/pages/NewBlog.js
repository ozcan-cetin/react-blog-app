import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { addBlog } from "../helpers/firebase";

const NewBlog = () => {
  const { blog,setBlog,initialValues} = useContext(BlogContext);
  const {currentUser} = useContext(AuthContext)

  const handleChange = (e)=> {
    e.preventDefault()
    const {name,value}=e.target
    setBlog({ ...blog, [name]: value });
  }
  console.log(blog);

  const handleSubmit=(e)=>{
    e.preventDefault()
    // setBlog({...blog, userName:currentUser.displayName})
    addBlog(blog)
    setBlog(initialValues)
  }


  return (
    <div>
      <form className="new-form row d-flex justify-content-center align-items-center flex-column gap-3 m-auto mt-5 p-3 rounded-5" onSubmit={handleSubmit}>
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
          required
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
        <button type="submit" className="bg-primary rounded-5 text-white">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
