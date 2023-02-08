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
import { createData } from "../../utils";

export default function Row(props: { row: ReturnType<typeof createData> }) {
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
                    <TableCell>Nickname</TableCell>
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
                      <TableCell component="th" scope="row">
                        {historyRow.nickname}
                      </TableCell>
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
