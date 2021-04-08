import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IMenuLink } from "./HeaderBar";

export default function MenuButton(props: { links: IMenuLink[] }) {
  const [showMenu, setShowMenu] = useState(false);
  console.log("test");
  const linkStyle = {
    textDecoration: "none",
    fontSize: "20px",
    margin: "4px 0",
    color: "#959FCD",
  };

  function Button() {
    return (
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: showMenu ? "2px solid white" : "none",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            position: "absolute",
            backgroundColor: "white",
            top: "50%",
            left: "50%",
            margin: "-14px 0px 0px -14px",
          }}
        ></div>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        style={{
          width: "80px",
          height: "80px", //40px
          marginRight: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button />
        {showMenu && (
          <>
            <div
              style={{
                position: "absolute",
                right: "0px",
                top: "100px",
                width: "100px",
                backgroundColor: "white",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                display: "flex",
                flexDirection: "column",
                padding: "12px",
              }}
            >
              {props.links.map((link) => {
                return (
                  <Link to={link.url} style={linkStyle}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
}
