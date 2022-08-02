import React, { createContext, useState } from 'react'


export const BlogContext = createContext()

const BlogContextProvider = ({children}) => {

const initialValues = {title:"", url:"", content:""}

const [blog, setBlog] = useState(initialValues)


  return (
    <BlogContext.Provider value={{blog, setBlog, initialValues}}>
        {children}
    </BlogContext.Provider>
  )
}

export default BlogContextProvider