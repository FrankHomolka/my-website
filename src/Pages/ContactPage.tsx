import React, { useState } from "react";
import { theme } from "../ThemeContext";
import Button from "../Components/Button";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const areaInputStyle: React.CSSProperties = {
    fontFamily: "Anonymous Pro",
    margin: "8px 0",
    maxWidth: "400px",
    width: "80%",
    padding: "12px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontSize: "16px",
  };

  return (
    <div
      style={{
        marginTop: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          ...theme.headerStyle,
        }}
      >
        Contact Me
      </div>
      <form
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type={"name"}
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          placeholder={"Name"}
          style={areaInputStyle}
        />
        <input
          type={"email"}
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder={"Email"}
          style={areaInputStyle}
        />
        <textarea
          placeholder={"Message"}
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
          style={{ ...areaInputStyle, height: "100px" }}
        />
      </form>
      <Button
        text={"Send"}
        onClick={() => {
          console.log(name);
          console.log(email);
          console.log(message);
        }}
      />
    </div>
  );
}
