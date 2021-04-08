import React, { useState } from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import { Link } from "react-router-dom";
import "../style.css";

export default function ProjectPreview(props: {
  title: string;
  dateCreated: string;
  coverImage?: string;
  coverVideo?: string;
  description: string;
  googlePlayLink?: string;
  appStoreLink?: string;
  links?: string[];
  detailLink: string;
}) {
  const windowSize = useWindowSize();
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      onMouseLeave={() => {
        setHovered(false);
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      to={props.detailLink}
      className="projectPreview"
      style={{
        textDecoration: "none",
        color: "black",
        padding: "1%",
        margin: "0 0 20px 0",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Anonymous Pro",
      }}
    >
      <div style={{ fontSize: "20px", fontWeight: "bold", margin: "12px 0" }}>
        {props.title}
      </div>
      {props.coverImage && (
        <img
          src={props.coverImage}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
      )}
      <div
        style={{
          fontSize: "14px",
          margin: "12px 0",
          color: "gray",
          width: "100%",
        }}
      >
        {props.dateCreated}
      </div>
      <div style={{ margin: "10px 20px", height: "55px" }}>
        {props.description}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
        }}
      ></div>
      <div style={{ width: "100%", borderBottom: "1px solid gray" }}></div>
    </Link>
  );
}
