import { Link as Link, useLocation } from "react-router-dom";
import { useWindowSize } from "../Functions/useWindowSize";
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
    { url: "/projects/", label: "Projects" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#2F3649",
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
            fontSize: "40px",
            color: "#959FCD",
            marginLeft: "16px",
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
