import {
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Stack,
  Divider,
  Button,
} from "@mui/material";

const GamesSchedule: React.FC = () => {
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
                <CardContent> </CardContent>
                <Avatar sx={{ width: 100, height: 100 }}>A</Avatar>
                <CardContent>
                  <Typography>TEAM A</Typography>
                </CardContent>
              </Grid>
              <Grid item>
                <Stack>
                  <Typography variant="h4">10:00 AM ET</Typography>
                </Stack>
              </Grid>
              <Grid item>
                <CardContent> </CardContent>
                <Avatar sx={{ width: 100, height: 100 }}>B</Avatar>
                <CardContent>
                  <Typography>TEAM B</Typography>
                </CardContent>
              </Grid>
            </Grid>
            <Divider variant="middle" />
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Button color="inherit">Line-up</Button>
              <Divider orientation="vertical" flexItem />
              <Button color="inherit">Box Score</Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GamesSchedule;
