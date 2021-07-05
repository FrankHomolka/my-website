import React from "react";
import AboutPage from "./Pages/AboutPage";
import HeaderBar from "./Components/HeaderBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useWindowSize } from "./Functions/useWindowSize";
import Footer from "./Components/Footer";
import ProjectsPage from "./Pages/ProjectsPage";
import MusicPage from "./Pages/MusicPage";

export default function App() {
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
        {/* Header bar includes title and nav links */}
        <HeaderBar />
        {/* Div controls main layout */}
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-start",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Switch>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
            <Route path="/music" exact={true}>
              <MusicPage />
            </Route>
            <Route path="/">
              <AboutPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
