import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import profileImage from "../Media/profile.jpg";
import { theme } from "../ThemeContext";

export default function MusicPage() {
  const windowSize = useWindowSize();

  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "24%",
  };

  const imageStyle: React.CSSProperties = {
    margin: "12px 0",
    borderRadius: "25px",
  };

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          fontSize: "40px",
          paddingLeft: "30px",
          marginTop: "20px",
        }}
      >
        Albums
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div style={columnStyle}>
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
        </div>
        <div style={columnStyle}>
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
        </div>
        <div style={columnStyle}>
          <img src={profileImage} style={imageStyle} />
        </div>
        <div style={columnStyle}>
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
        </div>
      </div>
      <div style={{ width: "100%", fontSize: "40px", paddingLeft: "30px" }}>
        Concerts
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div style={columnStyle}>
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
        </div>
        <div style={columnStyle}>
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
          <img src={profileImage} style={imageStyle} />
        </div>
      </div>
    </div>
  );
}
