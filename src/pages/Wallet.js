import React from "react";
import { Typography, Box, Grid, Card, CardContent, Button, Chip, TextField, MenuItem } from "@mui/material";
import WalletCards from "../components/WalletCards";

export default function Wallet() {
  const [swap, setSwap] = React.useState({
    from: "CRT",
    to: "CX",
    amount: ""
  });

  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Wallet
      </Typography>
      <WalletCards />
      <Box mt={4}>
        <Typography variant="h2" gutterBottom>
          Token Swap
        </Typography>
        <Card sx={{ maxWidth: 480 }}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <TextField
                  select
                  label="From"
                  value={swap.from}
                  onChange={e => setSwap(s => ({ ...s, from: e.target.value }))}
                  fullWidth
                >
                  <MenuItem value="CRT">Carrots</MenuItem>
                  <MenuItem value="CX">CoinX</MenuItem>
                  <MenuItem value="FETH">FakeETH</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h2">→</Typography>
              </Grid>
              <Grid item xs={5}>
                <TextField
                  select
                  label="To"
                  value={swap.to}
                  onChange={e => setSwap(s => ({ ...s, to: e.target.value }))}
                  fullWidth
                >
                  <MenuItem value="CRT">Carrots</MenuItem>
                  <MenuItem value="CX">CoinX</MenuItem>
                  <MenuItem value="FETH">FakeETH</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Amount"
                  type="number"
                  value={swap.amount}
                  onChange={e => setSwap(s => ({ ...s, amount: e.target.value }))}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth color="primary">
                  Preview Fake Swap
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box mt={4}>
        <Typography variant="h2" gutterBottom>
          Staking (Fake Preview)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h4">Stake CoinX</Typography>
                <Typography variant="body2">APY: 7.4%</Typography>
                <Chip label="Available" color="success" sx={{ mt: 1, mb: 2 }} />
                <Button variant="outlined" color="primary">
                  Fake Stake
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h4">Stake FakeETH</Typography>
                <Typography variant="body2">APY: 12.3%</Typography>
                <Chip label="Coming Soon" color="warning" sx={{ mt: 1, mb: 2 }} />
                <Button variant="outlined" color="primary" disabled>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}