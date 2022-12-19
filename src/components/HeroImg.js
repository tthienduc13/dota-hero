import React from "react";
import { useNavigate } from "react-router-dom";
function HeroImg({ subLink }) {
  const imgLink = "https://api.opendota.com" + subLink;
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <>
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="w-1/2 h-1/2">
          <img className="w-full h-full" src={imgLink}></img>
        </div>
        <button
          className="mt-4 px-8 py-4 border-2 border-black rounded-lg text-2xl bg-[#cccc] hover:opacity-80"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default HeroImg;
