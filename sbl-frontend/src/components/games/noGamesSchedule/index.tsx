import {
  Box,
  Grid,
  Card,
  Typography,
  CardContent,
  Avatar,
  Divider,
  Button,
} from "@mui/material";

const NoGamesScheduled: React.FC = () => {
  return (
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
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
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
                <Grid container spacing={2} sx={{ alignItems: "center" }}>
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
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button color="inherit">Highlight</Button>
              <Divider orientation="vertical" flexItem />
              <Button color="inherit">Box Score</Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NoGamesScheduled;
