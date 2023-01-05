import {
  Box,
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
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Footer from "../landing-page/Footer";
import Header from "../landing-page/Header";

export default function Stats() {
  const avatarStyle = {
    borderRadius: "100%",
  };

  return (
    <Box>
      <Header />
      <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
        <Tabs style={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
          <Tab value="0" label="All stats" />
          <Tab value="1" label="Points" />
          <Tab value="2" label="Assists" />
          <Tab value="3" label="Rebounds" />
          <Tab value="4" label="Blocks" />
        </Tabs>
        <Box
          sx={{
            marginLeft: "15%",
            marginTop: "2%",
            width: "70%",
          }}
        >
          <Tabs>
            <Tab value="0" label="Last week's leaders" />
            <Tab value="1" label="Season leaders" />
          </Tabs>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    Points
                  </Typography>
                </CardContent>
                <List>
                  <ListItem>
                    <Grid container>
                      <Grid item>
                        <ListItemAvatar>
                          <Avatar></Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Fuad" />
                      </Grid>
                    </Grid>
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Dariel" secondary="22" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="OG" secondary="24" />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    {" "}
                    Assists
                  </Typography>
                </CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary="Quam" secondary="11" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Steve" secondary="8" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Iman" secondary="7" />
                  </ListItem>
                </List>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" align="center">
                    {" "}
                    Rebounds
                  </Typography>
                </CardContent>
                <List>
                  <ListItem>
                    <ListItemText primary="Tianty" secondary="10" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Will" secondary="8" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Victor" secondary="6" />
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
                    <ListItemText primary="Sam" secondary="4" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Adolo" secondary="26" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="OG" secondary="24" />
                  </ListItem>
                </List>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
