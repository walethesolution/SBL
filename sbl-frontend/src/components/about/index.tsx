import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardActionArea,
  CardContent,
} from "@mui/material";
import { DummyImage } from "react-simple-placeholder-image";

export default function About() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Tabs style={{ backgroundColor: "background.paper" }}>
          <Tab value="0" label="About" />
        </Tabs>
        <Grid
          container
          sx={{
            marginTop: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          spacing={4}
        >
          <Grid item>
            <Typography variant="h3" fontWeight="550">
              WHO WE ARE
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              Sunday balling league is a league for our community.
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Founded in 2022, headquaters in East New York, Brooklyn, NY.
            </Typography>
            <Typography variant="h6" color="text.secondary">
              We are a body that's commited to creating a good atmosphere every
              game day.
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Friends and family first, competitors next.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" color="text.secondary">
              Members
            </Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={4}>
              <Grid item>
                <Card variant="elevation">
                  <CardActionArea>
                    <CardContent>
                      <DummyImage width={200} height={200} shape="image" />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="elevation">
                  <CardActionArea>
                    <CardContent>
                      <DummyImage width={200} height={200} shape="image" />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item>
                <Card variant="elevation">
                  <CardActionArea>
                    <CardContent>
                      <DummyImage width={200} height={200} shape="image" />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
