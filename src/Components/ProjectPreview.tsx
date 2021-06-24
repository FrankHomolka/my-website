import React from "react";
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

  return (
    <Link
      to={"/projects/" + props.detailLink}
      className="projectPreview"
      style={{
        margin: windowSize.mobile ? "15px 0" : "1%",
        borderRadius: "20px",
        display: "flex",
        position: "relative",
      }}
    >
      {props.coverImage && (
        <img
          src={props.coverImage}
          style={{
            width: "100%",
            objectFit: "cover",
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
          alt={""}
        />
      )}

      {props.titleString && (
        <div
          style={{
            width: windowSize.mobile ? "50px" : "150px",
            position: "absolute",
            top: "0",
            left: "0",
            color: "white",
            fontSize: windowSize.mobile ? "21px" : "25px",
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
            width: windowSize.mobile ? "95px" : "150px",
            position: "absolute",
            top: "0",
            left: "0",
            padding: "5%",
          }}
          alt={""}
        />
      )}
    </Link>
  );
}
