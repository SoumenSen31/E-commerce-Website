import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Auth = () => {
  const [mode, setMode] = useState("signup");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    alert("user Signed Up");
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
