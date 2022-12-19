import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Submit({ setSubLink }) {
  const [subNum, setSubNum] = useState();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (subNum > 0 && subNum <= 137 && subNum % 1 == 0) {
      console.log(subNum);
      const heroInfo = await axios
        .get("https://api.opendota.com/api/heroStats")
        .then((res) => res.data.filter((object) => object.id == subNum)[0]);
      setSubLink(heroInfo.img);
      setMessage("");
      navigate("/output");
    } else {
      setMessage("Please enter number between 1 and 137 !!!");
    }
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <input
          className="p-4 text-2xl border-2 border-black rounded-lg"
          onChange={(e) => setSubNum(e.target.value)}
        ></input>
        <div className="text-red-500 italic mt-4 text-xl">{message}</div>
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

export default Submit;
