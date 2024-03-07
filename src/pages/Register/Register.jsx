import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^[A-Z][a-z0-9]{8,}$/;

function Register() {
  const { register, getValues, handleSubmit, formState } = useForm({
    mode: "all",
  });

  // let Navigate = useNavigate();
  const signup = async function (values) {
    const { data } = await axios.post(
      "https://test-iti.onrender.com/user/signup",
      values
    );
    console.log(data);
    // if (data.message === "success") Navigate("/auth/login");
  };

  const { errors } = formState;

  function submit(values) {
    signup(values);
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className={`w-50 mx-auto my-5 p-3 form-carrier ${styles.formCarrier}`}>
      <form onSubmit={handleSubmit(submit, onError)}>
        <div className="container">
          <h2 className=" text-center">REGISTER NOW</h2>
          <p className="text-center">
            Create your account. It's free and only takes a minute.
          </p>
          <div className="form-group mb-3 row">
            <div className="col">
              <input
                type="text"
                id="userName"
                className="form-control"
                placeholder="First Name"
                {...register("userName", {
                  required: "User Name is Required",
                  minLength: {
                    value: 3,
                    message: "User Name should be at least 3 chars",
                  },
                })}
              />
              <span className="text-danger">{errors?.firstname?.message}</span>
            </div>
            {/* <div className="col">
              <input
                type="text"
                id="lastname"
                className="form-control"
                placeholder="Last Name"
                {...register("lastname", {
                  required: "Last Name is Required",
                  minLength: {
                    value: 3,
                    message: "Last Name should be at least 3 chars",
                  },
                })}
              />
              <span className="text-danger">{errors?.lastname?.message}</span>
            </div> */}
          </div>
          <div className="form-group mb-3 row">
            <div className="col">
              <input
                type="text"
                placeholder="Email"
                id="email"
                className="form-control"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: emailRegex,
                    message: "Please Enter A valid Email",
                  },
                })}
              />
              <span className="text-danger">{errors?.email?.message}</span>
            </div>
          </div>
          <div className="form-group mb-3 row">
            <div className="col">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
                {...register("password", {
                  required: "Password is Required",
                  pattern: {
                    value: passwordRegex,
                    message: "please Enter a valid passsword",
                  },
                })}
              />
              <span className="text-danger">{errors?.password?.message}</span>
            </div>
          </div>
          <div className="form-group mb-3 row">
            <div className="col">
              <input
                type="password"
                id="passwordConfirm"
                placeholder="Confirm Password"
                className="form-control"
                {...register("passwordConfirm", {
                  pattern: {
                    value: passwordRegex,
                    message: "Please enter a valid Password",
                  },
                  required: "Email is Required",
                  validate: (value) =>
                    value === getValues().password || "Passwords do not match",
                })}
              />
              <span className="text-danger">
                {errors?.passwordConfirm?.message}
              </span>
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
        Already have an Account ? <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default Register;
