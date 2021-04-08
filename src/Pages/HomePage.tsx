import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import profileImage from "../Media/profile.jpg";

export default function HomePage() {
  const windowSize = useWindowSize();
  const headerStyle: React.CSSProperties = {
    fontSize: "36px",
    fontWeight: "bold",
    maxWidth: "320px",
    width: "100%",
    marginBottom: windowSize.mobile ? "16px" : "0",
  };

  const contentStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const rowStyle: React.CSSProperties = {
    margin: windowSize.mobile ? "15px" : "30px 0",
    display: "flex",
    flexDirection: windowSize.mobile ? "column" : "row",
  };
  return (
    <div
      style={{
        padding: "16px",
        fontFamily: "Anonymous Pro",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px 0 0 0",
        }}
      >
        <img
          src={profileImage}
          style={{
            width: windowSize.mobile ? "150px" : "300px",
            height: windowSize.mobile ? "150px" : "300px",
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={rowStyle}>
          <div style={headerStyle}>Contact Me</div>
          <div style={contentStyle}>
            <div style={{ marginBottom: "8px" }}>frankwhomolka@gmail.com</div>
            <div style={{ marginBottom: "8px" }}>(828) 545-0966</div>
          </div>
        </div>
        <div style={rowStyle}>
          <div style={headerStyle}>My Life</div>
          <div style={contentStyle}>
            <div>
              I spend my time making music, playing in my band WUMPUS, hanging
              out with friends, mountain biking, surfing, hiking, coding video
              games, playing video games, and watering my plants and garden
            </div>
          </div>
        </div>
        <div style={rowStyle}>
          <div style={headerStyle}>L.A.E.S</div>
          <div style={contentStyle}>
            <div>
              For three long years I was getting my major in Computer Science at
              Cal Poly. During that time a learned more about coding than I
              think I'll ever need to know, but I was missing something. I felt
              like I was different from everyone in my classes. They were all so
              focused on working themselves down to the bone so they could land
              a job at Facebook or Amazon. That never interested me, in fact I
              actively wanted to work somewhere that focused on ethical
              computing and the experiences of people instead of on maximizing
              profits through exploitation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
