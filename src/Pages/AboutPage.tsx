import React from "react";
import { useWindowSize } from "../Functions/useWindowSize";
import profileImage from "../Media/profile.jpg";
import { theme } from "../ThemeContext";

export default function AboutPage() {
  const windowSize = useWindowSize();
  const headerStyle: React.CSSProperties = {
    maxWidth: "320px",
    width: "100%",
    marginBottom: windowSize.mobile ? "16px" : "0",
    ...theme.headerStyle,
  };

  const contentStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };

  const rowStyle: React.CSSProperties = {
    margin: windowSize.mobile ? "15px" : "30px 0",
    display: "flex",
    flexDirection: windowSize.mobile ? "column" : "row",
  };

  function WorkExperience(props: {
    title: string;
    dates: string;
    description: string[];
  }) {
    return (
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          {props.title}
        </div>
        <div style={{ color: "gray", fontSize: "12px", margin: "8px 0" }}>
          {props.dates}
        </div>
        <div>
          {props.description.map((test) => {
            return <div style={{ padding: "12px 0" }}>{test}</div>;
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "20px 0 0 0",
          }}
        >
          <img
            src={profileImage}
            style={{
              borderRadius: "50%",
              boxShadow: "7px 5px 34px -14px rgba(0, 0, 0, 0.75)",
              width: windowSize.mobile ? "150px" : "300px",
              height: windowSize.mobile ? "150px" : "300px",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={rowStyle}>
          <div style={headerStyle}>My Life</div>
          <div style={contentStyle}>
            <div>
              I spend my time making music, playing in my band WUMPUS, hanging
              out with friends, mountain biking, surfing, hiking, coding video
              games, playing video games, and watering my plants and garden
            </div>
          </div>
        </div>
        <div style={rowStyle}>
          <div style={headerStyle}>L.A.E.S</div>
          <div style={contentStyle}>
            <div>
              For three long years I was getting my major in Computer Science at
              Cal Poly. During that time a learned more about coding than I
              think I'll ever need to know, but I was missing something. I felt
              like I was different from everyone in my classes. They were all so
              focused on working themselves down to the bone so they could land
              a job at Facebook or Amazon. That never interested me, in fact I
              actively wanted to work somewhere that focused on ethical
              computing and the experiences of people instead of on maximizing
              profits through exploitation.
            </div>
          </div>
        </div>
        <div style={rowStyle}>
          <div style={headerStyle}>Education</div>
          <div style={contentStyle}>
            Graduated from California Polytechnic State University, San Luis
            Obispo. B.S. in Liberal Arts and Engineering studies with
            concentrations in Computer Science and Music Theory April 2021. GPA:
            3.41 Dean’s List for Fall Quarter 2017.
          </div>
        </div>
        <div style={rowStyle}>
          <div style={headerStyle}>Skills</div>
          <div style={contentStyle}>
            - Coding in Assembly, Java, Python, HTML, CSS, Javascript, Go, Dart,
            C, Ruby.<br></br>- Proficiency with VSCode, Vim, Intellij, Linux,
            React, Flutter, Typescript, Github, GoDot and SQL. <br></br>-
            Extensive knowledge of object-oriented design principles. <br></br>-
            Designing solutions to complex coding problems using decomposition.
            <br></br>- Experience with Gimp, Reaper, music composition, sound
            effect creation, 2D graphics creation
          </div>
        </div>
        <div style={rowStyle}>
          <div style={headerStyle}>Work Experience</div>
          <div style={contentStyle}>
            <WorkExperience
              title={"Aquent, Asheville NC - Junior Programmer"}
              dates={"8/10/14-8/24/14, 7/13/15-7/25/15, 7/25/16-8/12/16"}
              description={[
                "Created automated tests using Ruby, HTML, and CSS to test critical websites’ functionality.",
                "Created a tool for importing payroll spreadsheet data in Java.",
                "Coded an API for third-party usage in Java.",
              ]}
            />
            <WorkExperience
              title={"MotionMobs, Birmingham AL - Development Intern"}
              dates={"7/1/19-7/31/19"}
              description={[
                "Developed a commercial app using Flutter and Go with Google Maps API integration",
                "Understanding of version control in developing software with a team",
                "Proficient in time management and documenting tasks",
                "Worked closely with our Project Manager and CTO",
                "Gain experience with agile development",
                "Participated in sprint meetings",
                "Used Dart and Go languages",
              ]}
            />
            <WorkExperience
              title={"Hometeam, Birmingham AL - Software Developer"}
              dates={"8/20/19-Present"}
              description={[
                "Designed and implemented UI, including page layouts, buttons, forms, content creation systems, image uploading and processing",
                "Javascript, HTML, CSS, JQuery, React, interaction with Django backend",
                "Part of a team of three who developed the entire application",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
