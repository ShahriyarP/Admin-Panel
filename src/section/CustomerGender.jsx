import React from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import Divider from "@mui/material/Divider";

const CustomerGender = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="flex"
      flexDirection="column"
      p="10px"
      boxSizing="content-box"
      width="350px"
      minWidth="300px"
      minHeight="110px"
      alignItems="cenetr"
      justifyContent="center"
      borderRadius="10px"
      sx={{ backgroundColor: colors.primary[400] }}
    >
      <Typography p="15px" variant="h3">
        Customer Gender
      </Typography>
      <Box
        display="flex"
        boxSizing="content-box"
        alignItems="cenetr"
        justifyContent="space-around"
      >
        <Box>
          <Box display="flex">
            <IconButton>
              <MaleIcon />
            </IconButton>
            <Box>
              <Typography>Male</Typography>
              <Typography>40%</Typography>
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box>
          <Box display="flex">
            <IconButton>
              <FemaleIcon />
            </IconButton>
            <Box>
              <Typography>Famale</Typography>
              <Typography>60%</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CustomerGender;
