import Grid from "@mui/material/Grid";
import { Typography, Box, Button } from "@mui/material";
import mainPic from "../../assets/headlinePic.jpg";
export default function Headline() {
  const imageStyles = {
    width: "420px",
    // height: "844px",
    alignItems: "center",
    marginBottom: "30px",
  };

  const buttonStyles = {
    width: "80%",
  };
  return (
    <Box
      sx={{ marginTop: "40px", backgroundColor: "rgba(128, 128, 128, 0.08)" }}
    >
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        <Grid container item xs={12} md={6}>
          <Grid item>
            <Typography variant="h1" fontWeight="700">
              Everybody's League
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Community professionals</Typography>
          </Grid>
          <Button
            variant="contained"
            color="success"
            sx={{ marginTop: "40px" }}
            style={buttonStyles}
            size="large"
          >
            Come join us
          </Button>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <img src={mainPic} alt="My Team" style={imageStyles} />
        </Grid>
      </Grid>
    </Box>
  );
}
