import {
  Box,
  Grid,
  Button,
  Divider,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { DummyImage } from "react-simple-placeholder-image";

const dummyStyle = {
  borderRadius: 50,
};
const buttonStyle = {
  backgroundColor: "black",
  color: "white",
};

export default function AllGames() {
  return (
    <Box>
      <Button style={buttonStyle} variant="contained">
        All games
      </Button>
      <Button color="inherit">Highlight of the week</Button>
      <Box display="flex" justifyContent="center">
        <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}>
          <CardContent>Month, Year</CardContent>
        </Card>
        <Box>
          <Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}>
                <DummyImage
                  width={100}
                  height={100}
                  shape="image"
                  style={dummyStyle}
                />
                <CardContent>
                  <Typography>TEAM A</Typography>
                </CardContent>
                <DummyImage
                  width={100}
                  height={100}
                  shape="image"
                  style={dummyStyle}
                />
                <CardContent>
                  <Typography>TEAM B</Typography>
                </CardContent>
                <Divider variant="middle" color="grey" />
                <Box>
                  <Button color="inherit">Highlight</Button>
                  <Button color="inherit">Box Score</Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
