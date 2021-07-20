import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import badDreamsCover from "../Media/albums/bad dreams.jpg";
import chestnutStreetCover from "../Media/albums/chestnut street.jpg";
import coffeeRamenCover from "../Media/albums/coffee ramen.jpg";
import deltaBluesHotTamalesCover from "../Media/albums/delta blues hot tamales.jpg";
import wumpusIICover from "../Media/albums/wumpus II.jpg";
import desertSongsCover from "../Media/albums/desert songs.jpg";
import roadHeadCover from "../Media/albums/road head.jpg";
import songsForCowsCover from "../Media/albums/songs for cows.jpg";
import stuckOnElevenCover from "../Media/albums/stuck on eleven.jpg";
import thisAsAMemoryCover from "../Media/albums/this as a memory.jpg";
import timeMovesSlowCover from "../Media/albums/time moves slow.jpg";
import wumpusCover from "../Media/albums/wumpus.jpg";
import { theme } from "../ThemeContext";

export default function MusicPage() {
  const windowSize = useWindowSize();

  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "22%",
  };

  const imageStyle: React.CSSProperties = {
    margin: "12px 0",
    objectFit: windowSize.mobile ? "contain" : "cover",
    borderRadius: "25px",
    width: "100%",
  };

  return (
    <a
      href="https://open.spotify.com/artist/3NWBPFKAfqlEIYQ2ltSiNZ?si=jGliKLdLRiKYyi6iaJFs5Q"
      style={{
        textDecoration: "none",
        color: "black",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={theme.headerStyle}>Albums</div>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {/* First column of album covers */}
        <div style={{ ...columnStyle, marginTop: "12%" }}>
          <img
            className="albumImage"
            src={chestnutStreetCover}
            style={{ ...imageStyle }}
            alt={""}
          />

          <img
            className="albumImage"
            src={roadHeadCover}
            style={imageStyle}
            alt={""}
          />
          <img
            className="albumImage"
            src={stuckOnElevenCover}
            style={{ ...imageStyle }}
            alt={""}
          />
          <img
            className="albumImage"
            src={coffeeRamenCover}
            style={{ ...imageStyle }}
            alt={""}
          />
        </div>
        {/* Second column of album covers */}
        <div style={{ ...columnStyle, width: "44%" }}>
          <img
            className="albumImage"
            src={songsForCowsCover}
            style={imageStyle}
            alt={""}
          />
          <img
            className="albumImage"
            src={wumpusIICover}
            style={{ ...imageStyle }}
            alt={""}
          />
          <img
            className="albumImage"
            src={desertSongsCover}
            style={{ ...imageStyle }}
            alt={""}
          />
        </div>
        {/* Third column of album covers */}
        <div style={{ ...columnStyle, marginTop: "12%" }}>
          <img
            className="albumImage"
            src={timeMovesSlowCover}
            style={imageStyle}
            alt={""}
          />
          <img
            className="albumImage"
            src={thisAsAMemoryCover}
            style={{ ...imageStyle }}
            alt={""}
          />
          <img
            className="albumImage"
            src={wumpusCover}
            style={imageStyle}
            alt={""}
          />
          <img
            className="albumImage"
            src={badDreamsCover}
            style={imageStyle}
            alt={""}
          />
        </div>
      </div>
    </a>
  );
}
