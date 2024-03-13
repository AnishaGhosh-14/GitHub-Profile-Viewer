import React, { useState, useEffect, Children } from 'react';
import { useParams } from 'react-router-dom';
import CardRepos from '../components/CardRepos';

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
    <div style={{ background: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white',padding:'4rem'}}>
      <h2 style={{marginBottom:'2%'}}>Repositories for <span style={{background:'green',color:'white',padding:'5px',borderRadius:'3px'}}>{username}</span></h2>
      <CardRepos repos={repos}>
        {Children}
      </CardRepos>
    </div>
  );
};

export default ReposPage;
