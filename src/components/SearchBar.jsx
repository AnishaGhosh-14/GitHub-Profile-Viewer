import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { fetchUserData } from '../api.js';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUsername(event.target.value);
    setError(null); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim()) {
      setError('Please enter a username.');
      return;
    }
    try {
      const data = await fetchUserData(username);
      if (!data) {
        setError(`No user found with username "${username}".`);
      } else {
        setError(null);
        navigate(`/${username}`);
      }
    } catch (error) {
      //setError(error.message);
      setError(`No user found with username "${username}".`);

    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '80%' }}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <TextField fullWidth label="GitHub Username" id="username" sx={{ mt: 4, width: '80%', border: '1px solid white' }} type="text" value={username} onChange={handleChange} />
        <Button type="submit" variant="contained" sx={{ mt: 2, bgcolor: 'green', marginLeft: '1rem', marginTop: '36px' }}>Search</Button>
      </div>
      <div>
        {error && <p style={{ color: 'black', fontSize: '1.2rem' }}>{error}</p>}
      </div>
    </form>
  );
}

export default SearchBar;
