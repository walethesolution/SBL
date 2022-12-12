import { Box, Button, Grid } from "@mui/material";

export default function SubHead() {
  return (
    <Box>
      <Grid>
        <Button href="/"> All games</Button>
        <Button href="/">Highlight of the week</Button>
      </Grid>
    </Box>
  );
}
