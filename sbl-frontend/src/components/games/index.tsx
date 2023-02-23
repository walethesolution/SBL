import * as React from "react";
import { Box, Card, CardContent, Tabs, Tab, Stack } from "@mui/material";
import TabPanel from "../tabPanel";
import { a11yProps } from "../../utils";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import GameDays from "./gamesData";
import GamesSchedule from "./gamesScheduled";
import NoGamesScheduled from "./noGamesSchedule";

/**
 * All game days are on sundays, so we need to only show games on Sunday.
 * There are two possible ways to display the games on sundays:
 * First, get all 4 months of summer games and loop through the months to get sundays
 * Second, Display all the days in the calender and if the day is not a sunday, return a game not available on this day message.
 *
 */

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
          {/* conditional rendering for components on date */}
          {}
          <Stack>
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
              <GamesSchedule />
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
