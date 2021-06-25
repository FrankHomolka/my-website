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
import cIcon from "../Media/icons/c-icon.png";
import javaIcon from "../Media/icons/java-icon.png";
import pythonIcon from "../Media/icons/python-icon.png";

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
      case "java":
        return javaIcon;
      case "c":
        return cIcon;
      case "python":
        return pythonIcon;
      default:
        return;
    }
  }

  function getLink(icon: string) {
    switch (icon) {
      case "gamemaker":
        return "https://www.yoyogames.com/en/gamemaker";
      case "aseprite":
        return "https://www.aseprite.org/";
      case "css":
        return "https://developer.mozilla.org/en-US/docs/Web/CSS";
      case "dart":
        return "https://dart.dev/";
      case "flutter":
        return "https://flutter.dev/";
      case "gimp":
        return "https://www.gimp.org/";
      case "godot":
        return "https://godotengine.org/";
      case "html":
        return "https://en.wikipedia.org/wiki/HTML";
      case "javascript":
        return "https://en.wikipedia.org/wiki/JavaScript";
      case "react":
        return "https://reactjs.org/";
      case "reaper":
        return "https://www.reaper.fm/";
      case "java":
        return "https://www.java.com/en/";
      case "c":
        return "https://en.wikipedia.org/wiki/C_(programming_language)";
      case "python":
        return "https://www.python.org/";
      default:
        return;
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {props.techIcons.map((tech) => {
        return (
          <a href={getLink(tech)}>
            <img style={iconStyle} src={getIcon(tech)} />
          </a>
        );
      })}
    </div>
  );
}
