import {
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Stats() {
  return (
    <Box>
      <Box>
        <Tabs style={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
          <Tab value="0" label="All stats" />
          <Tab value="1" label="Points" />
          <Tab value="2" label="Assists" />
          <Tab value="3" label="Rebounds" />
          <Tab value="4" label="Blocks" />
        </Tabs>
        <Box
          sx={{
            marginLeft: "13%",
            marginTop: "4%",
            width: "75%",
            backgroundColor: "white",
          }}
        >
          <Grid container spacing={4} flexDirection="column">
            <Grid item>
              <Grid
                container
                sx={{
                  borderRadius: "5px",
                  backgroundColor: "black",
                }}
                justifyContent="center"
              >
                <Grid item>
                  <Button>
                    <Typography>Current week's leaders</Typography>
                  </Button>
                </Grid>
                <Grid item>
                  <Button>
                    <Typography>Season leaders</Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" align="center">
                        Points
                      </Typography>
                    </CardContent>
                    <List>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Fuad" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">30</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Dariel" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">22</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="OG" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h6">20</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" align="center">
                        Assists
                      </Typography>
                    </CardContent>
                    <List>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Quam" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">11</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Steve" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">8</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Iman" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">7</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" align="center">
                        Rebounds
                      </Typography>
                    </CardContent>
                    <List>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Tianty" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">10</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Will" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">8</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Victor" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">6</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="h5" align="center">
                        Blocks
                      </Typography>
                    </CardContent>
                    <List>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Sam" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">4</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="Adolo" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">4</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid
                          container
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Grid item>
                            <ListItemAvatar>
                              <Avatar />
                            </ListItemAvatar>
                            <ListItemText primary="OG" />
                          </Grid>
                          <Grid item>
                            <Typography variant="h5">3</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                    </List>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
