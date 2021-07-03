import React from "react";
import badDreamsCover from "../Media/albums/bad dreams.jpg";
import beeperBoxBeatsCover from "../Media/albums/beeper box beats.jpg";
import chestnutStreetCover from "../Media/albums/chestnut street.jpg";
import coffeeRamenCover from "../Media/albums/coffee ramen.jpg";
import deltaBluesHotTamalesCover from "../Media/albums/delta blues hot tamales.jpg";
import desertSongsCover from "../Media/albums/desert songs.jpg";
import outOfTimeCover from "../Media/albums/out of time.jpg";
import roadHeadCover from "../Media/albums/road head.jpg";
import songsForCowsCover from "../Media/albums/songs for cows.jpg";
import stuckOnElevenCover from "../Media/albums/stuck on eleven.jpg";
import thisAsAMemoryCover from "../Media/albums/this as a memory.jpg";
import thisIsNotTheEndCover from "../Media/albums/this is not the end.jpg";
import timeMovesSlowCover from "../Media/albums/time moves slow.jpg";
import wumpusCover from "../Media/albums/wumpus.jpg";
import { useWindowSize } from "../Functions/useWindowSize";
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
    objectFit: "cover",
    borderRadius: "25px",
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
      <div
        style={{
          fontSize: "40px",
          paddingLeft: "30px",
          margin: "40px 0",
          fontWeight: "bold",
        }}
      >
        Albums
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ ...columnStyle, marginTop: "150px" }}>
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
            src={beeperBoxBeatsCover}
            style={{ ...imageStyle }}
            alt={""}
          />
          <img
            className="albumImage"
            src={stuckOnElevenCover}
            style={{ ...imageStyle }}
            alt={""}
          />
        </div>
        <div style={{ ...columnStyle, width: "44%" }}>
          <img
            className="albumImage"
            src={songsForCowsCover}
            style={imageStyle}
            alt={""}
          />
          <img
            className="albumImage"
            src={desertSongsCover}
            style={{ ...imageStyle }}
            alt={""}
          />
          <img
            className="albumImage"
            src={deltaBluesHotTamalesCover}
            style={{ ...imageStyle }}
            alt={""}
          />
        </div>
        <div style={{ ...columnStyle, marginTop: "150px" }}>
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
