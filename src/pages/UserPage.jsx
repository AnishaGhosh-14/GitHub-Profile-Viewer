import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { fetchUserData } from "../api.js";
import { useNavigate } from "react-router-dom";
import "../App.css";
import NavbarUserProfile from "../components/NavbarUserProfile.jsx";

function UserPage() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData(username); //data fetches from api.js
        setUserData(data);
        setError(null);
      } catch (error) {
        setError("An error occurred while fetching user data");
        setUserData(null);
      }
    };
    fetchData();
  }, [username]);

  const navigateToRepos = () => {
    navigate(`/${username}/repos`); //Clicking the button will navigate to"ReposPage"
  };

  return (
    <>
      <NavbarUserProfile userData={userData} />
      <div className="user-profile-container">
        <div className="profile-info-container">
          {/* If there is an issue with data fetching, it displays an error; otherwise, it maps over the data. */}
          {error && <p>Error: {error}</p>}
          {userData && (
            <>
              <img
                src={userData.avatar_url}
                alt={userData.login}
                className="profile-picture"
              />
              <div className="profile-info">
                <h1>User Profile</h1>
                <p>
                  <span style={{ fontWeight: "bold", color: "green" }}>
                    Username:{" "}
                  </span>
                  {userData.login}
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "green" }}>
                    Location:{" "}
                  </span>
                  {userData.location}
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "green" }}>
                    Bio:
                  </span>{" "}
                  {userData.bio || "Not available"}
                </p>
                <p>
                  <span style={{ fontWeight: "bold", color: "green" }}>
                    Public Repositories:
                  </span>{" "}
                  {userData.public_repos}
                </p>
                <Button
                  onClick={navigateToRepos}
                  sx={{
                    bgcolor: "green",
                    color: "white",
                    "&:hover": {
                      bgcolor: "darkgreen",
                    },
                  }}
                >
                  {/* API limits to 30 repos max. Show available repos if <30, otherwise display up to 30. */}
                  Show{" "}
                  {userData.public_repos >= 30 ? "30" : userData.public_repos}{" "}
                  Repositories
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UserPage;
