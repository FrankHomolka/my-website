import React, { useState } from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import { Link } from "react-router-dom";
import "../style.css";

export default function ProjectPreview(props: {
  dateCreated: string;
  coverImage?: string;
  coverVideo?: string;
  description: string;
  googlePlayLink?: string;
  appStoreLink?: string;
  links?: string[];
  detailLink: string;
  titleImage?: string;
  titleString?: string;
}) {
  const windowSize = useWindowSize();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        padding: "0.5%",
        width: windowSize.mobile ? "100%" : "32%",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        margin: windowSize.mobile ? "12px 0" : "0",
        alignItems: "center",
      }}
    >
      <Link
        onMouseLeave={() => {
          setHovered(false);
        }}
        onMouseEnter={() => {
          setHovered(true);
        }}
        to={"/projects/" + props.detailLink}
        className="projectPreview"
        style={{
          textDecoration: "none",
          borderRadius: "20px",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {props.coverImage && (
          <img
            src={props.coverImage}
            style={{
              width: "100%",
              height: "800px",
              objectFit: "cover",
              borderRadius: "20px",
              backgroundColor: "transparent",
            }}
          />
        )}
        {props.titleString && (
          <div
            style={{
              width: "150px",
              position: "absolute",
              top: "0",
              left: "0",
              color: "white",
              fontSize: "25px",
              padding: "5%",
            }}
          >
            {props.titleString}
          </div>
        )}
        {props.titleImage && (
          <img
            src={props.titleImage}
            style={{
              width: "150px",
              position: "absolute",
              top: "0",
              left: "0",
              padding: "5%",
            }}
          />
        )}
      </Link>
    </div>
  );
}
