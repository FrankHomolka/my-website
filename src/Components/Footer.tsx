import { useWindowSize } from "../Functions/useWindowSize";
import { theme } from "../ThemeContext";

export interface IMenuLink {
  url: string;
  label: string;
}

export default function Footer() {
  const windowSize = useWindowSize();

  return (
    <div
      style={{
        width: "100%",
        height: "120px",
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
        {/* Contact Info */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ margin: "6px", color: "white" }}>
            frankwhomolka@gmail.com
          </div>
          <div style={{ margin: "6px", color: "white" }}>(828) 545-0966</div>
        </div>
      </div>
    </div>
  );
}
