import React from "react";
import DownloadButton from "../Components/DownloadButton";
import TechIcons from "../Components/TechIcons";
import { useWindowSize } from "../Functions/useWindowSize";
import profileImage from "../Media/profile.jpg";
import githubIcon from "../Media/icons/github-icon.png";
import spotifyIcon from "../Media/icons/spotify-icon.png";
import { theme } from "../ThemeContext";

export default function AboutPage() {
  const windowSize = useWindowSize();
  const headerStyle: React.CSSProperties = {
    maxWidth: "320px",
    width: "100%",
    marginBottom: windowSize.mobile ? "16px" : "16px",
    ...theme.headerStyle,
  };

  const contentStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    lineHeight: 1.75,
    flexDirection: "column",
  };

  const columnStyle: React.CSSProperties = {
    margin: windowSize.mobile ? "15px" : "30px 0",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div
      style={{
        padding: "16px",
        maxWidth: windowSize.mobile ? "100%" : "1200px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: windowSize.mobile ? "column" : "row",
            justifyContent: windowSize.mobile ? "center" : "space-between",
            padding: "20px 0 0 0",
            alignItems: "center",
          }}
        >
          <img
            src={profileImage}
            style={{
              borderRadius: "50%",
              boxShadow: "7px 5px 34px -14px rgba(0, 0, 0, 0.75)",
              width: windowSize.mobile ? "150px" : "200px",
              height: windowSize.mobile ? "150px" : "200px",
              objectFit: "cover",
            }}
          />
          <div style={contentStyle}>
            <div
              style={{
                marginLeft: windowSize.mobile ? "0" : "24px",
                marginTop: windowSize.mobile ? "24px" : "0",
              }}
            >
              Hello, I'm <b>Frank Homolka</b>. I'm a programmer, musician, and
              designer who's interested in creating ethically minded software. I
              believe in a future where technology is created with a focus on
              experience and wellbeing of the user over growth and profit
              oriented mindset. The humanities and technology are no longer
              separate entities. They're deeply intertwined and will continue to
              be even more so as time goes on. We need to start planning for the
              large issues coming up within the next few years, especially
              surrounding social media and Artificial Intelligence.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div style={columnStyle}>
            <div style={headerStyle}>Coding Skills</div>
            <TechIcons
              techIcons={[
                "c",
                "java",
                "python",
                "react",
                "javascript",
                "html",
                "css",
                "dart",
                "flutter",
                "godot",
                "gamemaker",
              ]}
            />
          </div>
          <div style={columnStyle}>
            <div style={headerStyle}>Creative Skills</div>
            <TechIcons techIcons={["gimp", "aseprite", "reaper"]} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div style={columnStyle}>
            <div style={headerStyle}>Links</div>
            <div style={{ ...contentStyle, flexDirection: "row" }}>
              <a href="https://github.com/FrankHomolka">
                <img style={{ width: "40px" }} src={githubIcon} />
              </a>
              <a href="https://open.spotify.com/artist/3NWBPFKAfqlEIYQ2ltSiNZ?si=jGliKLdLRiKYyi6iaJFs5Q">
                <img
                  style={{ width: "40px", marginLeft: "12px" }}
                  src={spotifyIcon}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
