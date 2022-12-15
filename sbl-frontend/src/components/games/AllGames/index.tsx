import {
  Box,
  Grid,
  Button,
  Divider,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Footer from "../../landing-page/Footer";
import Header from "../../landing-page/Header";

export default function AllGames() {
  return (
    <Box>
      <Header />
      <Grid>
        <Grid item>
          <Button>All games</Button>
        </Grid>
        <Grid item>
          <Button>Highlight of the week</Button>
        </Grid>
      </Grid>
      <Box>
        <Stack>
          <Box>
            <Typography>Month, Year</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid>
              <Grid item>
                <Card>
                  <Grid>
                    <Grid item>
                      <CardMedia
                        component="img"
                        sx={{ width: 151, borderRadius: 50 }}
                        image=""
                        alt="Team Image"
                      />
                      <CardContent>
                        <Typography>TEAM A</Typography>
                      </CardContent>
                    </Grid>
                    <Grid item>
                      <CardContent>
                        <Typography>7</Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
              <Grid item>
                <Typography>FINAL</Typography>
              </Grid>
              <Grid item>
                <Card>
                  <Grid>
                    <Grid item>
                      <CardContent>
                        <Typography>5</Typography>
                      </CardContent>
                    </Grid>
                    <Grid item>
                      <CardMedia
                        component="img"
                        sx={{ width: 151, borderRadius: 50 }}
                        image=""
                        alt="Team B"
                      />
                      <CardContent>
                        <Typography>TEAM B</Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
            <Divider variant="middle" color="grey" />
            <Button>Highlight</Button>
            <Button>Box Score</Button>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
