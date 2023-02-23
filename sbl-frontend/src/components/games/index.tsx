import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Tabs,
  Tab,
  Stack,
  Typography,
} from "@mui/material";
import TabPanel from "../tabPanel";
import { a11yProps } from "../../utils";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import GameDays from "./gamesData";
import GamesSchedule from "./gamesScheduled";
import NoGamesScheduled from "./noGamesSchedule";

const Games: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [dateValue, setDateValue] = React.useState(GameDays[0].date);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleDateChange = (newDateValue: any) => {
    setDateValue(newDateValue);
  };

  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ backgroundColor: "background.paper" }}
        >
          <Tab label="Upcoming games" {...a11yProps(0)} />
          <Tab label="All Games" {...a11yProps(1)} />
        </Tabs>
        <Box
          sx={{
            marginLeft: "13%",
            marginTop: "4%",
            width: "75%",
          }}
        >
          <Stack>
            <Typography variant="h6" textAlign="center" alignItems="center">
              Summer Season starts on June 25, 2023
            </Typography>
            <Typography variant="h6" textAlign="center" alignItems="center">
              Summer Season ends on September 17, 2023
            </Typography>
            <Card>
              <CardContent>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/DD/YYYY"
                    value={dateValue}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </CardContent>
            </Card>

            <TabPanel value={value} index={0}>
              {GameDays.some((gameDay) =>
                gameDay.date.isSame(dateValue, "day")
              ) ? (
                <GamesSchedule />
              ) : (
                <NoGamesScheduled />
              )}
            </TabPanel>
            <TabPanel value={value} index={1}>
              <NoGamesScheduled />
            </TabPanel>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Games;
