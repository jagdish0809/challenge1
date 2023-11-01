import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigation = useNavigate();
  const firebase = useFirebase();

  const inputchangehandler = (input, value) => {
    setUserData({ ...userData, [input]: value });
  };

  const formsubmithandler = (e) => {
    e.preventDefault();

    //creating the user
    firebase
      .signupUserWithEmailAndPassword(userData.email, userData.password)
      .then((value) => {
        alert("Successfully Signed Up!");
        navigation("/home");
      })
      .catch((err) =>
        err.code === "auth/email-already-in-use"
          ? alert("Email already is in use.")
          : alert("Something went wrong!")
      );

    //storing the user data
    const { email, password } = userData;
    firebase.putData(`users/${userData.name}`, { email, password });
  };

  const loginwithgoogle = () => {
    firebase
      .signupWithGoogle()
      .then((value) => navigation("/home"))
      .catch((err) => console.log(err.code));
  };

  return (
    <div className="h-screen w-screen bg-[#5E918D] flex justify-center items-center">
      <div className="max-w-[600px] w-[94%] bg-[#76A19D] rounded-lg py-[30px] px-[20px] md:px-[30px]  shadow-lg">
        <h1 className="text-center text-[#396C69] font-bold text-3xl">
          Create Account
        </h1>
        <form
          action=""
          className="mt-8 flex flex-col justify-between items-center"
          onSubmit={formsubmithandler}
        >
          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-[#396C69] font-bold text-xl">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={userData.name}
              className="py-1 singupinput outline-none border-b-2 border-[#9CDCD7] bg-transparent text-lg text-[#f2f2f2]"
              onChange={(e) => inputchangehandler("name", e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-[15px]  w-full">
            <label htmlFor="" className="text-[#396C69] font-bold text-xl">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Enter your e-mail"
              value={userData.email}
              className="py-1 singupinput outline-none border-b-2 border-[#9CDCD7] bg-transparent text-lg text-[#f2f2f2]"
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
              className="py-1 singupinput outline-none border-b-2 border-[#9CDCD7] bg-transparent text-lg text-[#f2f2f2]"
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
        <div className="flex w-full justify-between items-center my-2 space-x-[15px]">
          <span className="bg-[#9CDCD7] h-[1px] w-full"></span>
          <p className="text-[#9CDCD7] font-bold text-lg">or</p>
          <span className="bg-[#9CDCD7] h-[1px] w-full"></span>
        </div>
        <div className="flex w-full justify-between flex-col items-center space-y-3">
          <button
            className="w-[95%] h-[50px] bg-[#FEFFFE] rounded-lg text-2xl font-bold text-[#5E918D]"
            onClick={loginwithgoogle}
          >
            <span className="font-normal">Continue with </span>Google
          </button>
          {/* <button className="w-[95%] h-[50px] bg-[#FEFFFE] rounded-lg text-2xl font-bold text-[#5E918D]">
            <span className="font-normal">Continue with </span>Apple
          </button> */}
        </div>
        <p className="text-center my-3 text-[#9CDCD7] text-lg">
          Already have an account?{" "}
          <span
            className="underline text-[#f2f2f2] cursor-pointer"
            onClick={() => {
              navigation("/login");
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
