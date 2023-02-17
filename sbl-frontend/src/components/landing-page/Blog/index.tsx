import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { blogsData } from "./blogsData";

const Blog: React.FC = () => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Typography
        variant="h3"
        fontWeight="550"
        sx={{ backgroundColor: "white" }}
      >
        TRENDING
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {blogsData.map((blog) => (
          <Card key={blog.id} sx={{ maxWidth: 350, margin: "10px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.topic}
              />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {blog.topic}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
