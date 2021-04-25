import React from "react";
import ProjectDetails from "../Components/ProjectDetails";
import flowerKnightImage from "../Media/flower_knight.png";
import reposeImage from "../Media/repose.png";
import hometeamImage from "../Media/hometeam.png";
import selmaImage from "../Media/selma.png";

export default function ReposePage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ProjectDetails
        title={"Repose"}
        description={["A game where you run around and play music"]}
        dateCreated={"January 20th, 2021"}
        coverImage={reposeImage}
        downloadLink={"test"}
        techIcons={["godot", "reaper", "gimp"]}
      />
    </div>
  );
}
