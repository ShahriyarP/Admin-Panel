import React from "react";
import { Box, Typography } from "@mui/material";
import HeaderTitle from "../HeaderTitle";
import MiniBox from "../MiniBox";
import Grid from "@mui/material/Grid";
import BarChart from "../../section/charts/BarChart";

import PaidIcon from "@mui/icons-material/Paid";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentsIcon from "@mui/icons-material/Payments";
import CustomerGender from "../CustomerGender";
import LineChart from "../charts/LineChart";
import PopularOrder from "../PopularOrder";

const Dashboard = () => {
  return (
    <Box
      sx={{
        "& .css-xaqxpi": { width: "50vw", height: "60vh" },
        marginTop: "10px",
        "& .css-12d6ry7-MuiGrid-root": {
          display: "flex",
          alignItems: "cenetr",
          justifyContent: "center",
        },
      }}
    >
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={1} sm={12} md={6} lg={2}>
          <MiniBox
            icon={<PaidIcon />}
            header="Total Revenue"
            price="$ 124,200"
          />
        </Grid>
        <Grid item xs={1} sm={12} md={6} lg={2}>
          <MiniBox
            icon={<LocalGroceryStoreIcon />}
            header="Total Order"
            price="4,655"
          />
        </Grid>
        <Grid item xs={1} sm={12} md={6} lg={2}>
          <MiniBox
            icon={<GroupsIcon />}
            header="Total Customer"
            price="1,985"
          />
        </Grid>
        <Grid item xs={1} sm={12} md={6} lg={2}>
          <MiniBox
            icon={<PaymentsIcon />}
            header="Total Expenses"
            price="$ 18,650"
          />
        </Grid>
        <Grid item xs={2} sm={12} md={6} lg={4}>
          <CustomerGender />
        </Grid>
        <Grid item lg={8} container height="100px">
          <LineChart />
        </Grid>
        <Grid item xs={2} sm={12} md={6} lg={4}>
          <Box marginY="15px">
            <Typography variant="h5" py="5px">
              Popular Order
            </Typography>
            <PopularOrder title="Product X" date="2023-1-16" />
            <PopularOrder title="Product Y" date="2022-11-17" />
            <PopularOrder title="Product P" date="2023-3-10" />
            <PopularOrder title="Product V" date="2023-5-19" />
            <PopularOrder title="Product F" date="2023-5-23" />
            <PopularOrder title="Product O" date="2023-7-11" />
            <PopularOrder title="Product A" date="2023-8-1" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
