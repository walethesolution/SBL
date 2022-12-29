import {
  Box,
  Tabs,
  Tab,
  Grid,
  Stack,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { DummyImage } from "react-simple-placeholder-image";

const dummyStyle = {
  borderRadius: 50,
};

export default function Players() {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
      <Tabs sx={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
        <Tab value="0" label="All Players" />
      </Tabs>
      <Box
        sx={{
          marginLeft: "15%",
          marginTop: "2%",
          width: "70%",
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">LEAGUE ROSTER</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">filter</Typography>
          </Grid>
        </Grid>
        <Divider />
        <Box>
          <Stack>
            <Tabs>
              <Tab value="0" label="Player" />
              <Tab value="1" label="POS" />
              <Tab value="2" label="HT" />
              <Tab value="3" label="WT" />
            </Tabs>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item>
                    <DummyImage
                      width={50}
                      height={50}
                      shape="image"
                      style={dummyStyle}
                    />
                    <Typography>Tunde</Typography>
                  </Grid>
                  <Grid item>SF</Grid>
                  <Grid item>6'2</Grid>
                  <Grid item>162lbs</Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item>
                    <DummyImage
                      width={50}
                      height={50}
                      shape="image"
                      style={dummyStyle}
                    />
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
                    <DummyImage
                      width={50}
                      height={50}
                      shape="image"
                      style={dummyStyle}
                    />
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
                    <DummyImage
                      width={50}
                      height={50}
                      shape="image"
                      style={dummyStyle}
                    />
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
                    <DummyImage
                      width={50}
                      height={50}
                      shape="image"
                      style={dummyStyle}
                    />
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
                    <DummyImage
                      width={50}
                      height={50}
                      shape="image"
                      style={dummyStyle}
                    />
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
                    <DummyImage
                      width={50}
                      height={50}
                      shape="image"
                      style={dummyStyle}
                    />
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
                    <DummyImage
                      width={50}
                      height={50}
                      shape="image"
                      style={dummyStyle}
                    />
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
  );
}
