import React from "react";
import googlePlayImage from "../Media/icons/google-play-icon.png";
import appStoreImage from "../Media/icons/apple-icon.png";
import TechIcons from "./TechIcons";
import { theme } from "../ThemeContext";

export default function ProjectDetails(props: {
  title: string;
  dateCreated: string;
  titleColor: string;
  coverImage?: string;
  coverVideo?: string;
  description: any[];
  googlePlayLink?: string;
  appStoreLink?: string;
  downloadLink?: string;
  link?: string;
  techIcons?: string[];
}) {
  const contentMaxWidth = "700px";
  return (
    <div
      style={{
        width: "100%",
        margin: "0 0 60px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      {/* Project title */}
      <a style={theme.headerStyle} href={props.link}>
        {props.title}
      </a>

      {/* Displays cover image of project */}
      {props.coverImage && (
        <img
          src={props.coverImage}
          style={{ width: "100%", maxWidth: "900px" }}
          alt={""}
        />
      )}
      {/* Displays cover video about project */}
      {props.coverVideo && (
        <div style={{ maxWidth: "900px", width: "100%" }}>
          <iframe
            width="99%"
            height="493"
            src={props.coverVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      )}
      {/* Download links */}
      <div
        style={{
          display: "flex",
          width: "100%",
          marginTop: "12px",
          maxWidth: "900px",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "6px",
          }}
        >
          {props.googlePlayLink && (
            <a style={{ margin: "12px 0" }} href={props.googlePlayLink}>
              <img
                style={{ width: "25px", marginRight: "6px" }}
                src={googlePlayImage}
                alt={""}
              />
            </a>
          )}
          {props.appStoreLink && (
            <a style={{ margin: "12px 0" }} href={props.appStoreLink}>
              <img style={{ width: "25px" }} src={appStoreImage} alt={""} />
            </a>
          )}
        </div>
        {/* Tech icons */}
        {props.techIcons && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {props.techIcons && <TechIcons techIcons={props.techIcons} />}
          </div>
        )}
      </div>
      {/* Project description */}
      {props.description && (
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            borderBottom: "1px solid lightgray",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: contentMaxWidth,
              margin: "8px 20px 20px 20px",
              width: "100%",
              lineHeight: 1.75,
              textIndent: "20px",
            }}
          >
            {props.description.map((text) => {
              // If it's an image, display it
              return text.includes("static") ? (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    margin: "16px 0",
                  }}
                >
                  <img style={{ maxHeight: "400px" }} src={text} alt={""} />
                </div>
              ) : text.includes("/n") ? (
                <br />
              ) : text.includes("/tab") ? (
                <span style={{ marginLeft: "20px" }}>
                  {text.replace("/tab", "")}
                </span>
              ) : (
                text
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
