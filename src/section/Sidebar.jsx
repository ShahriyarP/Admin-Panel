import React from "react";
import { useState } from "react";
import { Menu, ProSidebar, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import GroupIcon from "@mui/icons-material/Group";
import TableViewIcon from "@mui/icons-material/TableView";
import QuizIcon from "@mui/icons-material/Quiz";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import PieChartIcon from "@mui/icons-material/PieChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import LineChartIcon from "@mui/icons-material/Timeline";

/* create custom item for sidebar */
const Item = ({ title, link, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={{ color: colors.textColor[300] }}
    >
      <Typography>{title}</Typography>
      <Link to={link}></Link>
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "& .pro-item-content": {
          color: colors.textColor[700],
        },
        "& .pro-item-content:hover": {
          color: "#6870fa !important",
        },
        "& .pro-icon": {
          color: colors.textColor[700],
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 10px 0",
              color: colors.textColor[400],
            }}
          >
            {!isCollapsed && (
              <Box display="flex">
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
            {!isCollapsed && (
              <Box
                marginY="10px"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <img src="../../img/logo.png" width={"40%"} height={"50px"} />
                <Typography
                  color={colors.textColor[800]}
                  marginX="7px"
                  fontSize="28px"
                  fontFamily={"Caveat"}
                >
                  SH-Company
                </Typography>
              </Box>
            )}
          </MenuItem>
          {/* custom Item */}
          <Box paddingLeft={isCollapsed ? undefined : "20px"}>
            <Item
              title="Dashboard"
              link="./"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.textColor[500]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed ? "Manage Team" : undefined}
            </Typography>
            <Item
              title="Contact"
              link="./contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Team"
              link="./team"
              icon={<GroupIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="User Form"
              link="./form"
              icon={<TableViewIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.textColor[500]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed ? "Charts" : undefined}
            </Typography>
            <Item
              title="Bar Chart"
              link="./barchart"
              icon={<BarChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              link="./piechart"
              icon={<PieChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              link="./linechart"
              icon={<LineChartIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.textColor[500]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed ? "Other" : undefined}
            </Typography>
            <Item
              title="FAQ"
              link="./faq"
              icon={<QuizIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Setting"
              link="./setting"
              icon={<SettingsSuggestIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
