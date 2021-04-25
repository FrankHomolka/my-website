import React from "react";
import gamemakerIcon from "../Media/icons/gamemaker-icon.jpg";
import asepriteIcon from "../Media/icons/aseprite-icon.png";
import cssIcon from "../Media/icons/css-icon.png";
import dartIcon from "../Media/icons/dart-icon.jpg";
import flutterIcon from "../Media/icons/flutter-icon.png";
import gimpIcon from "../Media/icons/gimp-icon.png";
import godotIcon from "../Media/icons/godot-icon.png";
import htmlIcon from "../Media/icons/html-icon.png";
import javascriptIcon from "../Media/icons/javascript-icon.png";
import reactIcon from "../Media/icons/react-icon.png";
import reaperIcon from "../Media/icons/reaper-icon.png";

export default function TechIcons(props: { techIcons: string[] }) {
  const iconStyle: React.CSSProperties = {
    width: "30px",
    margin: "2px",
    height: "30px",
    objectFit: "contain",
  };

  function getIcon(icon: string) {
    switch (icon) {
      case "gamemaker":
        return gamemakerIcon;
      case "aseprite":
        return asepriteIcon;
      case "css":
        return cssIcon;
      case "dart":
        return dartIcon;
      case "flutter":
        return flutterIcon;
      case "gimp":
        return gimpIcon;
      case "godot":
        return godotIcon;
      case "html":
        return htmlIcon;
      case "javascript":
        return javascriptIcon;
      case "react":
        return reactIcon;
      case "reaper":
        return reaperIcon;
      default:
        return;
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {props.techIcons.map((tech) => {
        return <img style={iconStyle} src={getIcon(tech)} />;
      })}
    </div>
  );
}
