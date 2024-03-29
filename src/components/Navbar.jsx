import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "black",
        color: "white",
        paddingTop: "2%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <GitHubIcon style={{ marginRight: "0.5rem", fontSize: "3rem" }} />
        <span>GitHub</span>
      </div>
      <div>
        <Button
          style={{
            color: "white",
            border: "1px solid white",
            cursor: "pointer",
          }}
        >
          Login
        </Button>
        <Button
          style={{
            backgroundColor: "green",
            color: "white",
            marginLeft: "0.5rem",
            cursor: "pointer",
          }}
        >
          Signup
        </Button>
      </div>
    </div>
  );
}

export default Navbar;

// Note: The login and signup buttons are for appearance purposes only. This is form homepage.
