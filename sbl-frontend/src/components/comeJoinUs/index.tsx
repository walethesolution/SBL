import * as React from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";

const ComeJoinUs: React.FC = () => {
  return (
    <Box margin={10}>
      <Grid
        container
        spacing={4}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid item>
          <Typography variant="h3">Be a part</Typography>
          <Typography variant="h3">of our community</Typography>
        </Grid>
        <Grid item>
          <Grid container spacing={4} direction="column">
            <Grid item>
              <Grid container spacing={2}>
                <Grid item>
                  <TextField
                    id="filled-basic"
                    label="First Name"
                    variant="filled"
                    required
                    inputProps={{ style: { width: "200px" } }}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="filled-basic"
                    label="Last Name"
                    variant="filled"
                    required
                    inputProps={{ style: { width: "200px" } }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item>
              <TextField
                id="filled-basic"
                label="Email"
                variant="filled"
                required
                inputProps={{ style: { width: "440px" } }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-basic"
                label="Country of Origin"
                variant="filled"
                required
                inputProps={{ style: { width: "440px" } }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                style={{ width: "465px" }}
                size="large"
              >
                Join
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComeJoinUs;
