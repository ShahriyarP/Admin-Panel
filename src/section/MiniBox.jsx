import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const MiniBox = ({ icon, header, price }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      boxSizing="content-box"
      mx="5px"
      flexDirection="column"
      p="15px"
      borderRadius="10px"
      sx={{ backgroundColor: colors.primary[400] }}
    >
      <IconButton
        size="medium"
        sx={{
          color: colors.indigo[900],
          backgroundColor: colors.badge[700],
          borderRadius: "7px",
          margin: "5px",
        }}
      >
        <Box>{icon}</Box>
      </IconButton>
      <Typography variant="h3" p="2px">
        {header}
      </Typography>
      <Typography variant="h5" p="2px">
        {price}
      </Typography>
    </Box>
  );
};

export default MiniBox;
