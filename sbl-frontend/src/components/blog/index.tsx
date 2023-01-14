import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";

export default function Blog() {
  return (
    <Box>
      <Tabs style={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
        <Tab value="0" label="Blog" />
      </Tabs>
      <Box sx={{ margin: 25 }}>
        <Grid container spacing={4}>
          <Grid item>
            <Typography variant="h2">Blog Page is coming soon</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2">Work in Progress</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
