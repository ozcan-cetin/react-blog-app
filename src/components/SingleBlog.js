import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { BlogContext } from "../contexts/BlogContext";
import { AiFillHeart } from "react-icons/ai";
import { deleteBlog } from "../helpers/firebase";

const SingleBlog = ({ item }) => {
  const navigate = useNavigate();

  const { currentUser } = useContext(AuthContext);
  const { editBlog, blog, increaseLike} = useContext(BlogContext);
  // console.log(currentUser.displayName);
  // const displayName = currentUser.displayName;
  const { title, url, content, userName, id, date, like, color, usersId } = item;
  console.log(userName);

const defaultImg = "https://picsum.photos/200/300?random=2"
  return (
    <div className=" col-lg-4 col-md-6 single rounded-3 mb-2">
      <div className="card bg-light p-2">
        <div className="img-div">
          <img src={url ? url : defaultImg} alt={title} />
        </div>
        <h1 className="text-dark header text-center text-capitalize">
          {title.length > 11 ? title.slice(0, 8) + "..." : title}
        </h1>
        <p className="text-dark fs-4">{date}</p>
        <p className="text-dark content">{content.slice(0, 80)}...</p>
        <h5 className="text-dark">@{userName}</h5>
        <div className="btnDiv">
          <button className="btn btn-info p-1"
            onClick={() =>
              navigate("/details", { state: item, replace: false })
            }
          >
            DETAILS
          </button>
        
        <div>
          <span
            className={`${!color  ? (usersId.includes(currentUser.email) ? "text-danger" :"text-secondary") : "text-danger"} fs-4`}
            style={{ cursor: "pointer" }}
            onClick={() => increaseLike(item)}
          >
            <AiFillHeart />
          </span>
          <span className="text-dark"> {like}</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
