import ProjectDetails from "../Components/ProjectDetails";
import flowerKnightImage from "../Media/flower_knight_1.png";
import hometeamImage from "../Media/hometeam_1.png";
import reposeImage from "../Media/repose_1.png";
import thisWebsiteImage from "../Media/this_website.png";
import selmaImage from "../Media/selma_1.png";
import { theme } from "../ThemeContext";

import flowerKnightTitleImage from "../Media/flower_knight_title.png";
import reposeTitleImage from "../Media/repose_title.png";
import hometeamTitleImage from "../Media/hometeam_title.png";
import selmaTitleImage from "../Media/selma_title.png";
import ProjectPreview from "../Components/ProjectPreview";
import { useLocation } from "react-router-dom";

interface IProject {
  titleImage?: string;
  titleString?: string;
  description: string;
  dateCreated: string;
  coverImage: string;
  googlePlayLink?: string;
  appStoreLink?: string;
  links?: string[];
  detailLink: string;
}

export default function ProjectsPage() {
  const location = useLocation();
  console.log(location);

  const projects: IProject[] = [
    {
      titleImage: hometeamTitleImage,
      description:
        "Hometeam lets homeowners find the best service providers in their area based on reviews and a custom map. I designed and implemented most of the pages, components, and front-end functionality of the app.",
      dateCreated: "January 20th, 2021",
      coverImage: hometeamImage,
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.withhometeam.mobile",
      appStoreLink:
        "https://apps.apple.com/us/app/hometeam-provider-map/id1549171640",
      links: ["https://site.withhometeam.com/"],
      detailLink: "hometeam",
    },
    {
      titleString: "This Website",
      description:
        "Coded from the ground up using React. Simplicity and functionality are the core elements driving the design of this website. I try to keep animations and bloat to a minimum to maximize load time and responsiveness: simple, effective, streamlined.",
      dateCreated: "April 4th, 2021",
      coverImage: thisWebsiteImage,
      detailLink: "this-website",
    },
    {
      titleImage: selmaTitleImage,
      description:
        "A physically bounded audio and visual tour guide through the historic city of Selma, Alabama. Features include a custom interactive map using the Google Maps API, audio directions using a custom audio player, photographs linked to each location, and dynamic narration.",
      dateCreated: "January 20th, 2021",
      coverImage: selmaImage,
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.ac_selma.app",
      appStoreLink: "https://apps.apple.com/us/app/tour-selma/id1477070272",
      links: ["https://tourselma.com/"],
      detailLink: "tour-selma",
    },
    {
      titleImage: reposeTitleImage,
      description:
        "Repose is a short experience designed for two players. Placed in a strange world, the players must collect items from a deserted wasteland to bring life back to the world through plants and music. ",
      dateCreated: "January 20th, 2021",
      coverImage: reposeImage,
      detailLink: "repose",
    },
    {
      titleImage: flowerKnightTitleImage,
      description:
        "Flower Knight is a roguelike dungeon crawler inspired by games like Enter The Gungeon and Risk Of Rain. I created it using Gamemaker for programming, Aseprite for art, and Reaper for sound and music.",
      dateCreated: "December 20th, 2021",
      coverImage: flowerKnightImage,
      detailLink: "flower-knight",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {location.pathname === "/projects" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
            Projects
          </div>

          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {projects.map((project: IProject, index: number) => {
              return (
                <ProjectPreview
                  titleImage={project.titleImage}
                  titleString={project.titleString}
                  description={project.description}
                  dateCreated={project.dateCreated}
                  coverImage={project.coverImage}
                  detailLink={project.detailLink}
                />
              );
            })}
          </div>
        </div>
      )}
      {location.pathname === "/projects/hometeam" && (
        <ProjectDetails
          title={"Hometeam"}
          description={[
            "I spent over two years as a front-end developer on HomeTeam, an app that ",
            "lets homeowners find the best service providers in their area based on reviews and ",
            "a custom map. I designed and implemented most of the pages, components, and front-end functionality of the app.",
          ]}
          dateCreated={"January 20th, 2021"}
          coverImage={hometeamImage}
          googlePlayLink={
            "https://play.google.com/store/apps/details?id=com.withhometeam.mobile"
          }
          appStoreLink={
            "https://apps.apple.com/us/app/hometeam-provider-map/id1549171640"
          }
          links={["https://site.withhometeam.com/"]}
          techIcons={["react", "css", "javascript", "html"]}
          titleColor={"#9ca9d1"}
        />
      )}
      {location.pathname === "/projects/tour-selma" && (
        <ProjectDetails
          title={"Tour Selma"}
          description={[
            "A physically bounded audio and visual tour guide through the historic city of Selma, Alabama. ",
            "Features include a custom interactive map using the Google Maps API, audio directions using a custom audio player, ",
            "photographs linked to each location, ",
            "and dynamic narration.",
            "A physically bounded audio and visual tour guide through the historic city of Selma, Alabama. ",
            "Features include a custom interactive map using the Google Maps API, audio directions using a custom audio player, ",
            "photographs linked to each location, ",
            "and dynamic narration.",
            reposeImage,
            "A physically bounded audio and visual tour guide through the historic city of Selma, Alabama. ",
            "Features include a custom interactive map using the Google Maps API, audio directions using a custom audio player, ",
            "photographs linked to each location, ",
            "and dynamic narration.",
            "A physically bounded audio and visual tour guide through the historic city of Selma, Alabama. ",
            "Features include a custom interactive map using the Google Maps API, audio directions using a custom audio player, ",
            "photographs linked to each location, ",
            "and dynamic narration.",
          ]}
          dateCreated={"January 20th, 2021"}
          coverImage={selmaImage}
          googlePlayLink={
            "https://play.google.com/store/apps/details?id=com.ac_selma.app"
          }
          appStoreLink={"https://apps.apple.com/us/app/tour-selma/id1477070272"}
          links={["https://tourselma.com/"]}
          techIcons={["flutter", "dart"]}
          titleColor={"#F2B64E"}
        />
      )}
      {location.pathname === "/projects/repose" && (
        <ProjectDetails
          title={"Repose"}
          description={[
            "Created in a few months for my senior project. 'Repose' is a short experience designed for two players. Placed in a strange world, the players must collect ",
            "items from a deserted wasteland to bring life back to the world through plants and music. ",
          ]}
          dateCreated={"January 20th, 2021"}
          coverImage={reposeImage}
          downloadLink={"repose.zip"}
          techIcons={["godot", "reaper", "gimp"]}
          titleColor={"#7ABBC0"}
        />
      )}
      {location.pathname === "/projects/flower-knight" && (
        <ProjectDetails
          title={"Flower Knight"}
          description={[
            "Flower knight was the first game I ever completed. ",
            "It's a dungeon crawler roguelike where you unlock more and more items until you're strong enough to defeat the king of hell. ",
            "You're a simple warlord, living in the depths of hell, slaying your enemies and ruling your fiefdom.",
            "Yet you want something different, a garden.",
            "So your mission is simple, enter the Kill of Hell's castle, fight your way to its core, and escape to the overworld.",
            "I drew inspiration from game likes Risk of Rain, Nuclear Throne, and enter the gungeon.",
          ]}
          dateCreated={"December 20th, 2021"}
          coverImage={flowerKnightImage}
          downloadLink={"flowerKnight.zip"}
          techIcons={["gamemaker", "aseprite", "reaper"]}
          titleColor={"#941244"}
        />
      )}
      {location.pathname === "/projects/this-website" && (
        <ProjectDetails
          title={"This Website"}
          description={[
            "Simplicity and functionality are the core elements driving the design of this website. ",
            "I try to keep animations and fanciness to a minimum to maximize load time and responsiveness: simple, effective, streamlined.",
          ]}
          dateCreated={"December 20th, 2021"}
          coverImage={thisWebsiteImage}
          techIcons={["react", "html", "css", "javascript"]}
          titleColor={theme.colors.primary}
        />
      )}
    </div>
  );
}
