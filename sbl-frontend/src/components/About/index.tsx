import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        marginTop: "20px",
        backgroundColor: "rgba(128, 128, 128, 0.08)",
      }}
    >
      <Typography
        variant="h3"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        WHO WE ARE
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        We are a body that's commited to creating a good atmosphere every game
        day.
      </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Come test your skill level and improve on your basketball game. Friendly
        trashtalks are allowed
      </Typography>
    </Box>
  );
}

export default About;
