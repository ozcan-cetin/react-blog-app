import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {
        currentUser ? <Outlet /> : <Navigate to="/login" replace />
      }
    </>
  );
};

export default PrivateRouter;
