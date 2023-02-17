import * as React from "react";
import {
  Box,
  Paper,
  Divider,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Row from "../row";
import { playersData } from "./playersData";

const Players: React.FC = () => {
  return (
    <Box
      sx={{
        marginLeft: "13%",
        marginTop: "4%",
        width: "75%",
      }}
    >
      <Box m={2}>
        <Typography variant="h4" style={{ textAlign: "center" }}>
          LEAGUE ROSTER
        </Typography>
        <Divider />
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Player</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Height&nbsp;(lbs)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playersData.map((player) => (
              <Row key={player.id} player={player} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Players;
