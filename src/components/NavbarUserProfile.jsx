import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

function NavbarUserProfile({ userData }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1 rem', 
    backgroundColor: 'black', color: 'white',paddingRight:'2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', paddingTop:'2rem',paddingLeft:'2rem' }}>
        <GitHubIcon style={{ marginRight: '0.5rem' ,fontSize:'2rem'}} />
        <span>GitHub</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {userData && (
          <>
            <span style={{ marginRight: '0.5rem' }}>{userData.login}</span>
            <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'white', overflow: 'hidden' }}>
              <img src={userData.avatar_url} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavbarUserProfile;
