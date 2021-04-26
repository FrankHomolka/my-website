import React from "react";
import ProjectDetails from "../Components/ProjectDetails";
import thisWebsiteImage from "../Media/this_website.png";

export default function ThisWebsitePage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        fontFamily: "Anonymous Pro",
      }}
    >
      <ProjectDetails
        title={"This Website"}
        description={["Made in react"]}
        dateCreated={"December 20th, 2021"}
        coverImage={thisWebsiteImage}
        downloadLink={"test"}
        techUsed={
          "Coded in Gamemaker Studio 2.0, art created in Aseprite, sound effects created with Reaper, music composed in Reaper."
        }
        techIcons={["react", "html", "css", "javascript"]}
      />
    </div>
  );
}
