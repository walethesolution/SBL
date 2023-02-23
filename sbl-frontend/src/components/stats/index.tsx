import * as React from "react";
import { Box, Button, Grid, Tabs, Tab } from "@mui/material";
import Typography from "@mui/material/Typography";
import TabPanel from "../tabPanel";
import { a11yProps } from "../../utils";
import Points from "./points";
import Assists from "./assists";
import Rebounds from "./rebounds";
import Blocks from "./blocks";

const Stats: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          style={{ backgroundColor: "background.paper" }}
        >
          <Tab label="All stats" {...a11yProps(0)} />
          <Tab label="Points" {...a11yProps(1)} />
          <Tab label="Assists" {...a11yProps(2)} />
          <Tab label="Rebounds" {...a11yProps(3)} />
          <Tab label="Blocks" {...a11yProps(4)} />
        </Tabs>
        <Box
          sx={{
            marginLeft: "13%",
            marginTop: "4%",
            width: "75%",
          }}
        >
          <TabPanel value={value} index={0}>
            <Grid container spacing={2} flexDirection="column">
              <Grid item>
                <Grid
                  container
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "4px",
                  }}
                >
                  <Grid
                    item
                    xs={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "black",
                    }}
                  >
                    <Button>
                      <Typography color="white">
                        Current week's leaders
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Button>
                      <Typography color="black">Season leaders</Typography>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={6}>
                    <Points />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Assists />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Rebounds />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Blocks />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Points />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Assists />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Rebounds />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Blocks />
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
};

export default Stats;
