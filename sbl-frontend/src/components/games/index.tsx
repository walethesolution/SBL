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
  AppBar,
} from "@mui/material";
import GameSubBar from "./gameSubNav";

export default function Games() {
  return (
    <Box>
      <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
        <Tabs style={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
          <Tab value="0" label="All games" />
          <Tab value="1" label="Highlight of the week" />
        </Tabs>
        <Box
          sx={{
            marginLeft: "15%",
            marginTop: "2%",
            width: "70%",
          }}
        >
          <Stack>
            <Card>
              <CardContent>Month, Year</CardContent>
            </Card>
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
                            <Avatar sx={{ width: 100, height: 100 }}>A</Avatar>
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
                            <Avatar sx={{ width: 100, height: 100 }}>B</Avatar>
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
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
