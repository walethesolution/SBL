import { Box, Grid, Typography, Tabs, Tab } from "@mui/material";

export default function Blog() {
  return (
    <Box>
      <Tabs style={{ backgroundColor: "background.paper" }}>
        <Tab value="0" label="Blog" />
      </Tabs>
      <Box sx={{ margin: 25 }}>
        <Grid
          container
          spacing={4}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid item xs={12} md={12}>
            <Typography variant="h4">Blog Page is coming soon</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">Work in Progress</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
