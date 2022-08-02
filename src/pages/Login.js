import Blog from "../assets/blok.png";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../helpers/firebase";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    // console.log(email, password);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };
  return (
    <div className="register m-auto p-3 mt-3 bg-light rounded-3">
      <div className="text-center">
        <img src={Blog} alt="blog" className="blog-img" />
      </div>
      <h2 className="text-center">LOGIN</h2>
      <form className="text-center m-auto p-2" onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
            EMAIL ADDRESS
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
            PASSWORD
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required
              onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-flex flex-column gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button type="submit" className="btn btn-secondary d-flex align-items-center justify-content-center"  onClick={handleProviderLogin}>
            With Google  &nbsp; <span className="fs-4 d-flex align-items-center"><FcGoogle/></span>
          </button>

        </div>
      </form>
    </div>
  )
}

export default Login