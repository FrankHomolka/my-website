import React from "react";

export default function DownloadButton(props: { link: string }) {
  return (
    <a
      href={"../" + props.link}
      download={props.link}
      style={{
        backgroundColor: "#8aa7ac",
        borderRadius: "20px",
        width: "30px",
        marginTop: "12px",
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
