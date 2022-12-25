import {
  Box,
  Grid,
  Typography,
  Card,
  CardHeader,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";

export default function Stats() {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
      <Tabs style={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
        <Tab value="0" label="All stats" />
        <Tab value="1" label="Points" />
        <Tab value="2" label="Assists" />
        <Tab value="3" label="Rebounds" />
        <Tab value="4" label="Blocks" />
      </Tabs>
      <Box>
        <Grid container>
          <Grid item>
            <Typography>Last week's leaders</Typography>
          </Grid>
          <Grid item>
            <Typography> Season leaders</Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item>
            <Card>
              <CardHeader>Points</CardHeader>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader>Assists</CardHeader>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader>Rebounds</CardHeader>
            </Card>
          </Grid>
          <Grid item>
            <Card>
              <CardHeader>Blocks</CardHeader>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
