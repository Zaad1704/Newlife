import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText, Badge } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const notifications = [
  {
    id: 1,
    title: "Congrats!",
    detail: "You earned 100 Carrots from 'Crypto Bloopers' quest.",
    unread: true
  },
  {
    id: 2,
    title: "Staking Reward Ready",
    detail: "Claim your 0.03 FakeETH from staking.",
    unread: false
  },
  {
    id: 3,
    title: "Level Up!",
    detail: "You are now Sprout 🌱. Keep going!",
    unread: true
  }
];

export default function NotificationsPanel() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          <Badge badgeContent={notifications.filter(n => n.unread).length} color="error">
            <NotificationsActiveIcon />
          </Badge>{" "}
          Notifications
        </Typography>
        <List dense>
          {notifications.map((note) => (
            <ListItem key={note.id} sx={note.unread ? { bgcolor: "#FFF8E1" } : {}}>
              <ListItemText
                primary={note.title}
                secondary={note.detail}
                primaryTypographyProps={{
                  fontWeight: note.unread ? 600 : 400
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}