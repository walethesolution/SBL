import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Box,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <AppBar
        position="static"
        style={{ background: "black", height: "250px" }}
      >
        <Toolbar sx={{ flexGrow: 1, justfiyContent: "center" }}>
          <Grid container sx={{ justifyContent: "space-between" }}>
            <Stack>
              <Typography variant="h6">SBL</Typography>
              <Typography variant="inherit" color="grey">
                Come test your basketball skills.
              </Typography>
              <Typography variant="inherit" color="grey">
                Improve life skill as a bonus
              </Typography>
            </Stack>
            <Stack>
              <Typography variant="inherit">Follow us</Typography>
              <Button color="inherit">
                <InstagramIcon />
              </Button>
              <Button color="inherit">
                <TwitterIcon />
              </Button>
              <Button color="inherit">
                <YouTubeIcon />
              </Button>
            </Stack>
          </Grid>
        </Toolbar>
        <Divider variant="middle" color="white" />
        <Toolbar>
          <Typography
            variant="inherit"
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            (c) 2022 Sunday Balling League. All rights reserved
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
