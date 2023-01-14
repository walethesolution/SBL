import { Box, Typography, Grid } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Box sx={{}}>
      <Grid
        container
        spacing={2}
        sx={{
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20%",
        }}
      >
        <Grid item>
          <Typography variant="h3">Oops!</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Sorry, an unexpected error has occurred.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <i>{error.statusText || error.message}</i>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
