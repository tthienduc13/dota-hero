import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col  justify-center items-center">
        <Link to={"/input"}>
          <button className=" text-2xl w-[200px] bg-[#cccc] py-2 px-8 border-2 border-black hover:opacity-80 ">
            Input
          </button>
        </Link>
        <Link to={"/output"}>
          <button className=" text-2xl w-[200px] bg-[#cccc] py-2 px-8 border-2 border-black hover:opacity-80 mt-4 ">
            Output
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
