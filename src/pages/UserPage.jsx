import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { fetchUserData } from "../api.js";
import { useNavigate } from 'react-router-dom';
import '../App.css'
import NavbarUserProfile from "../components/NavbarUserProfile.jsx";

function UserPage() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUserData(username);
        setUserData(data);
        setError(null);
      } catch (error) {
        setError("An error occurred while fetching user data");
        setUserData(null);
      }
    };
    fetchData();
  }, [username]);
   
  const navigateToRepos=()=>{
    navigate(`/${username}/repos`);
  }

  return (
    <>
    <NavbarUserProfile userData={userData}/>
    <div className="user-profile-container">
      <div className="profile-info-container">
        {error && <p>Error: {error}</p>}
        {userData && (
          <>
            <img src={userData.avatar_url} alt={userData.login} className="profile-picture" />
            <div className="profile-info">
              <h1 style={{}}>User Profile</h1>
              <p>Username: {userData.login}</p>
              <p>Location: {userData.location}</p>
              <p>Bio: {userData.bio || "Not available"}</p>
              <p>Public Repositories: {userData.public_repos}</p>
              <Button onClick={navigateToRepos} sx={{ bgcolor: 'green', color: 'white' ,'&:hover': {
      bgcolor: 'darkgreen' 
    }}}>Show {userData.public_repos} Repositories</Button>

            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default UserPage;
