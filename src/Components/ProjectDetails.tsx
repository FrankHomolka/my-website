import React from "react";
import googlePlayImage from "../Media/icons/google-play-icon.png";
import appStoreImage from "../Media/icons/apple-icon.png";
import DownloadButton from "./DownloadButton";
import TechIcons from "./TechIcons";
import { useWindowSize } from "../Functions/useWindowSize";
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
  links?: string[];
  techIcons?: string[];
}) {
  const windowSize = useWindowSize();
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
      <div style={theme.headerStyle}>{props.title}</div>
      {/* Displays cover image of project */}
      {props.coverImage && (
        <img
          src={props.coverImage}
          style={{ width: "100%", maxWidth: "900px" }}
          alt={""}
        />
      )}
      {/* Download links */}
      <div
        style={{
          display: "flex",
          width: windowSize.mobile ? "90%" : "100%",
          maxWidth: "900px",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        {props.googlePlayLink && (
          <a style={{ margin: "12px 0" }} href={props.googlePlayLink}>
            <img
              style={{ width: "35px", marginRight: "12px" }}
              src={googlePlayImage}
              alt={""}
            />
          </a>
        )}
        {props.appStoreLink && (
          <a style={{ margin: "12px 0" }} href={props.appStoreLink}>
            <img style={{ width: "35px" }} src={appStoreImage} alt={""} />
          </a>
        )}
        {props.downloadLink && <DownloadButton link={props.downloadLink} />}
      </div>
      {/* Displays cover video about project */}
      {props.coverVideo && (
        <div style={{ maxWidth: contentMaxWidth, width: "100%" }}>
          <iframe
            width="99%"
            height="400"
            src={props.coverVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          ></iframe>
        </div>
      )}
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
              margin: "20px",
              width: "100%",
              lineHeight: 1.75,
            }}
          >
            {
              // Allows showing of images between text
              props.description.map((text) => {
                return text.includes("static") ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      margin: "16px 0",
                    }}
                  >
                    <img style={{ width: "100px" }} src={text} alt={""} />
                  </div>
                ) : (
                  text
                );
              })
            }
          </div>
        </div>
      )}
      {/* Tech icons */}
      {props.techIcons && (
        <div
          style={{
            margin: "40px 0 0 0",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            maxWidth: contentMaxWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.techIcons && <TechIcons techIcons={props.techIcons} />}
        </div>
      )}
    </div>
  );
}
