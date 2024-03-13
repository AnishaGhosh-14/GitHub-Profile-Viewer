
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';


function CardRepos({ repos }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const repositoriesToShow = repos.slice(startIndex, endIndex);
    const totalPages = Math.ceil(repos.length / itemsPerPage);
  
    const handlePageChange = (event, page) => {
      setCurrentPage(page);
    };
  
    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
  {repositoriesToShow.map(repo => (
    <Card key={repo.id} variant="outlined" sx={{ width: 'calc(100% / 5)', boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)', textAlign: 'center', padding: '1rem' }}>
      <React.Fragment>
      <p><span style={{ fontWeight: 'bold' }}>Repo Name: </span>{repo.name}</p>
<p><span style={{ fontWeight: 'bold' }}>Description: </span>{repo.description}</p>
<p><span style={{ fontWeight: 'bold' }}>Created At: </span>{new Date(repo.created_at).toLocaleString()}</p>

      </React.Fragment>
    </Card>
  ))}
</Box>

<Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
  <Pagination
    count={totalPages}
    page={currentPage}
    onChange={handlePageChange}
    variant="outlined"
    shape="rounded"
    sx={{
      '& .MuiPaginationItem-root': {
        color: 'white',
      },
      '& .MuiPaginationItem-page.Mui-selected': {
        backgroundColor: 'white',
        color: 'black',
      },
    }}
  />
</Box>

      </>
    );
  }
  
  export default CardRepos;