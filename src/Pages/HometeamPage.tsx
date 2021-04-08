import React from "react";
import ProjectDetails from "../Components/ProjectDetails";
import flowerKnightImage from "../Media/flower_knight.png";
import reposeImage from "../Media/repose.png";
import hometeamImage from "../Media/hometeam.png";
import selmaImage from "../Media/selma.png";

export default function HometeamPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        fontFamily: "Anonymous Pro",
      }}
    >
      <ProjectDetails
        title={"Hometeam"}
        description={["Find providers in your area"]}
        dateCreated={"January 20th, 2021"}
        coverImage={hometeamImage}
        googlePlayLink={
          "https://play.google.com/store/apps/details?id=com.withhometeam.mobile"
        }
        appStoreLink={
          "https://apps.apple.com/us/app/hometeam-provider-map/id1549171640"
        }
        links={["https://site.withhometeam.com/"]}
      />
    </div>
  );
}
