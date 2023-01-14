import { Box, Grid, Typography } from "@mui/material";

export default function Blog() {
  return (
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
  );
}
