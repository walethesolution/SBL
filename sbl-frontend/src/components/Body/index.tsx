import Grid from "@mui/material/Grid";
import { Typography, Box, Button } from "@mui/material";
import sbl from "../../assets/sbl-logo.png";

export default function HomePage() {
  return (
    <Box>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Grid item xs={12} md={6}>
          <img src={sbl} alt="My Team" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" fontWeight="700">
            Everybody's League
          </Typography>
          <Typography variant="h6">
            Pros in the community. Spoiler alert: we are all pros in this
            community.
          </Typography>
          <Button variant="contained" color="primary">
            Come join us
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
