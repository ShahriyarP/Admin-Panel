import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const HeaderTitle = ({ title, description }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" flexDirection="column" mt="25px" ml="20px">
      <Typography sx={{ color: colors.textColor[900], fontSize: "19px" }}>
        {title}
      </Typography>
      <Typography sx={{ color: colors.textColor[800], fontSize: "17px" }}>
        {description}
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
