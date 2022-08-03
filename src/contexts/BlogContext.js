import { ref, update } from "firebase/database";
import React, { createContext, useContext, useState } from "react";
import { db } from "../helpers/firebase";
import { toastErrorNotify } from "../helpers/toastNotify";
import { AuthContext } from "./AuthContext";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [color, setColor] = useState(false);

  const initialValues = {
    title: "",
    url: "",
    content: "",
    date:new Date().toLocaleDateString("tr-TR"),
    userName: "",
    like: 0,
    usersId: [""],
    color:color
  };

   const [blog, setBlog] = useState(initialValues);

   const increaseLike = (blog) => {
    // console.log(blog.usersId);
    if(currentUser){
      if(!Object.values(blog.usersId).includes(currentUser.email)){
        console.log(Object.values(blog.usersId));
        // console.log(currentUser);
        // const db = getDatabase(app);
      const updates={}
      updates["blogs/"+blog.id]={
          ...blog,
          like: blog.like + 1,
          color:true,
          usersId:[...blog.usersId,currentUser.email]
        }
        setColor(true)
      return update(ref(db),updates)
      }
      else{
        // toastErrorNotify("You have already clicked")
        const updates={}
        updates["blogs/"+blog.id]={
            ...blog,
            like: blog.like - 1,
            color:false,
            // usersId:[...blog.usersId,blog.id]
            usersId:[(blog.usersId).filter((item)=>item!==currentUser.email)]
          }
          setColor(false)
          return update(ref(db),updates)
      }
    }
    else{
      toastErrorNotify("Please login first")
    }
      
      }

      const editBlog = (blog) => {
        // setBlog({ id, title, url, content, userName: currentUser.displayName });
        setBlog({...blog, id:blog.id, title:blog.title, url:blog.url, content:blog.content});
        // setBlog(blog);
      };

  return (
    <BlogContext.Provider value={{ blog, setBlog, initialValues, editBlog, increaseLike, color }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
