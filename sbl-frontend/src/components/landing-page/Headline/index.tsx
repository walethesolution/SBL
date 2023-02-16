import { Typography, Box, Button, Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import mainPic from "../../../assets/headlinePic.jpg";

const Headline: React.FC = () => {
  const navigate = useNavigate();

  const imageStyles = {
    width: "643px",
    height: "720px",
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
            }}
            style={buttonStyles}
            size="large"
            onClick={() => navigate("/joinUs")}
          >
            Come join us
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <LazyLoadImage src={mainPic} style={imageStyles} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Headline;
