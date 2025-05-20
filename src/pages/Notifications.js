import React from "react";
import { Typography, Box } from "@mui/material";
import NotificationsPanel from "../components/NotificationsPanel";

export default function Notifications() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Notifications
      </Typography>
      <NotificationsPanel />
    </Box>
  );
}