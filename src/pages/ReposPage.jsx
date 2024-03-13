import React, { useState, useEffect, Children } from "react";
import { useParams } from "react-router-dom";
import CardRepos from "../components/CardRepos";
import NavbarUserProfile from "../components/NavbarUserProfile";
import "../App.css";

const ReposPage = () => {
  const [repos, setRepos] = useState([]);
  const [userData, setUserData] = useState(null); // State to store user data
  const { username } = useParams();

  // This fetch is for the navbar to display the profile and name.
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data); // Set the user data
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [username]);
  // This fetch is for mapping over user repos.
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          console.error("Failed to fetch repositories");
        }
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div>
      <NavbarUserProfile userData={userData} />{" "}
      {/* Render the NavbarUserProfile component */}
      <div className="page-container">
        <h2 className="page-heading">
          Repositories for <span className="username-tag">{username}</span>
        </h2>
        <CardRepos repos={repos}>{Children}</CardRepos>
      </div>
    </div>
  );
};

export default ReposPage;
