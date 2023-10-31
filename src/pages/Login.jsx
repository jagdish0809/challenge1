import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigate();

  const inputchangehandler = (input, value) => {
    setUserData({ ...userData, [input]: value });
  };

  const formsubmithandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((value) => {
        alert("Logged In Successfully!");
        navigation('/home')
      })
      .catch((err) => {
        console.log(err);
        if(err.message==="INVALID_LOGIN_CREDENTIALS"){
            alert("Invalid login credentials.")
        } else {
            alert("Something went wrong!")
        }
      });
  };
  return (
    <div className="h-screen w-screen bg-[#5E918D] flex justify-center items-center">
      <div className="max-w-[600px] w-[94%] bg-[#76A19D] rounded-lg py-[30px] px-[20px] md:px-[30px]  shadow-lg">
        <h1 className="text-center text-[#396C69] font-bold text-3xl">
          Log In
        </h1>
        <form
          action=""
          className="mt-8 flex flex-col justify-between items-center"
          onSubmit={formsubmithandler}
        >
          <div className="flex flex-col mt-[15px]  w-full">
            <label htmlFor="" className="text-[#396C69] font-bold text-xl">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              value={userData.email}
              className="py-1 logininput outline-none border-b-2 border-[#9CDCD7] bg-transparent text-lg text-[#f2f2f2]"
              onChange={(e) => inputchangehandler("email", e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-[15px]  w-full">
            <label htmlFor="" className="text-[#396C69] font-bold text-xl">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={userData.password}
              className="py-1 logininput outline-none border-b-2 border-[#9CDCD7] bg-transparent text-lg text-[#f2f2f2]"
              onChange={(e) => inputchangehandler("password", e.target.value)}
              required
            />
          </div>
          <button
            className="w-[95%] h-[50px] bg-[#FEFFFE] mt-[30px] rounded-lg text-2xl font-bold text-[#5E918D]"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
        <p className="text-center my-3 text-[#9CDCD7] text-lg">
          No account yet?{" "}
          <span
            className="underline text-[#f2f2f2] cursor-pointer"
            onClick={() => {
              navigation("/");
            }}
          >
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
