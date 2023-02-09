import React from "react";
import {
  IconButton,
  Box,
  useTheme,
  InputBase,
  Typography,
} from "@mui/material";
import { ColorModeContext, tokens } from "../theme";
import { useContext } from "react";
import Avatar from "@mui/material/Avatar";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import TelegramIcon from "@mui/icons-material/Telegram";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        "& .css-156xqnd-MuiInputBase-input": { fontSize: "16px" },
        "& .css-yz9k0d-MuiInputBase-input": { fontSize: "16px" },
        paddingX: "10px",
      }}
    >
      {/* hi section */}
      <Box>
        <Typography color={colors.textColor[900]} variant="h3">
          Hi Shahriar!👋
        </Typography>
        <Typography variant="h6" color={colors.textColor[600]}>
          Welcome back. nice to see you again.
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        {/* inpute Box */}
        <Box
          width="90%"
          m={1}
          p={1}
          borderRadius="5px"
          display="flex"
          alignItems="center"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <SearchIcon sx={{ marginRight: "5px" }} />
          <InputBase size="20px" placeholder="search here..." />
        </Box>
        {/* icons */}
        <IconButton>
          <TelegramIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <ModeNightIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
        {/* divider if you want */}
        {/* <Divider orientation="vertical" flexItem sx={{ margin: "5px" }} /> */}
        <Avatar
          sx={{ marginLeft: "10px" }}
          onClick={handleClick}
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* menu item */}
        <MenuItem onClick={handleClose}>
          <Avatar src="https://material-ui.com/static/images/avatar/6.jpg" />{" "}
          Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
