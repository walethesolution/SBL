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

export default function AllGames() {
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
                    <Grid container sx={{ justifyContent: "space-evenly" }}>
                      <Grid item>
                        <CardContent> </CardContent>
                        <DummyImage
                          width={100}
                          height={100}
                          shape="image"
                          style={dummyStyle}
                        />
                        <CardContent>
                          <Typography>TEAM A</Typography>
                        </CardContent>
                      </Grid>
                      <Grid item>
                        <CardContent> </CardContent>
                        <DummyImage
                          width={100}
                          height={100}
                          shape="image"
                          style={dummyStyle}
                        />
                        <CardContent>
                          <Typography>TEAM B</Typography>
                        </CardContent>
                      </Grid>
                    </Grid>
                    <Divider variant="middle" color="grey" />
                    <Box sx={{ justifyContent: "center" }}>
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
    </Box>
  );
}
