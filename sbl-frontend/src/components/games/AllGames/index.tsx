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
} from "@mui/material";
import { Stack } from "@mui/system";
import { DummyImage } from "react-simple-placeholder-image";

const dummyStyle = {
  borderRadius: 50,
};

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
};

export default function AllGames() {
  return (
    <Box>
      <Tabs>
        <Tab label="All games" />
        <Tab label="Highlight of the week" />
      </Tabs>

      <Box
        sx={{
          marginLeft: "15%",
          marginTop: "5%",
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
