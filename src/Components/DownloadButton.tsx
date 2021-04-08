import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import googlePlayImage from "../Media/google-play-badge.png";
import appStoreImage from "../Media/appstore.png";
import { Link } from "react-router-dom";

export default function DownloadButton(props: { link: string }) {
  return (
    <div
      style={{
        backgroundColor: "rgb(149, 159, 205)",
        color: "white",
        width: "100px",
        borderRadius: "20px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      Download
    </div>
  );
}
