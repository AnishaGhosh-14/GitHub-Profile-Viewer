import React, { useState, useEffect, Children } from 'react';
import { useParams } from 'react-router-dom';
import CardRepos from '../components/CardRepos';
import '../App.css'
const ReposPage = () => {
  const [repos, setRepos] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        } else {
          console.error('Failed to fetch repositories');
        }
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div className="page-container">
    <h2 className="page-heading">Repositories for <span className="username-tag">{username}</span></h2>
    <CardRepos repos={repos}>
      {Children}
    </CardRepos>
  </div>
  );
};

export default ReposPage;
