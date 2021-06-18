import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import flowerKnightImage from "../Media/flower_knight_1.png";
import flowerKnightTitleImage from "../Media/flower_knight_title.png";
import reposeImage from "../Media/repose_1.png";
import reposeTitleImage from "../Media/repose_title.png";
import hometeamImage from "../Media/hometeam_1.png";
import hometeamTitleImage from "../Media/hometeam_title.png";
import selmaImage from "../Media/selma_1.png";
import selmaTitleImage from "../Media/selma_title.png";
import thisWebsiteImage from "../Media/this_website.png";
import ProjectPreview from "../Components/ProjectPreview";
import { theme } from "../ThemeContext";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

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
export default function HomePage() {
  const windowSize = useWindowSize();

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideImageStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: windowSize.mobile ? "0px" : "10px",
    height: "500px",
    objectFit: "cover",
  };

  const overlayStyle: React.CSSProperties = {
    position: "absolute",
    borderRadius: windowSize.mobile ? "0px" : "10px",
    width: "100%",
    height: "500px",
    backgroundColor: "black",
    color: "black",
    opacity: "60%",
  };

  const projects: IProject[] = [
    {
      titleImage: hometeamTitleImage,
      description: "Find providers in your area.",
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
      titleImage: reposeTitleImage,
      description: "A game where you run around and play music.",
      dateCreated: "January 20th, 2021",
      coverImage: reposeImage,
      detailLink: "repose",
    },
    {
      titleImage: selmaTitleImage,
      description: "A touring app for selma.",
      dateCreated: "January 20th, 2021",
      coverImage: selmaImage,
      googlePlayLink:
        "https://play.google.com/store/apps/details?id=com.ac_selma.app",
      appStoreLink: "https://apps.apple.com/us/app/tour-selma/id1477070272",
      links: ["https://tourselma.com/"],
      detailLink: "tour-selma",
    },
    {
      titleString: "This Website",
      description: "Coded with React from the ground up.",
      dateCreated: "April 4th, 2021",
      coverImage: thisWebsiteImage,
      detailLink: "this-website",
    },
    {
      titleImage: flowerKnightTitleImage,
      description: "You're a knight, kill the bad guys.",
      dateCreated: "December 20th, 2021",
      coverImage: flowerKnightImage,
      detailLink: "flower-knight",
    },
  ];

  function Slide(props: { image: string; text: string }) {
    return (
      <div
        style={{
          padding: windowSize.mobile ? "0px" : "40px",
        }}
      >
        <div style={{ position: "relative" }}>
          <div style={overlayStyle}></div>
          <img style={slideImageStyle} src={props.image} />
          <div
            style={{
              position: "absolute",
              left: windowSize.mobile ? "5%" : "20%",
              width: windowSize.mobile ? "90%" : "60%",
              top: "40%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              "{props.text}"
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: "33%",
              width: "33%",
              top: "70%",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={"/projects/"} style={{ textDecoration: "none" }}>
                <Button
                  text={"Learn More"}
                  onClick={() => {
                    console.log("learn more");
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: windowSize.mobile ? "100%" : "1200px",
        width: "100%",
      }}
    >
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
            width: windowSize.mobile ? "100%" : "80%",
            margin: "25px 0 60px 0",
          }}
        >
          <Slider {...settings}>
            <Slide
              image={flowerKnightImage}
              text={"Really makes you feel like you're in hell"}
            />
            <Slide image={reposeImage} text={"Peaceful, relaxing, subtle..."} />
            <Slide
              image={hometeamImage}
              text={"Skip the search for 'electrician near me' "}
            />
            <Slide
              image={selmaImage}
              text={"A must if you are visiting Selma, AL!"}
            />
          </Slider>
        </div>
      </div>
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={theme.headerStyle}>Projects</div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
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
    </div>
  );
}
