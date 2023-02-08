import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
// import TheBoys from "../../../assets/fall-ball3.jpg";
import TreesnCourt from "../../../assets/TreesnCourt.jpg";
import dataB from "../../../data/db.json";

export default function Blog() {
  const data = dataB;
  const firstBlog = data.blogs.find((blog) => blog.id === 1);
  const secondBlog = data.blogs.find((blog) => blog.id === 2);

  let firstTopic;
  let firstContext;
  let firstImage;
  let secondTopic;
  let secondContext;
  let secondImage;

  if (firstBlog) {
    firstTopic = firstBlog.topic;
    firstContext = firstBlog.context;
    firstImage = firstBlog.image;
  } else {
    firstTopic = "No topic found";
    firstContext = "No context here";
    firstImage = "No image";
  }

  if (secondBlog) {
    secondTopic = secondBlog.topic;
    secondContext = secondBlog.context;
    secondImage = secondBlog.image;
  } else {
    secondTopic = "No topic found";
    secondContext = "No context here";
    secondImage = "No image here";
  }

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
                image={firstImage}
                alt="Fall ball"
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {firstTopic}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {firstContext}
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
                  {secondTopic}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {secondContext}
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
