import React from "react";
import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import HeaderTitle from "../HeaderTitle";

const column = [
  { field: "id", headerName: "User Id", flex: 1 },
  { field: "name", headerName: "Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
  { field: "username", headerName: "UserName", flex: 1 },
  { field: "website", headerName: "Website", flex: 1 },
];

const Team = () => {
  const [users, setUsers] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  /* jsonplaceholder get user for table */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  return (
    <>
      <HeaderTitle title="Team" description="Your team here for connection" />
      <Box
        height="77vh"
        m="10px 10px 0px 10px"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "none",
            backgroundColor: colors.indigo[300],
          },
          "& .name-column--cell": {
            color: colors.indigo[400],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.indigo[200],
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={users}
          columns={column}
          loading={!users.length}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </>
  );
};

export default Team;
