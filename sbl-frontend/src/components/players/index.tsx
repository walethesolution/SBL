import * as React from "react";
import {
  Box,
  Paper,
  Divider,
  Typography,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Row from "../row";
import { createData } from "../../utils";

const rows = [
  createData("Olawale Ayejuyone", "SG", "6'0", "158 lbs"),
  createData("Alexander Odita", "SF", "6'2", "198 lbs"),
  createData("Dariel Soriano", "SG", "5'11", "187 lbs"),
  createData("Steve Liadi", "PG", "6'2", "170 lbs"),
  createData("Will Champion", "PF", "6'2", "228 lbs"),
];

export default function PlayerTable() {
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
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
