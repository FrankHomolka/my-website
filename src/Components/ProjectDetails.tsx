import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import googlePlayImage from "../Media/icons/google-play-icon.png";
import appStoreImage from "../Media/icons/apple-icon.png";
import DownloadButton from "./DownloadButton";
import TechIcons from "./TechIcons";
import { theme } from "../ThemeContext";

export default function ProjectDetails(props: {
  title: string;
  dateCreated: string;
  titleColor: string;
  coverImage?: string;
  coverVideo?: string;
  description: string[];
  googlePlayLink?: string;
  appStoreLink?: string;
  downloadLink?: string;
  links?: string[];
  techIcons?: string[];
}) {
  const contentMaxWidth = "600px";
  const windowSize = useWindowSize();
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          backgroundColor: props.titleColor,
          fontSize: "36px",
          fontWeight: "bold",
          color: "white",
          margin: "0 0 60px 0",
          padding: "110px 0",
        }}
      >
        {props.title}
      </div>
      {props.coverImage && (
        <img
          src={props.coverImage}
          style={{ width: "100%", maxWidth: "900px" }}
        />
      )}
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
      {props.description && (
        <div
          style={{
            maxWidth: contentMaxWidth,
            margin: "60px 20px 20px 20px",
            width: "100%",
            lineHeight: 1.75,
          }}
        >
          {props.description.map((text) => {
            return text;
          })}
        </div>
      )}
      {/* Downloda links & tech icons */}
      {(props.googlePlayLink ||
        props.appStoreLink ||
        props.downloadLink ||
        props.techIcons) && (
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
          {/* Download links */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            {props.googlePlayLink && (
              <a style={{ margin: "12px 0" }} href={props.googlePlayLink}>
                <img style={{ width: "35px" }} src={googlePlayImage} />
              </a>
            )}
            {props.appStoreLink && (
              <a style={{ margin: "12px 0" }} href={props.appStoreLink}>
                <img style={{ width: "35px" }} src={appStoreImage} />
              </a>
            )}
            {props.downloadLink && <DownloadButton link={props.downloadLink} />}
          </div>
          {/* Tech icons */}
          {props.techIcons && <TechIcons techIcons={props.techIcons} />}
        </div>
      )}
    </div>
  );
}
