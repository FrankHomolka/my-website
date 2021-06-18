import { Link as Link, useLocation } from "react-router-dom";
import { useWindowSize } from "../Functions/useWindowSize";
import { theme } from "../ThemeContext";
import MenuButton from "./MenuButton";

export interface IMenuLink {
  url: string;
  label: string;
}

export default function HeaderBar() {
  const windowSize = useWindowSize();
  const location = useLocation();
  const linkStyle = {
    fontSize: "20px",
    margin: windowSize.mobile ? "0" : "0 10px",
    color: "white",
  };

  const links: IMenuLink[] = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/projects", label: "Projects" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.colors.primary,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: windowSize.mobile ? "100%" : "1200px",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* Title */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            fontSize: windowSize.mobile ? "50px" : "35px",
            color: "white",
            marginLeft: "16px",
            fontWeight: "bold",
            fontFamily: "Anonymous Pro",
          }}
        >
          {windowSize.mobile ? "FH." : "Frank Homolka"}
        </Link>
        {/* Nav Links */}
        {windowSize.mobile ? (
          <MenuButton links={links} />
        ) : (
          <div>
            {links.map((link) => {
              return (
                <Link
                  to={link.url}
                  style={{
                    textDecoration:
                      link.url === location.pathname ? "underline" : "none",
                    ...linkStyle,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
