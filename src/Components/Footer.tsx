export interface IMenuLink {
  url: string;
  label: string;
}

export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          display: "flex",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {/* Contact Info */}
        frankwhomolka@gmail.com
      </div>
    </div>
  );
}
