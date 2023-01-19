import { Box, Grid, Typography } from "@mui/material";

export default function Shop() {
  return (
    <Box>
      <Box sx={{ margin: 25 }}>
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <Typography variant="h4">
              League Store is under construction.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4">Please be patient with us.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
