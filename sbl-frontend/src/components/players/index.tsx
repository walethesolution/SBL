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
import { createData } from "../../utils";
import dataB from "../../data/db.json";

const players = dataB.players;

// const rows = [
//   createData(1, "Olawale Ayejuyone", "SG", "6'0", "158 lbs"),
//   createData(2, "Alexander Odita", "SF", "6'2", "198 lbs"),
//   createData(3, "Dariel Soriano", "SG", "5'11", "187 lbs"),
//   createData(4, "Steve Liadi", "PG", "6'2", "170 lbs"),
//   createData(5, "Will Champion", "PF", "6'2", "228 lbs"),
// ];

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
            {/* {players.map((player) => (
              // <Row key={player.firstName} player={player} />
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Players;
