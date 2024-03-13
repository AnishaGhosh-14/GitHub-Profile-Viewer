import React from "react";
import SearchBar from "../components/SearchBar";
import backgroundImg from "../images/main-page.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "../components/Navbar";
function HomePage() {
  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "88vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "40%",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            padding: "4%",
            borderRadius: "40px",
          }}
        >
          <h1 style={{ textAlign: "center", color: "white" }}>
            Welcome to the GitHub Profile Explorer!
          </h1>
          <GitHubIcon style={{ color: "white", fontSize: "6rem" }} />
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
