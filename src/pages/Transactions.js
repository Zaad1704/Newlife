import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip
} from "@mui/material";

const txs = [
  {
    id: 1,
    date: "2025-04-18",
    type: "Deposit",
    desc: "Carrot Drop",
    amount: "+500 CRT",
    status: "Completed"
  },
  {
    id: 2,
    date: "2025-04-19",
    type: "Quest Reward",
    desc: "Crypto Bloopers",
    amount: "+100 CRT",
    status: "Completed"
  },
  {
    id: 3,
    date: "2025-04-22",
    type: "Swap",
    desc: "Carrots→CoinX",
    amount: "-200 CRT / +30 CX",
    status: "Completed"
  },
  {
    id: 4,
    date: "2025-04-25",
    type: "Stake",
    desc: "CoinX Staking",
    amount: "-20 CX",
    status: "Pending"
  },
  {
    id: 5,
    date: "2025-05-01",
    type: "Withdrawal",
    desc: "FakeETH Withdrawal",
    amount: "-1 FETH",
    status: "Completed"
  }
];

export default function Transactions() {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Transaction History
      </Typography>
      <Card>
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {txs.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>{tx.type}</TableCell>
                  <TableCell>{tx.desc}</TableCell>
                  <TableCell>{tx.amount}</TableCell>
                  <TableCell>
                    <Chip
                      label={tx.status}
                      color={tx.status === "Completed" ? "success" : "warning"}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </Box>
  );
}