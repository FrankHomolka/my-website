import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import googlePlayImage from "../Media/google-play-badge.png";
import appStoreImage from "../Media/appstore.png";
import { Link } from "react-router-dom";
import { theme } from "../ThemeContext";

export default function Button(props: {
  text: string;
  onClick: () => void;
  backgroundColor?: any;
}) {
  return (
    <div
      onClick={props.onClick}
      style={{
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : "#e55d4d",
        color: "white",
        width: "200px",
        minWidth: "140px",
        borderRadius: "30px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      {props.text}
    </div>
  );
}
