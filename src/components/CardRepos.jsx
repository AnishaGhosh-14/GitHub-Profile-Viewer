import React, { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

function CardRepos({ repos }) {
  // pagination manupulation
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          background: "rgba(255, 255, 255, 0.2)",
          padding: "1rem",
          borderRadius: "10px",
          width: "70%",
          overflowY: "auto",
        }}
      >
        {/* Mapping to display each repository */}
        {repositoriesToShow.map((repo) => (
          <Card
            key={repo.id}
            variant="outlined"
            sx={{
              padding: "1rem",
              border: "2px double rgba(255, 255, 255, 0.8)",
              cursor: "pointer",
            }}
          >
            <React.Fragment>
              <p style={{ margin: "0", fontWeight: "bold", color: "green" }}>
                {repo.name}
              </p>
              <p style={{ margin: "0" }}>{repo.description}</p>
              <p style={{ margin: "0" }}>
                Build at:{" "}
                {new Date(repo.created_at).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </React.Fragment>
          </Card>
        ))}
      </Box>
      {/* material ui pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "white",
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </Box>
    </>
  );
}

export default CardRepos;
