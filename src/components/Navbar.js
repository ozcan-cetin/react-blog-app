import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Modal from "./Modal";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { show, setShow, currentUser } = useContext(AuthContext);
  // console.log(currentUser)
  useEffect(() => {
    const timeOut = setTimeout(() => setShow(false), 2500);

    return () => clearTimeout(timeOut);
  }, [show]);

  return (
    <nav className="navbar d-flex justify-content-between bg-primary px-3">
      <div>
        <Link to="/" className="blogs">
          BLOGS
        </Link>
      </div>
      <div className="btnDiv me-2 text-center">
        <div className="mt-3">
          {currentUser && 
          <h5 className="mb-0 text-capitalize">{currentUser.displayName}</h5>
        }
        </div>
        <div className="usericon-div">
          <button className="border-0 fs-3 bg-transparent p-2">
          <FaUserCircle
            className="text-danger bg-light rounded-circle"
            onClick={() => setShow(!show)}
          />
        </button>
        {show && <Modal />}
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
