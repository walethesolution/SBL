import {
  Box,
  Grid,
  Button,
  Divider,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Form } from "react-router-dom";
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
      <Grid>
        <Grid item>
          <Button style={buttonStyle} variant="text">
            All games
          </Button>
        </Grid>
        <Grid item>
          <Button color="inherit">Highlight of the week</Button>
        </Grid>
      </Grid>
      <Box>
        <Card sx={{ backgroundColor: "rgba(0, 0, 0, 0.35)" }}>
          <CardContent>Month, Year</CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
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
              </Card>
            </Grid>
            <Divider variant="middle" color="grey" />
            <Form>
              <Button>Highlight</Button>
            </Form>
            <Form>
              <Button>Box Score</Button>
            </Form>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
