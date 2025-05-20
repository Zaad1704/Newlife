import React from "react";
import { Typography, Box, Card, CardContent, Avatar, Grid, Chip, Button } from "@mui/material";

export default function Profile() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Your Profile
      </Typography>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar sx={{ bgcolor: "primary.main", width: 72, height: 72 }}>C</Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="h3">SandyTheCarrot</Typography>
              <Typography variant="body2" color="text.secondary">
                UID: 100000420
              </Typography>
              <Chip label="Verified Farmer" color="success" sx={{ mt: 1 }} />
            </Grid>
          </Grid>
          <Box mt={3}>
            <Typography variant="h4">Referral Code</Typography>
            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <Typography variant="h3" color="primary">COINHARVEST</Typography>
              <Button variant="outlined" size="small">
                Copy
              </Button>
            </Box>
          </Box>
          <Box mt={3}>
            <Typography variant="h4">Level Progress</Typography>
            <Box mt={1}>
              <Chip label="Sprout 🌱" color="secondary" sx={{ mr: 1 }} />
              <Chip label="Carrot Farmer (Locked)" color="default" />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}