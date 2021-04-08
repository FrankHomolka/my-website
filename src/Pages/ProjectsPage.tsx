import React from "react";
import ProjectPreview from "../Components/ProjectPreview";
import flowerKnightImage from "../Media/flower_knight.png";
import reposeImage from "../Media/repose.png";
import hometeamImage from "../Media/hometeam.png";
import selmaImage from "../Media/selma.png";
import thisWebsiteImage from "../Media/this-website.png";

export default function ProjectsPage() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        height: "100%",
        fontFamily: "Anonymous Pro",
        marginTop: "20px",
      }}
    >
      <ProjectPreview
        title={"This website"}
        description={"Coded with React from the ground up."}
        dateCreated={"April 4th, 2021"}
        coverImage={thisWebsiteImage}
        detailLink={"this-website"}
      />
      <ProjectPreview
        title={"Flower Knight"}
        description={"You're a knight, kill the bad guys."}
        dateCreated={"December 20th, 2021"}
        coverImage={flowerKnightImage}
        detailLink={"flower-knight"}
      />
      <ProjectPreview
        title={"Repose"}
        description={"A game where you run around and play music."}
        dateCreated={"January 20th, 2021"}
        coverImage={reposeImage}
        detailLink={"repose"}
      />
      <ProjectPreview
        title={"Tour Selma"}
        description={"A touring app for selma."}
        dateCreated={"January 20th, 2021"}
        coverImage={selmaImage}
        googlePlayLink={
          "https://play.google.com/store/apps/details?id=com.ac_selma.app"
        }
        appStoreLink={"https://apps.apple.com/us/app/tour-selma/id1477070272"}
        links={["https://tourselma.com/"]}
        detailLink={"tour-selma"}
      />
      <ProjectPreview
        title={"Hometeam"}
        description={"Find providers in your area."}
        dateCreated={"January 20th, 2021"}
        coverImage={hometeamImage}
        googlePlayLink={
          "https://play.google.com/store/apps/details?id=com.withhometeam.mobile"
        }
        appStoreLink={
          "https://apps.apple.com/us/app/hometeam-provider-map/id1549171640"
        }
        links={["https://site.withhometeam.com/"]}
        detailLink={"hometeam"}
      />
    </div>
  );
}
