import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { TreeMapData as data } from "../../data/chartData";
import { ResponsiveTreeMap } from "@nivo/treemap";
const TreeMap = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      width="80vw"
      height="80vh"
      display="flex"
      margin="0 auto"
      alignItems="center"
      justifyContent="center"
      sx={{ "& Box>text": { fill: "white" } }}
    >
      <ResponsiveTreeMap
        data={data}
        identity="name"
        value="loc"
        valueFormat=".02s"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        labelSkipSize={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", "3"]],
        }}
        parentLabelPosition="left"
        parentLabelTextColor="black"
        colors={{ scheme: "set3" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.1]],
        }}
      />
    </Box>
  );
};

export default TreeMap;
