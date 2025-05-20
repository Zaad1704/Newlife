import React from "react";
import { Card, CardContent, Typography, Grid, Box, Chip, IconButton } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const wallets = [
  {
    symbol: "CRT",
    name: "Carrots",
    balance: 9420,
    valueUSD: 94,
    icon: <EmojiEventsIcon color="secondary" />
  },
  {
    symbol: "CX",
    name: "CoinX",
    balance: 123.45,
    valueUSD: 246,
    icon: <CurrencyBitcoinIcon color="primary" />
  },
  {
    symbol: "FETH",
    name: "FakeETH",
    balance: 15.3,
    valueUSD: 27,
    icon: <MonetizationOnIcon color="success" />
  }
];

export default function WalletCards() {
  return (
    <Grid container spacing={2}>
      {wallets.map((w) => (
        <Grid item xs={12} md={4} key={w.symbol}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="h4">
                    {w.icon} {w.symbol}
                  </Typography>
                  <Typography variant="subtitle2">{w.name}</Typography>
                </Box>
                <Chip label="Wallet" color="primary" />
              </Box>
              <Typography variant="h3" mt={2}>
                {w.balance} {w.symbol}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ≈ ${w.valueUSD.toLocaleString()}
              </Typography>
              <Box mt={2} display="flex" gap={1}>
                <IconButton size="small" color="info">
                  <MonetizationOnIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}