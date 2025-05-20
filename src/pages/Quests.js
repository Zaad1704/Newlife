import React from "react";
import { Typography, Box, Grid, Card, CardContent, Button, Chip } from "@mui/material";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import QuizIcon from "@mui/icons-material/Quiz";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

const quests = [
  {
    id: 1,
    type: "video",
    title: "Watch: Crypto Bloopers",
    reward: "100 Carrots",
    icon: <OndemandVideoIcon color="secondary" />,
    cta: "Watch",
    status: "available"
  },
  {
    id: 2,
    type: "survey",
    title: "Survey: What's Your Favorite Veggie?",
    reward: "50 CoinX",
    icon: <QuizIcon color="primary" />,
    cta: "Take Survey",
    status: "in-progress"
  },
  {
    id: 3,
    type: "game",
    title: "Game: Carrot Catcher",
    reward: "1 FakeETH",
    icon: <SportsEsportsIcon color="success" />,
    cta: "Play",
    status: "available"
  },
  {
    id: 4,
    type: "boost",
    title: "Boost: Refer a Friend!",
    reward: "500 Carrots",
    icon: <OndemandVideoIcon color="warning" />,
    cta: "Get Link",
    status: "completed"
  }
];

export default function Quests() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Quests & Earning
      </Typography>
      <Grid container spacing={2}>
        {quests.map((task) => (
          <Grid item xs={12} md={4} key={task.id}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {task.icon} {task.title}
                </Typography>
                <Chip
                  label={task.reward}
                  color={task.status === "completed" ? "secondary" : "success"}
                  sx={{ mb: 1 }}
                />
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {task.status === "completed"
                    ? "Reward claimed."
                    : "Complete this quest and earn rewards!"}
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  disabled={task.status === "completed"}
                  color={task.status === "in-progress" ? "secondary" : "primary"}
                >
                  {task.status === "completed" ? "Claimed" : task.cta}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}