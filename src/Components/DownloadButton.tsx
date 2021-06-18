import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import googlePlayImage from "../Media/google-play-badge.png";
import appStoreImage from "../Media/appstore.png";
import { Link } from "react-router-dom";

export default function DownloadButton(props: { link: string }) {
  return (
    <a
      href={"../" + props.link}
      download={props.link}
      style={{
        backgroundColor: "#8aa7ac",
        borderRadius: "20px",
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
      }}
    >
      <i
        style={{
          fontStyle: "normal",
          fontFamily: "Material Icons",
          color: "white",
          fontSize: "20px",
        }}
      >
        file_download
      </i>
    </a>
  );
}
