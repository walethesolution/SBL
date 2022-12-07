import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import TheBoys from "../../assets/fall-ball3.jpg";
import TreesnCourt from "../../assets/TreesnCourt.jpg";

export default function MultiActionAreaCard() {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Typography
        variant="h3"
        fontWeight="550"
        sx={{ backgroundColor: "white" }}
      >
        TRENDING
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <Card sx={{ maxWidth: 350, marginTop: "20px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={TheBoys}
                alt="Fall ball"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  Fall
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We play all round the year. As long as the sun is out, We are
                  outside.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item>
          <Card sx={{ maxWidth: 350, marginTop: "20px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={TreesnCourt}
                alt="Fall ball"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  That Miami weather
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This time around the view was Miami-esque. You know as long as
                  the sun is out, We are outside.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
