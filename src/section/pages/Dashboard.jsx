import React from "react";
import { Box } from "@mui/material";
import HeaderTitle from "../HeaderTitle";
import MiniBox from "../MiniBox";

import PaidIcon from "@mui/icons-material/Paid";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentsIcon from "@mui/icons-material/Payments";
import CustomerGender from "../CustomerGender";

const Dashboard = () => {
  return (
    <Box>
      <HeaderTitle title="Dashboard" description="welcome to dashboaded" />
      <Box display="grid" gridTemplateColumns="repeat(6, 1fr)">
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MiniBox
            icon={<PaidIcon />}
            header="Total Revenue"
            price="$ 124,200"
          />
        </Box>
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MiniBox
            icon={<LocalGroceryStoreIcon />}
            header="Total Order"
            price="4,655"
          />
        </Box>
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MiniBox
            icon={<GroupsIcon />}
            header="Total Customer"
            price="1,985"
          />
        </Box>
        <Box
          gridColumn="span 1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MiniBox
            icon={<PaymentsIcon />}
            header="Total Expenses"
            price="$ 18,650"
          />
        </Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CustomerGender />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
