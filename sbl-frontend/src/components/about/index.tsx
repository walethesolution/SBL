import {
  Box,
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardContent,
} from "@mui/material";
import { DummyImage } from "react-simple-placeholder-image";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(55, 146, 211, 0.08)",
      }}
    >
      <Tabs style={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
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
      </Grid>
      <Grid container>
        <Card variant="outlined">
          <CardContent>
            <DummyImage width={200} height={200} shape="image" />
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <DummyImage width={200} height={200} shape="image" />
          </CardContent>
        </Card>
        <Card variant="outlined">
          <CardContent>
            <DummyImage width={200} height={200} shape="image" />
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
