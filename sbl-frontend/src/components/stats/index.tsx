import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
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
      <Box
        sx={{
          marginLeft: "15%",
          marginTop: "2%",
          width: "70%",
        }}
      >
        <Tabs>
          <Tab value="0" label="Last week's leaders" />
          <Tab value="1" label="Season leaders" />
        </Tabs>
        <Grid container spacing={25}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>Points</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>Assists</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>Rebounds</CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>Blocks</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
