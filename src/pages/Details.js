import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { deleteBlog } from "../helpers/firebase";
import { TiArrowBack } from "react-icons/ti";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";

const Details = () => {
  const { currentUser } = useContext(AuthContext);
  const { editBlog, blog, increaseLike, color } = useContext(BlogContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const { url, title, content, userName, id, date } = state;
  const defaultImg = "https://picsum.photos/200/300?random=2"
  return (
    <div className="bg-light m-auto detailContainer px-2 mt-2">
      <div className="m-auto details-img">
        <img src={url ? url : defaultImg} alt={title} />
      </div>
      <h1 className="text-uppercase text-center p-1">{title}</h1>
      <p className="text-dark fs-4">{date}</p>
      <p>{content}</p>
      <div className="d-flex justify-content-between pb-3 pe-2">
          <TiArrowBack className="fs-3" style={{cursor:"pointer"}} onClick={() => navigate(-1)}/>
        <div>
          {currentUser.displayName === userName && (
            <>
              <span
                onClick={() => {
                  deleteBlog(id)
                  navigate("/")
                }
                }
              >
                {/* REMOVE */}
                <AiTwotoneDelete className="fs-3 text-danger" style={{cursor:"pointer"}}/>
              </span>
              <span
                onClick={() => {
                  editBlog(state);
                  navigate("/updateblog");
                }}
              >
                {/* EDIT */}
                <RiEdit2Fill className="fs-3 text-info" style={{cursor:"pointer"}}/>
              </span>
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default Details;
