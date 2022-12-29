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
    <Box>
      <Tabs>
        <Tab value="0" label="All Players" />
      </Tabs>
      <Box>
        <Grid container>
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
            </List>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
