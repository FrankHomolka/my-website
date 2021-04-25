import React from "react";
import ProjectDetails from "../Components/ProjectDetails";
import flowerKnightImage from "../Media/flower_knight.png";
import reposeImage from "../Media/repose.png";
import hometeamImage from "../Media/hometeam.png";
import selmaImage from "../Media/selma.png";

export default function TourSelmaPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <ProjectDetails
        title={"Tour Selma"}
        description={["A touring app for selma"]}
        dateCreated={"January 20th, 2021"}
        coverImage={selmaImage}
        googlePlayLink={
          "https://play.google.com/store/apps/details?id=com.ac_selma.app"
        }
        appStoreLink={"https://apps.apple.com/us/app/tour-selma/id1477070272"}
        links={["https://tourselma.com/"]}
      />
    </div>
  );
}
