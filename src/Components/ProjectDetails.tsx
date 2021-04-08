import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import googlePlayImage from "../Media/google-play-badge.png";
import appStoreImage from "../Media/appstore.png";
import DownloadButton from "./DownloadButton";
import TechIcons from "./TechIcons";

export default function ProjectDetails(props: {
  title: string;
  dateCreated: string;
  coverImage?: string;
  coverVideo?: string;
  description: string[];
  googlePlayLink?: string;
  appStoreLink?: string;
  downloadLink?: string;
  links?: string[];
  techUsed?: string;
  techIcons?: string[];
}) {
  const coverMediaMaxWidth = "600px";
  return (
    <div
      style={{
        width: "100%",
        margin: "0 0 40px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
        fontFamily: "Anonymous Pro",
      }}
    >
      <div style={{ fontSize: "36px", fontWeight: "bold", margin: "24px 0" }}>
        {props.title}
      </div>
      {props.coverImage && (
        <img
          src={props.coverImage}
          style={{ width: "100%", maxWidth: coverMediaMaxWidth }}
        />
      )}
      {props.coverVideo && (
        <div style={{ maxWidth: coverMediaMaxWidth, width: "100%" }}>
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
      <div
        style={{
          fontSize: "14px",
          margin: "12px 0 12px 20px",
          color: "gray",
          width: "100%",
          maxWidth: coverMediaMaxWidth,
        }}
      >
        {props.dateCreated}
      </div>
      {props.description && (
        <div style={{ margin: "20px" }}>
          {props.description.map((text) => {
            return text;
          })}
        </div>
      )}
      {props.techUsed && (
        <div style={{ margin: "20px" }}>
          <b>The Tech: </b> {props.techUsed}
        </div>
      )}
      {/* Downloda links & tech icons */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {/* Download links */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          {props.googlePlayLink && (
            <a style={{ margin: "12px 0" }} href={props.googlePlayLink}>
              <img style={{ width: "115px" }} src={googlePlayImage} />
            </a>
          )}
          {props.appStoreLink && (
            <a style={{ margin: "12px 0" }} href={props.appStoreLink}>
              <img style={{ width: "100px" }} src={appStoreImage} />
            </a>
          )}
          {props.downloadLink && <DownloadButton link={props.downloadLink} />}
        </div>
        {/* Tech icons */}
        {props.techIcons && <TechIcons techIcons={props.techIcons} />}
      </div>

      <div style={{ width: "100%", borderBottom: "1px solid gray" }}></div>
    </div>
  );
}
