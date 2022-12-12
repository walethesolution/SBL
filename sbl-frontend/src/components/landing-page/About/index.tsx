import { Box, Typography, Button, Grid } from "@mui/material";

export default function About() {
  const buttonStyle = { width: "25%" };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid
        container
        sx={{
          marginTop: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        spacing={4}
        xs={12}
        md={12}
      >
        <Typography variant="h3" fontWeight="550">
          WHO WE ARE
        </Typography>
        <Grid item>
          <Typography variant="h6" color="text.secondary">
            Sunday balling league is a league for our community.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Founded in 2022, headquaters in Brooklyn, NY.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            We are a body that's commited to creating a good atmosphere every
            game day.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Friends and family first, competitors next.
          </Typography>
        </Grid>
        <Button
          style={buttonStyle}
          variant="contained"
          sx={{
            marginTop: "40px",
            borderRadius: "50px",
          }}
        >
          Members
        </Button>
      </Grid>
    </Box>
  );
}
