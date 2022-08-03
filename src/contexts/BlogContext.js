import React, { createContext, useContext, useState } from "react";
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
    usersId: [""]
  };

 

  const [blog, setBlog] = useState(initialValues);

  return (
    <BlogContext.Provider value={{ blog, setBlog, initialValues }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
