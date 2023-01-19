import { Box, Grid, Button, TextField, Stack } from "@mui/material";
export default function SignIn() {
  return (
    <Box sx={{ margin: 25, backgroundColor: "white" }}>
      <Box sx={{ margin: 10 }}>
        <Stack>
          <TextField label="Email" variant="standard" />
          <TextField label="Password" variant="standard" />
          <Button variant="contained">Log In</Button>
          <Button variant="contained">Sign Up</Button>
        </Stack>
      </Box>
    </Box>
  );
}
