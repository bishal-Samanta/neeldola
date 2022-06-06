import { useState } from "react";

const css = {
  leftDiv: {
    backgroundColor: "#392D2D",
    minHeight: "100vh",
    width: "18%",
    display: "flex",
    flexDirection: "column",
  },
  logo: {
    fontSize: "45px",
    fontWeight: "400",
    lineHeight: "66.56px",
    color: "#FFFFFF",
    textAlign: "center",
    height: "50px",
  },

  button: {
    width: "70%",
    border: "1px solid transparent",
    margin: "0 auto",
    marginBottom: "25px",
    display: "flex",
    justifyContent: "center",
    height: "50px",
    paddingTop: "25px",
    boxSizing: "borderBox",
    background: "#DBD2D2",
    borderRadius: "7px",
    color: "black",
    fontSixe: "22px",
    cursor: "pointer",
  },
};

export const LeftNavbar = ({getQuery}) => {
  

  const handleClick = (event) =>{
    let name = event.target.className;
    getQuery(name)
  }

  return (
    <>
      <div style={css.leftDiv}>
        <div style={{ border: "1px solid transparent" }}>
          <p style={css.logo}>Neeldola</p>
        </div>
        <div style={css.button} onClick={handleClick} className="message">Add Message</div>
        <div style={css.button} onClick={handleClick} className="photo">Add Photos</div>
        <div style={css.button} onClick={handleClick} ></div>
        <div style={css.button} onClick={handleClick} ></div>
      </div>
    </>
  );
};
