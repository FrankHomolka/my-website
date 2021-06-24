import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import profileImage from "../Media/profile.jpg";
import githubIcon from "../Media/icons/github-icon.png";
import spotifyIcon from "../Media/icons/spotify-icon.png";

export default function AboutPage() {
  const windowSize = useWindowSize();

  const contentStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    lineHeight: 1.75,
    flexDirection: "column",
  };

  const columnStyle: React.CSSProperties = {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: windowSize.mobile ? "100%" : "750px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: windowSize.mobile ? "center" : "space-between",
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
              margin: windowSize.mobile ? "40px 0 0 0" : "40px 0",
            }}
            alt={""}
          />
          <div style={contentStyle}>
            <div
              style={{
                marginLeft: windowSize.mobile ? "0" : "24px",
                marginTop: windowSize.mobile ? "24px" : "0",
                textAlign: "center",
                padding: "12px",
              }}
            >
              Hello, I'm <b>Frank Homolka</b>. I'm a programmer, musician, and
              designer who's interested in creating ethically minded software. I
              believe in a future where technology is created with a focus on
              experience and wellbeing of the user over growth and profit
              oriented mindset. The humanities and technology are no longer
              separate entities. They're deeply intertwined and will continue to
              be even more so as time goes on. We need to start working on the
              large issues coming up within the next few years, especially in
              regards to social media and Artificial Intelligence.
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
            <div style={{ ...contentStyle, flexDirection: "row" }}>
              <a href="https://github.com/FrankHomolka">
                <img style={{ width: "40px" }} src={githubIcon} alt={""} />
              </a>
              <a href="https://open.spotify.com/artist/3NWBPFKAfqlEIYQ2ltSiNZ?si=jGliKLdLRiKYyi6iaJFs5Q">
                <img
                  style={{ width: "40px", marginLeft: "12px" }}
                  src={spotifyIcon}
                  alt={""}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
