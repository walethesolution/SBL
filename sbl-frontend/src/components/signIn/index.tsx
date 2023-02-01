import {
  Box,
  Grid,
  Button,
  Typography,
  TextField,
  Stack,
  Link,
} from "@mui/material";

export default function SignIn() {
  return (
    <Box sx={{ marginLeft: "30%", marginTop: "5%" }}>
      <Grid container spacing={4} direction="column" width="60%">
        <Grid item xs={12} md={6}>
          <Typography variant="h4">MEMBERS sign in</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box>
            <Box>
              <Stack>
                <TextField label="Email" variant="standard" />
                <TextField label="Password" variant="standard" />
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={4}>
            <Button variant="contained">Log In</Button>
            <Box>
              <Stack spacing={2}>
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  No SBL membership? Join Now
                </Link>
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Forgot Password
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
