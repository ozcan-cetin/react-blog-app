import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const SingleBlog = ({ item }) => {
const navigate = useNavigate()

  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser.displayName);
  // const displayName = currentUser.displayName;
  const { title, url, content, userName, like } = item;
  console.log(userName);
  return (
    <div className=" col-lg-4 col-md-6 single rounded-3 mb-2">
      <div className="bg-light p-2">
        <div className="img-div">
          <img src={url} alt={title} />
        </div>
        <h1 className="text-dark header text-center text-capitalize">{title}</h1>
        <p className="text-dark fs-4">
          {new Date().getDate() +
            "/" +
            (new Date().getMonth() + 1) +
            "/" +
            new Date().getFullYear()}
        </p>
        <p className="text-dark ">{content.slice(0, 80)}...</p>
        <h5 className="text-dark">@{userName}</h5>
        <div className="btnDiv">
          <button onClick={()=>navigate("/details", {state:item, replace:false})}>DETAILS</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
