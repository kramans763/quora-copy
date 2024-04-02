import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./UnderConstruction.css"
import underConstImg from "../../assets/working.gif"
const UnderConstruction = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
    <div className="constuction-page dark:bg-neutral-900 dark:text-zinc-400">
      <img src={underConstImg} alt="gif" />
      <h1 className="header-construction">Page Is Under Construction</h1>
      <div className="construction-button-container">
        {" "}
        Go To Main Page{" "}
        <button onClick={handleClick} className="construction-btn">
          Click Here
        </button>
      </div>
    </div>
    </>
  )
}

export default UnderConstruction