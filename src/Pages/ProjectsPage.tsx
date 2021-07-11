import ProjectDetails from "../Components/ProjectDetails";
import flowerKnightImage from "../Media/flower_knight_1.png";
import hometeamImage from "../Media/hometeam_1.png";
import reposeImage from "../Media/repose_1.png";
import thisWebsiteImage from "../Media/this_website.png";
import selmaImage from "../Media/selma_1.png";
import { theme } from "../ThemeContext";
import hometeamMedia1 from "../Media/hometeam_job.jpg";
import hometeamMedia2 from "../Media/hometeam_provider.jpg";
import selmaMedia1 from "../Media/tour_selma_front.jpg";
import selmaMedia2 from "../Media/tour_selma_app.jpg";

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
  titleWidth?: string;
  mobileTitleWidth?: string;
}

export default function ProjectsPage() {
  const location = useLocation();

  // Array of project preview data
  const projects: IProject[] = [
    {
      titleImage: hometeamTitleImage,
      description:
        "Hometeam is a web and mobile app that lets you find the best service providers in your area based on reviews and a custom map. ",
      dateCreated: "January 20th, 2021",
      coverImage: hometeamImage,
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.withhometeam.mobile",
      appStoreLink:
        "https://apps.apple.com/us/app/hometeam-provider-map/id1549171640",
      links: ["https://site.withhometeam.com/"],
      detailLink: "hometeam",
      titleWidth: "200px",
      mobileTitleWidth: "150px",
    },
    {
      titleString: "This Website",
      description:
        "Coded from the ground up using React.js, TypeScript, HTML, and CSS. ",
      dateCreated: "April 4th, 2021",
      coverImage: thisWebsiteImage,
      detailLink: "this-website",
    },
    {
      titleImage: selmaTitleImage,
      description:
        "Tour Selma is a physically bounded audio and visual tour guide through the historic city of Selma, Alabama.",
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
        "Repose is a short, abstract, musical experience designed for two players inspired by games like Journey and A Short Hike. ",
      dateCreated: "January 20th, 2021",
      coverImage: reposeImage,
      detailLink: "repose",
    },
    {
      titleImage: flowerKnightTitleImage,
      description:
        "Flower Knight is a roguelike dungeon crawler inspired by games like Enter The Gungeon and Risk Of Rain. ",
      dateCreated: "December 20th, 2021",
      coverImage: flowerKnightImage,
      detailLink: "flower-knight",
      titleWidth: "130px",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {location.pathname === "/projects" && (
        <>
          {/* Page title*/}
          <div style={theme.headerStyle}>Projects</div>
          {/* Container for all projects */}
          <div
            style={{
              width: "100%",
              maxWidth: "1400px",
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
                  mobileTitleWidth={project.mobileTitleWidth}
                  titleWidth={project.titleWidth}
                />
              );
            })}
          </div>
        </>
      )}
      {/* Project details, displayed based on selected project */}
      {location.pathname === "/projects/hometeam" && (
        <ProjectDetails
          title={"Hometeam"}
          description={[
            "HomeTeam is a web and mobile app that lets homeowners find the best service providers in their area based on reviews and a custom map",
            "I spent over two years as a remote front-end developer on HomeTeam, along with one other front-end developer, and one backend developer. ",
            "I worked part-time throughout school and transitioned to full-time during summers. ",

            hometeamMedia1,
            "/tab In the beginning I mostly worked on email templates and simple webpages, but I quickly moved on to implementing more complex pages and features. ",
            "The first version of HomeTeam was created with pure Javascript, HTML, and CSS, with a django backend. ",
            "After making significant strides towards creating a full featured web app, we realized we needed to refactor a significat portion of the codebase, ",
            "and as we were adding more complex features like Google Maps integration and image editing, we decided to recreate the prototype using React.js. ",
            "This allowed us to create a significantly more robust foundation that focused heavily on components and reusability, which drasticlly decreased ",
            "the time required to implement new features. ",

            hometeamMedia2,
            "/tab While working on HomeTeam I was able to take on a multitude of challenges including designing and implementing pages and user interface elements, and ",
            "researching libraries and incorporating external libraries. ",
            "I was in charge of most of the webpages and functionality of HomeTeam, except most of the Goolge Maps integration which was handled by my co-worker",
            "Due to the rapidly evolving nature of working at a startup I had to be quick on my feet and willing to adapt. ",
            "There were many times where we made major changes to trajectory of HomeTeam, and what I was working on could change a lot from day to day. ",
            "Moving on from HomeTeam, I have learned a ton; not only about coding with React.js, TypeScript, CSS, and HTML, but also about time management, being a self starter, ",
            "using good design practices, and team work. ",
          ]}
          dateCreated={"January 20th, 2021"}
          coverVideo={"https://www.youtube.com/embed/ckjplbHdbzA"}
          googlePlayLink={
            "https://play.google.com/store/apps/details?id=com.withhometeam.mobile"
          }
          appStoreLink={
            "https://apps.apple.com/us/app/hometeam-provider-map/id1549171640"
          }
          link={"https://site.withhometeam.com/"}
          techIcons={["react", "css", "javascript", "html"]}
          titleColor={"#9ca9d1"}
        />
      )}
      {location.pathname === "/projects/tour-selma" && (
        <ProjectDetails
          title={"Tour Selma"}
          description={[
            "Tour Selma is a physically bounded audio and visual tour guide through the historic city of Selma, Alabama. ",
            "Features include a custom interactive map using the Google Maps API, audio directions using a custom audio player, ",
            "photographs linked to each location, and dynamic narration.",
            "I created Tour Selma during a month long internship at MotionMobs over the summer of my junior year of college. ",
            "I spent the first week of that internship learning the basics of Flutter, FireBase, and Dart as I had no previous experience with ",
            "any of them. The learning process mostly consisted of me doing research, reading documentation, and creating a simple pet finder app to ",
            "learn the basics in a hands on way. I got some advice from my co-worked on the development team, but the majority of my learning was self-guided. ",
            "After that, the development team and I felt I was reading to work on a real commercial app. ",
            selmaMedia1,
            "/tab We decided that Tour Selma was a good fit as it was small enough that I could complete the basic functionality over the ",
            "next three weeks. Within that time I worked by myself, occassionally getting advice from my co-workers on best ways to implement ",
            "certain features, and to get pointers on where I could learn more about things I was unfamiliar with.",
            "At the end of my internship, all of the essential functionality of Tour Selma was completed.",
            selmaMedia2,
            "/tab The client was able to create tours, populate them with images and audio clips, connect those media elements to pins on ",
            "a custom map, and connect the pins to create a full experience. ",
            "After I left the other developers at MotionMobs implemented the remaining content (audio clips, images, and pins), ",
            "and Tour Selma was published to the Google Play Store and App Store. You can find links to the downloads above. ",
          ]}
          dateCreated={"January 20th, 2021"}
          coverImage={selmaImage}
          googlePlayLink={
            "https://play.google.com/store/apps/details?id=com.ac_selma.app"
          }
          appStoreLink={"https://apps.apple.com/us/app/tour-selma/id1477070272"}
          link={"https://tourselma.com/"}
          techIcons={["flutter", "dart"]}
          titleColor={"#F2B64E"}
        />
      )}
      {location.pathname === "/projects/repose" && (
        <ProjectDetails
          title={"Repose"}
          description={[
            "'Repose' is a short experience designed for two players. Placed in a strange world, the players must collect ",
            "items from a deserted wasteland to bring life back to the world through plants and music. ",
            "I created 'Repose' over the span of a few months for my senior project at Cal Poly San Luis Obispo. ",
            "The development of 'Repose' was as exciting as it was new. ",
            "It was the first time I had ever created a 3D video game, the first time I had ever created a 3D model, ",
            "the first time I had ever used the GoDot engine, and the first time I had ever implemented local and global multiplayer. ",
            "From the start I knew that trying to do all of this was an enormous task, so I immediately planned out the scope and created a road map on Trello. ",
            "This helped me figure out what key features needed to be implemented in order to create an MVP (minimum viable product). ",
            "After creating the roadmap, I spent a long time simply designing the game out with pen and paper before ever writing any code. ",
            "Once I had an idea of the basic premise of the game, I watched hours of tutorials on YouTube, and spent days reading through GoDot's documentation. ",
            "With my new found knowledge I was able to get a basic prototype of a 3D, first person video game up within a few weeks. ",
            "I knew the most complex feature would be the implemetation of multiplayer so I started on that next.",
          ]}
          link={"https://frankhomolka.itch.io/repose"}
          dateCreated={"January 20th, 2021"}
          coverVideo={"https://www.youtube.com/embed/2cvDAr7EVtg"}
          techIcons={["godot", "reaper", "gimp"]}
          titleColor={"#7ABBC0"}
        />
      )}
      {location.pathname === "/projects/flower-knight" && (
        <ProjectDetails
          title={"Flower Knight"}
          description={[
            "Flower knight is a dungeon crawler roguelike inspired by games like Risk of Rain, Nuclear Throne, and Enter The Gungeon. ",
            "You start as a warlord who just wants to have a garden. Unfortunately, you can't grow very much in the underworld, so you have to escape. ",
            "This requires you to fight through throngs of enemies, collect gold, unlock and buy items, and die over and over again until you're strong enough to ",
            "to defeat the king and escape to the overworld. ",
            "It was the first video game I ever completed, and I did all of the game design, art creation (except for some character design and pixel by Perrin Heasley), ",
            "music and sound composition, and programming. ",
            "I programmed Flower Knight with GameMaker Studio, created the art with Aseprite, and composed the sound and music with Reaper. ",
            "What started out as a way for me to pass time during the COVID-19 pandemic turned into a multi-level game with 2 different mini-bosses, 3 unique bosses, ",
            "3 separate soundtracks, 12 different enemy types, over 30 unique items, over 50 custom sound effects, and hundreds of art assets. ",
            "Flower Knight is available for download through the link above. ",
          ]}
          link={"https://frankhomolka.itch.io/flower-knight"}
          dateCreated={"December 20th, 2021"}
          coverVideo={"https://www.youtube.com/embed/wTruq5awe-w"}
          techIcons={["gamemaker", "aseprite", "reaper"]}
          titleColor={"#941244"}
        />
      )}
      {location.pathname === "/projects/this-website" && (
        <ProjectDetails
          title={"This Website"}
          description={[
            "This website was created using React.js, TypeScript, HTML, and CSS. ",
            "I wrote all of the code, and decided not to use any external libraries or plugins to keep the project ",
            "small and easy to maintain. While creating this website I wanted to focus on simplicity, readability, and functionality. ",
            "For this reason, animations and transitions are fast and used sparingly, and the colors are simple to highlight the content of each page. ",
            "To maximize functionality and responsiveness I also tested multiple different display sizes, including a variety of mobile devices, ",
            "from the beginning of development. This means I haven't had to go back and refactor a ton of code ",
            "when I realized what I created didn't translate to mobile. ",
            "I also kept coupling and repeated code to a minimum by creating components for any element that's used more than once, and strict typing to",
            "improve stablity and readability. ",
            "My experiences with coding and music are presented equally, each getting its own page, as this is a reflection of who I am as a person. ",
          ]}
          link={"https://frankhomolka.com"}
          dateCreated={"December 20th, 2021"}
          coverImage={thisWebsiteImage}
          techIcons={["react", "html", "css", "javascript"]}
          titleColor={theme.colors.primary}
        />
      )}
    </div>
  );
}
