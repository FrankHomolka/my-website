import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import HeaderBar from "./Components/HeaderBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useWindowSize } from "./Functions/useWindowSize";
import TourSelmaPage from "./Pages/TourSelmaPage";
import HometeamPage from "./Pages/HometeamPage";
import ReposePage from "./Pages/ReposePage";
import FlowerknightPage from "./Pages/FlowerKnightPage";
import ThisWebsitePage from "./Pages/ThisWebsitePage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";

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
            minHeight: "85vh",
          }}
        >
          <Switch>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact" exact={true}>
              <ContactPage />
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
            <Route path="/projects/this-website" exact={true}>
              <ThisWebsitePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
        <Footer />
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
