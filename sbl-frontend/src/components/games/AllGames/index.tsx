import {
  AppBar,
  Box,
  Grid,
  Button,
  Divider,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
} from "@mui/material";
import { Stack } from "@mui/system";
import { DummyImage } from "react-simple-placeholder-image";

const dummyStyle = {
  borderRadius: 50,
};

export default function AllGames() {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}
      >
        <Tabs>
          <Tab value="0" label="All games" />
          <Tab value="1" label="Highlight of the week" />
        </Tabs>
      </AppBar>
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
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    marginTop: "2%",
                  }}
                >
                  <DummyImage
                    width={100}
                    height={100}
                    shape="image"
                    style={dummyStyle}
                  />
                  <CardContent>
                    <Typography>TEAM A</Typography>
                  </CardContent>
                  <DummyImage
                    width={100}
                    height={100}
                    shape="image"
                    style={dummyStyle}
                  />
                  <CardContent>
                    <Typography>TEAM B</Typography>
                  </CardContent>
                  <Divider variant="middle" color="grey" />
                  <Box>
                    <Button color="inherit">Highlight</Button>
                    <Button color="inherit">Box Score</Button>
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
