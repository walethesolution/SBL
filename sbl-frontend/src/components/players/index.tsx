import {
  Box,
  Tabs,
  Tab,
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
  Avatar,
} from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Players() {
  return (
    <Box>
      <Box>
        <Tabs sx={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
          <Tab value="0" label="All Players" />
        </Tabs>
        <Box
          sx={{
            marginLeft: "13%",
            marginTop: "4%",
            width: "75%",
            backgroundColor: "white",
          }}
        >
          <Box>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="h5">LEAGUE ROSTER</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">filter</Typography>
              </Grid>
            </Grid>
          </Box>
          {/* <Divider /> */}
          <Box sx={{ marginTop: "4%" }}>
            <Stack>
              <Tabs>
                <Tab value="0" label="Player" />
                <Tab value="1" label="POS" />
                <Tab value="2" label="HT" />
                <Tab value="3" label="WT" />
              </Tabs>
              {/* <Divider /> */}
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item>
                      <Avatar>T</Avatar>
                      <Typography>Tunde</Typography>
                    </Grid>
                    <Grid item>SF</Grid>
                    <Grid item>6'2</Grid>
                    <Grid item>162lbs</Grid>
                  </Grid>
                </ListItem>
                {/* <Divider /> */}
                <ListItem>
                  <Grid container>
                    <Grid item>
                      <Avatar>D</Avatar>
                      <Typography>Dariel</Typography>
                    </Grid>
                    <Grid item>SF</Grid>
                    <Grid item>6'0</Grid>
                    <Grid item>182lbs</Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item>
                      <Avatar>S</Avatar>
                      <Typography>Steve</Typography>
                    </Grid>
                    <Grid item>SG</Grid>
                    <Grid item>5'11</Grid>
                    <Grid item>168lbs</Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item>
                      <Avatar>I</Avatar>
                      <Typography>Iman</Typography>
                    </Grid>
                    <Grid item>PG</Grid>
                    <Grid item>5'10</Grid>
                    <Grid item>157lbs</Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item>
                      <Avatar>Q</Avatar>
                      <Typography>Quam</Typography>
                    </Grid>
                    <Grid item>SF</Grid>
                    <Grid item>6'1</Grid>
                    <Grid item>192lbs</Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item>
                      <Avatar>O</Avatar>
                      <Typography>OG</Typography>
                    </Grid>
                    <Grid item>SF</Grid>
                    <Grid item>6'2</Grid>
                    <Grid item>187lbs</Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item>
                      <Avatar>W</Avatar>
                      <Typography>Will</Typography>
                    </Grid>
                    <Grid item>PF</Grid>
                    <Grid item>6'3</Grid>
                    <Grid item>210lbs</Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item>
                      <Avatar>S</Avatar>
                      <Typography>Sam</Typography>
                    </Grid>
                    <Grid item>SF</Grid>
                    <Grid item>6'3</Grid>
                    <Grid item>160lbs</Grid>
                  </Grid>
                </ListItem>
              </List>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
