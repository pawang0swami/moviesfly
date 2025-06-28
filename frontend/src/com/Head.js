import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Head = () => {
  const nav = useNavigate();
const a = localStorage.getItem("user");
  const out = () => {
    localStorage.clear();
    nav("/login");
  };
  

  return (
    <div className="text-3xl sticky top-0  bg-black z-10 text-red-500 font-bold p-3 border-b-2 border-gray-500 flex justify-between items-center">
      <Link to="/">
        <span>
          Fly<span className="text-white">oont</span>
        </span>{" "}
      </Link>

      {a ? (
        <div className="flex ">
          <h1 className="text-lg text-white flex items-center cursor-pointer m-5">
            <Link to="/add">Add movie</Link>
          </h1>

          <h1 className="text-lg text-white flex items-center cursor-pointer m-5">
            <Link to="/login" onClick={out}>
              
              logout
            </Link>
          </h1>
        </div>
      ) : (
        <div className="flex ">
          <h1 className="text-lg text-white flex items-center cursor-pointer m-5">
            <Link to="/singup">sing up</Link>
          </h1>
          <h1 className="text-lg text-white flex items-center cursor-pointer m-5">
            <Link to="/login">login</Link>
          </h1>
        </div>
      )}
    </div>
  );
};

export default Head;
