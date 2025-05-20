import React from "react";
import { Card, CardContent, Typography, Button, Grid, Chip } from "@mui/material";
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
    cta: "Watch"
  },
  {
    id: 2,
    type: "survey",
    title: "Survey: What's Your Favorite Veggie?",
    reward: "50 CoinX",
    icon: <QuizIcon color="primary" />,
    cta: "Take Survey"
  },
  {
    id: 3,
    type: "game",
    title: "Game: Carrot Catcher",
    reward: "1 FakeETH",
    icon: <SportsEsportsIcon color="success" />,
    cta: "Play"
  }
];

export default function QuestPreview() {
  return (
    <Grid container spacing={2}>
      {quests.map((task) => (
        <Grid item xs={12} md={4} key={task.id}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {task.icon} {task.title}
              </Typography>
              <Chip label={task.reward} color="success" sx={{ mb: 2 }} />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Try this quest to earn bonus rewards!
              </Typography>
              <Button variant="contained" fullWidth>
                {task.cta}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}