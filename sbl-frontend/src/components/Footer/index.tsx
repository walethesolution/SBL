import { AppBar, Button, Stack, Toolbar, Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";

const Footer = () => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <AppBar
        position="static"
        style={{ background: "black", height: "250px" }}
      >
        <Toolbar>
          <Stack
            direction="row"
            spacing={4}
            sx={{ flexGrow: 1, justifyContent: "center" }}
          >
            <Button color="inherit">
              <InstagramIcon />
            </Button>
            <Button color="inherit">
              <TwitterIcon />
            </Button>
            <Button color="inherit">
              <YouTubeIcon />
            </Button>
            <Button color="inherit">
              <GoogleIcon />
            </Button>
          </Stack>
        </Toolbar>
        <Typography
          variant="h5"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          (c) Sunday Balling League. 2022
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Footer;
