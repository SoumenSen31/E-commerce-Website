import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const [mode, setMode] = useState("signup");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { signup, logIn } = useContext(AuthContext);
  const [error, setError] = useState(null);

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "signup") {
      result = signup(data.email, data.password);
    } else {
      result = logIn(data.email, data.password);
    }
    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }
  }
  return (
    <div>
      <div className="hero bg-transparent min-h-[80vh] sm:p-2">
        <div className="card bg-base-900 border border-neutral-700 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl p-5 font-bold">
            {mode === "signup" ? "Sign Up" : "Log In"}
          </h1>
          <div className="card-body">
            <form className="fieldset" onSubmit={handleSubmit(onSubmit)}>
              {error && (
                <div role="alert" className="alert alert-error alert-soft">
                  <span>{error}</span>
                </div>
              )}
              <label className="text-white">Email</label>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                className="input"
                placeholder="Email"
                htmlFor="email"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
              <label className="text-white">Password</label>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 character.",
                  },
                  maxLength: {
                    value: 50,
                    message: "Password cannot exceed 50 characters",
                  },
                })}
                type="password"
                className="input"
                placeholder="Password"
                htmlFor="password"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              <button className="btn btn-neutral mt-4">
                {mode === "signup" ? "Sign Up" : "Log In"}
              </button>
              {mode === "signup" ? (
                <p className="mt-2 text-center">
                  Already have an account?{" "}
                  <span
                    className="text-blue-600 visited:text-purple-600 hover:cursor-pointer"
                    onClick={() => setMode("login")}
                  >
                    Login
                  </span>
                </p>
              ) : (
                <p className="mt-2 text-center">
                  Don't have an account?{" "}
                  <span
                    onClick={() => setMode("signup")}
                    className="text-blue-600 visited:text-purple-600 hover:cursor-pointer"
                  >
                    Sign Up
                  </span>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
