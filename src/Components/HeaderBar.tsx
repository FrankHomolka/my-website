import { Link, useLocation } from "react-router-dom";
import { useWindowSize } from "../Functions/useWindowSize";
import MenuButton from "./MenuButton";

export interface IMenuLink {
  url: string;
  label: string;
}

export default function HeaderBar() {
  const windowSize = useWindowSize();
  const location = useLocation();

  const links: IMenuLink[] = [
    { url: "/", label: "Home" },
    { url: "/projects", label: "Coding" },
    { url: "/music", label: "Music" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid lightgray",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          padding: "0 16px",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
        }}
      >
        {/* Website Title */}
        <Link
          to="/"
          style={{
            width: windowSize.mobile ? "100px" : "100%",
            textDecoration: "none",
            fontSize: windowSize.mobile ? "22px" : "35px",
            color: "black",
            paddingLeft: windowSize.mobile ? "8px" : "16px",
            fontWeight: "bold",
            fontFamily: "Anonymous Pro",
          }}
        >
          Frank Homolka
        </Link>
        {/* Nav Links shown as dropdown button on mobile, and text on desktop */}
        {windowSize.mobile ? (
          <MenuButton links={links} />
        ) : (
          <>
            {links.map((link) => {
              return (
                <Link
                  to={link.url}
                  style={{
                    textDecoration:
                      link.url === location.pathname ? "underline" : "none",
                    fontSize: "20px",
                    margin: windowSize.mobile ? "0" : "0 10px",
                    color: "black",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
