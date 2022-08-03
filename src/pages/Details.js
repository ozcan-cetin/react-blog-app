import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { deleteBlog } from "../helpers/firebase";

const Details = () => {
  const { currentUser } = useContext(AuthContext);
  const { editBlog, blog, increaseLike, color } = useContext(BlogContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { url, title, content, userName, id, date } = state;
  return (
    <div className="bg-light m-auto detailContainer px-2 mt-2">
      <div>
        <img src={url} alt={title} />
      </div>
      <h1>{title}</h1>
      <p className="text-dark fs-4">{date}</p>
      <p>{content}</p>
      <div className="d-flex justify-content-around pb-3">
        <div>
          {currentUser.displayName === userName && (
            <>
              <button
                onClick={() => {
                  deleteBlog(id)
                  navigate("/")
                }
                }
                className="btn btn-danger border-0 text-light rounded-3 p-1 mx-1"
              >
                REMOVE
              </button>
              <button
                onClick={() => {
                  editBlog(state);
                  navigate("/updateblog");
                }}
                className="btn btn-success border-0 text-light rounded-3 p-1 mx-1 px-4"
              >
                EDIT
              </button>
            </>
          )}
        </div>

        <button
          className="btn btn-primary border-0 text-light rounded-3 p-1 mx-1"
          onClick={() => navigate(-1)}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Details;
