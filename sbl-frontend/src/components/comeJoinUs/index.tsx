import * as React from "react";
import { Box, Grid, Typography, TextField } from "@mui/material";

const ComeJoinUs: React.FC = () => {
  return (
    <Box>
      <Grid container>
        <Grid item>
          <Typography variant="h3">Be a part of our community</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Box>
          <Grid container spacing={2}>
            <Grid item>
              <TextField
                id="filled-basic"
                label="First Name"
                variant="filled"
                required
              />
            </Grid>
            <Grid item>
              <TextField
                id="filled-basic"
                label="Last Name"
                variant="filled"
                required
              />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default ComeJoinUs;
