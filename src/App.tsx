import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";
import HeaderBar from "./Components/HeaderBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useWindowSize } from "./Functions/useWindowSize";
import TourSelmaPage from "./Pages/TourSelmaPage";
import HometeamPage from "./Pages/HometeamPage";
import ReposePage from "./Pages/ReposePage";
import FlowerknightPage from "./Pages/FlowerKnightPage";

export default function App() {
  const windowSize = useWindowSize();
  return (
    <Router>
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <HeaderBar />
        {/* Div controls main layout */}
        <div
          style={{
            width: "100%",
            maxWidth: windowSize.mobile ? "100%" : "1200px",
            height: "100%",
          }}
        >
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/projects" exact={true}>
              <ProjectsPage />
            </Route>
            <Route path="/projects/tour-selma" exact={true}>
              <TourSelmaPage />
            </Route>
            <Route path="/projects/hometeam" exact={true}>
              <HometeamPage />
            </Route>
            <Route path="/projects/flower-knight" exact={true}>
              <FlowerknightPage />
            </Route>
            <Route path="/projects/repose" exact={true}>
              <ReposePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
