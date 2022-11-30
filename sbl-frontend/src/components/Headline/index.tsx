import Grid from "@mui/material/Grid";
import { Typography, Box, Button } from "@mui/material";
import mainPic from "../../assets/fall-ball3.jpg";

export default function Headline() {
  const imageStyles = {
    width: "100%",
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
        <Grid item xs={12} md={6} sm={12}>
          <img src={mainPic} alt="My Team" style={imageStyles} />
        </Grid>
        <Grid container item xs={12} md={6}>
          <Grid item>
            <Typography variant="h1" fontWeight="700">
              Everybody's League
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ align: "center" }}>
              Community professionals
            </Typography>
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
      </Grid>
    </Box>
  );
}
