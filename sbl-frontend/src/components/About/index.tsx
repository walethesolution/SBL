import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{ marginTop: "40px", backgroundColor: "rgba(128, 128, 128, 0.08)" }}
    >
      <Typography variant="h3" sx={{ align: "center" }}>
        WHO WE ARE
      </Typography>
    </Box>
  );
}

export default About;
