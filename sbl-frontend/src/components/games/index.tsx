import * as React from "react";
import {
  Box,
  Grid,
  Button,
  Divider,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Stack,
  Avatar,
} from "@mui/material";
import TabPanel from "../tabPanel";
import { a11yProps } from "../../utils";

export default function Games() {
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
          <Tab label="All games" {...a11yProps(0)} />
          <Tab label="Upcoming games" {...a11yProps(1)} />
        </Tabs>
        <Box
          sx={{
            marginLeft: "13%",
            marginTop: "4%",
            width: "75%",
          }}
        >
          <Stack>
            <Card>
              <CardContent>Month, Year</CardContent>
            </Card>
            <TabPanel value={value} index={0}>
              <Box>
                <Grid>
                  <Grid item>
                    <Card
                      sx={{
                        marginTop: "2%",
                      }}
                    >
                      <Grid
                        container
                        sx={{
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <Grid item>
                          <Grid
                            container
                            spacing={2}
                            sx={{ alignItems: "center" }}
                          >
                            <Grid item>
                              <CardContent> </CardContent>
                              <Avatar sx={{ width: 100, height: 100 }}>
                                A
                              </Avatar>
                              <CardContent>
                                <Typography>TEAM A</Typography>
                              </CardContent>
                            </Grid>
                            <Grid item>
                              <CardContent>
                                <Typography variant="h2">7</Typography>
                              </CardContent>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography>FINAL</Typography>
                        </Grid>
                        <Grid item>
                          <Grid
                            container
                            spacing={2}
                            sx={{ alignItems: "center" }}
                          >
                            <Grid item>
                              <CardContent>
                                <Typography variant="h2">5</Typography>
                              </CardContent>
                            </Grid>
                            <Grid item>
                              <CardContent> </CardContent>
                              <Avatar sx={{ width: 100, height: 100 }}>
                                B
                              </Avatar>
                              <CardContent>
                                <Typography>TEAM B</Typography>
                              </CardContent>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Divider variant="middle" />
                      <Box
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                      >
                        <Button color="inherit">Highlight</Button>
                        <Divider orientation="vertical" flexItem />
                        <Button color="inherit">Box Score</Button>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box>
                <Grid>
                  <Grid item>
                    <Card
                      sx={{
                        marginTop: "2%",
                      }}
                    >
                      <Grid
                        container
                        sx={{
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <Grid item>
                          <CardContent> </CardContent>
                          <Avatar sx={{ width: 100, height: 100 }}>C</Avatar>
                          <CardContent>
                            <Typography>TEAM C</Typography>
                          </CardContent>
                        </Grid>
                        <Grid item>
                          <Stack>
                            <Typography variant="h4">10:00 AM ET</Typography>
                          </Stack>
                        </Grid>
                        <Grid item>
                          <CardContent> </CardContent>
                          <Avatar sx={{ width: 100, height: 100 }}>D</Avatar>
                          <CardContent>
                            <Typography>TEAM D</Typography>
                          </CardContent>
                        </Grid>
                      </Grid>
                      <Divider variant="middle" />
                      <Box
                        sx={{ display: "flex", justifyContent: "space-evenly" }}
                      >
                        <Button color="inherit">Line-up</Button>
                        <Divider orientation="vertical" flexItem />
                        <Button color="inherit">Box Score</Button>
                      </Box>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
