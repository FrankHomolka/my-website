import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import { theme } from "../ThemeContext";
import { albumData } from "../Data/AlbumData";

interface IAlbumInfo {
  img: string;
  link: string;
}

export default function MusicPage() {
  const windowSize = useWindowSize();

  const columnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "22%",
  };

  function albumTile(albumInfo: IAlbumInfo) {
    return (
      <a href={albumInfo.link}>
        <img
          className="albumImage"
          src={albumInfo.img}
          style={{
            margin: "12px 0",
            objectFit: windowSize.mobile ? "contain" : "cover",
            borderRadius: "25px",
            width: "100%",
          }}
          alt={""}
        />
      </a>
    );
  }

  return (
    <div
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
          {albumData.columnOne.map((album: IAlbumInfo) => {
            return albumTile(album);
          })}
        </div>
        {/* Second column of album covers */}
        <div style={{ ...columnStyle, width: "44%" }}>
          {albumData.columnTwo.map((album: IAlbumInfo) => {
            return albumTile(album);
          })}
        </div>
        {/* Third column of album covers */}
        <div style={{ ...columnStyle, marginTop: "12%" }}>
          {albumData.columnThree.map((album: IAlbumInfo) => {
            return albumTile(album);
          })}
        </div>
      </div>
    </div>
  );
}
