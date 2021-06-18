import React from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import HeaderBar from "./Components/HeaderBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useWindowSize } from "./Functions/useWindowSize";
import ContactPage from "./Pages/ContactPage";
import Footer from "./Components/Footer";
import ProjectsPage from "./Pages/ProjectsPage";

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
            maxWidth: windowSize.mobile ? "100%" : "100%", //1200px
            height: "100%",
            justifyContent: "flex-start",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
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
            <Route path="/projects" exact={true}>
              <ProjectsPage />
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
