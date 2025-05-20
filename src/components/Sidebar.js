import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { text: "Dashboard", icon: <EmojiEventsIcon />, to: "/" },
  { text: "Wallet", icon: <AccountBalanceWalletIcon />, to: "/wallet" },
  { text: "Quests", icon: <SportsEsportsIcon />, to: "/quests" },
  { text: "Transactions", icon: <HistoryIcon />, to: "/transactions" },
  { text: "Profile", icon: <PersonIcon />, to: "/profile" },
  { text: "Notifications", icon: <NotificationsIcon />, to: "/notifications" }
];

const Sidebar = () => {
  const location = useLocation();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 220, boxSizing: "border-box" }
      }}
    >
      <Toolbar>
        <Box fontWeight={700} fontSize={20} color="primary.main" sx={{ ml: 1 }}>
          🥕 CoinHarvest
        </Box>
      </Toolbar>
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.to}
            selected={location.pathname === item.to}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;