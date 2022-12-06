import { Box, Typography, Button, Grid } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" fontWeight="550">
        WHO WE ARE
      </Typography>
      <Grid
        container
        sx={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid item>
          <Typography variant="h6" color="text.secondary">
            We are a body that's commited to creating a good atmosphere every
            game day.
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Come test your skill level and improve on your basketball game.
            Friendly trashtalks are allowed
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: "30px",
              marginLeft: "45%",
              borderRadius: "50px",
            }}
          >
            Members
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
