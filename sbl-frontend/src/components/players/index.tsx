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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  name: string,
  position: string,
  height: string,
  weight: string
) {
  return {
    name,
    position,
    height,
    weight,
    history: [
      {
        birthdate: "11-07-1997",
        countryOfOrigin: "Nigeria",
        experience: 7,
        nickname: "The Solution",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.position}</TableCell>
        <TableCell align="right">{row.height}</TableCell>
        <TableCell align="right">{row.weight}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="personalInfo">
                <TableHead>
                  <TableRow>
                    <TableCell>Birth Date</TableCell>
                    <TableCell>Country Of Origin</TableCell>
                    <TableCell align="right">Experience</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.birthdate}>
                      <TableCell component="th" scope="row">
                        {historyRow.birthdate}
                      </TableCell>
                      <TableCell>{historyRow.countryOfOrigin}</TableCell>
                      <TableCell align="right">
                        {historyRow.experience}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

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
