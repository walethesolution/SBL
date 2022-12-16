import {
  Box,
  Grid,
  Button,
  Divider,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Toolbar,
} from "@mui/material";
import { Form } from "react-router-dom";
import { DummyImage } from "react-simple-placeholder-image";

const dummyStyle = {
  borderRadius: 50,
};

export default function AllGames() {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.51)" }}>
      <Toolbar>
        <Grid>
          <Grid item>
            <Button>All games</Button>
          </Grid>
          <Grid item>
            <Button>Highlight of the week</Button>
          </Grid>
        </Grid>
      </Toolbar>
      <Box>
        <Stack>
          <Card>
            <CardContent>Month, Year</CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid>
              <Grid item>
                <Card>
                  <DummyImage
                    width={100}
                    height={100}
                    shape="image"
                    style={dummyStyle}
                  />
                  <CardContent>
                    <Typography>TEAM A</Typography>
                  </CardContent>
                </Card>
                <Card>
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
        </Stack>
      </Box>
    </Box>
  );
}
