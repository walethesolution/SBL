import * as React from "react";
import {
  Box,
  Typography,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createData } from "../../utils";

const Row: React.FC<{ player: ReturnType<typeof createData> }> = (props) => {
  const { player } = props;
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
          {player.firstName} {player.lastName}
        </TableCell>
        <TableCell align="right">{player.position}</TableCell>
        <TableCell align="right">{player.height}</TableCell>
        <TableCell align="right">{player.weight}</TableCell>
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
                  {player.history.map((historyRow) => (
                    <TableRow key={historyRow.dob}>
                      <TableCell component="th" scope="row">
                        {historyRow.dob}
                      </TableCell>
                      <TableCell>{historyRow.countryOfOrigin}</TableCell>
                      <TableCell component="th" scope="row">
                        {historyRow.nickName}
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
};

export default Row;
