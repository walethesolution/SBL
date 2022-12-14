import { Typography, Box, Button, Grid } from "@mui/material";
import mainPic from "../../../assets/headlinePic.jpg";

export default function Headline() {
  const imageStyles = {
    width: "650px",
    height: "725px",
    marginBottom: "30px",
  };

  const buttonStyles = {
    width: "80%",
  };

  const textStyles = { marginTop: "40px" };

  return (
    <Box>
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid container item xs={12} md={6}>
          <Grid item>
            <Typography variant="h1" fontWeight="600">
              Everybody's league
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="text.secondary" style={textStyles}>
              Community professionals
            </Typography>
          </Grid>
          <Button
            variant="contained"
            sx={{
              marginTop: "40px",
              borderRadius: "50px",
            }}
            style={buttonStyles}
            size="large"
          >
            Come join us
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={mainPic} alt="My Team" style={imageStyles} />
        </Grid>
      </Grid>
    </Box>
  );
}
