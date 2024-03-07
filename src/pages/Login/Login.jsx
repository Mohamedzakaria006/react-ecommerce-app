import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";

function Login() {
  const { register, getValues, handleSubmit, formState } = useForm({
    mode: "all",
  });
  const login = async function (values) {
    const { data } = await axios.post(
      "https://test-iti.onrender.com/user/signin",
      values
    );
    console.log(data);
  };
  const { errors } = formState;

  function submit(values) {
    login(values);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className={`w-50 mx-auto my-5 p-3 form-carrier ${styles.formCarrier}`}>
      <form onSubmit={handleSubmit(submit, onError)}>
        <div className="container text-center">
          <h2>LOGIN NOW</h2>
          <div className="form-group mb-3 row"></div>
          <div className="form-group mb-3 row">
            <div className="col">
              <input type="text" placeholder="Email" className="form-control" />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <div className="col">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group mb-3 row">
            <div className="col">
              <button className="btn btn-primary w-100">Regsiter</button>
            </div>
          </div>
        </div>
      </form>
      <div className="text-center">
        Don't have an Account? <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
}

export default Login;
