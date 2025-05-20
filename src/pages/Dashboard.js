import React from "react";
import { Box, Grid, Typography, Card, CardContent, Button, Chip } from "@mui/material";
import WalletCards from "../components/WalletCards";
import QuestPreview from "../components/QuestPreview";
import StatCard from "../components/StatCard";
import NotificationsPanel from "../components/NotificationsPanel";

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Welcome to CoinHarvest!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <WalletCards />
          <Box mt={3}>
            <Typography variant="h2" gutterBottom>
              Your Stats
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={3}>
                <StatCard title="Carrots Earned" value="9,420" icon="🥕" />
              </Grid>
              <Grid item xs={6} md={3}>
                <StatCard title="Quests Won" value="54" icon="🏆" />
              </Grid>
              <Grid item xs={6} md={3}>
                <StatCard title="FakeETH Staked" value="123" icon="🪙" />
              </Grid>
              <Grid item xs={6} md={3}>
                <StatCard title="Badges" value="7" icon="🎖️" />
              </Grid>
            </Grid>
          </Box>
          <Box mt={4}>
            <Typography variant="h2" gutterBottom>
              Hot Quests
            </Typography>
            <QuestPreview />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <NotificationsPanel />
          <Box mt={3}>
            <Card>
              <CardContent>
                <Typography variant="h4">Level</Typography>
                <Chip label="Sprout 🌱" color="secondary" sx={{ mt: 1 }} />
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Complete more quests and stake to reach "Carrot Farmer"!  
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2, width: "100%" }}>
                  See Levels
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}