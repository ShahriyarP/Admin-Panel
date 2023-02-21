import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../src/theme";
import SendIcon from "@mui/icons-material/Send";

const PopularOrder = ({ title, date }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      width="350px"
      my="5px"
      boxSizing="content-box"
      borderRadius="10px"
      minWidth="300px"
      sx={{ backgroundColor: colors.primary[400], padding: "10px" }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography>{title}</Typography>
        <Typography>{date}</Typography>
        <Button
          sx={{
            backgroundColor: colors.indigo[300],
            color: colors.textColor[900],
          }}
          endIcon={<SendIcon />}
        >
          Detail
        </Button>
      </Box>
    </Box>
  );
};

export default PopularOrder;
