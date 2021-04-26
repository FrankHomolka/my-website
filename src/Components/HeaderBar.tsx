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
    color: "#959FCD",
  };

  const links: IMenuLink[] = [
    { url: "/", label: "Home" },
    { url: "/about", label: "About" },
    { url: "/contact/", label: "Contact" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#445684",
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
            fontSize: "50px",
            color: theme.colors.primary,
            marginLeft: "16px",
            fontWeight: "bold",
            fontFamily: "Anonymous Pro",
          }}
        >
          FH.
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
