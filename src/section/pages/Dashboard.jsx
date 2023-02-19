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

const Dashboard = () => {
  return (
    <>
      <HeaderTitle title="Dashboard" description="welcome to dashboaded" />
      <Grid container spacing={2} xs={15}>
        <Grid item xs={1} sm={12} md={6} lg={3}>
          <MiniBox
            icon={<PaidIcon />}
            header="Total Revenue"
            price="$ 124,200"
          />
        </Grid>
        <Grid item xs={1} sm={12} md={6} lg={3}>
          <MiniBox
            icon={<LocalGroceryStoreIcon />}
            header="Total Order"
            price="4,655"
          />
        </Grid>
        <Grid item xs={1} sm={12} md={6} lg={3}>
          <MiniBox
            icon={<GroupsIcon />}
            header="Total Customer"
            price="1,985"
          />
        </Grid>
        <Grid item xs={1} sm={12} md={6} lg={3}>
          <MiniBox
            icon={<PaymentsIcon />}
            header="Total Expenses"
            price="$ 18,650"
          />
        </Grid>
      </Grid>
      <Box width="30vw" height="100px">
        <BarChart />
      </Box>
    </>
  );
};

export default Dashboard;
