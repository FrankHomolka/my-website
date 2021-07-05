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
  titleWidth?: string;
  mobileTitleWidth?: string;
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
      {/* Project Cover image */}
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
      {/* Project title string */}
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
      {/* Project title image */}
      {props.titleImage && (
        <img
          src={props.titleImage}
          style={{
            width: windowSize.mobile
              ? props.mobileTitleWidth
                ? props.mobileTitleWidth
                : "120px"
              : props.titleWidth
              ? props.titleWidth
              : "150px",
            position: "absolute",
            top: "0",
            left: "0",
            padding: "5%",
          }}
          alt={""}
        />
      )}
      {/* Slide up on hover using CSS transitions */}
      <div
        className="projectBlurb"
        style={{
          position: "absolute",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            bottom: "0%",
            position: "absolute",
            padding: "5%",
            color: "white",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          {/* Project description */}
          {props.description}
          {/* Button to learn more about project */}
          <div
            style={{
              color: "white",
              margin: windowSize.mobile ? "20px 0 0 0" : "20px 120px 0 120px",
              textAlign: "center",
              backgroundColor: "#e53f29",
              borderRadius: "20px",
              padding: "12px",
            }}
          >
            Learn more
          </div>
        </div>
      </div>
    </Link>
  );
}
