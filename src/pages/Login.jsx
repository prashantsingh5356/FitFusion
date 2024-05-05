// Library Imports
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const signUpUpserHandler = () => {
    navigate("/onboarding");
  };

  return (
    <>
      <h1>Login page</h1>
      <button onClick={signUpUpserHandler} style={{ cursor: "pointer" }}>
        {" "}
        Sign UP
      </button>
    </>
  );
};

export default Login;
