export default function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontSize: "12px",
        fontWeight: "bold",
      }}
    >
      {/* My Email */}
      <i
        style={{
          fontStyle: "normal",
          fontFamily: "Material Icons",
          fontSize: "20px",
          marginRight: "8px",
        }}
      >
        mail
      </i>
      frankwhomolka@gmail.com
    </div>
  );
}
