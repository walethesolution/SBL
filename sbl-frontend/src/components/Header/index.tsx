import Logo from "../../assets/sbl-logo.png";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton>SBL</IconButton>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Games</Button>
          <Button color="inherit">Stats</Button>
          <Button color="inherit">Teams</Button>
          <Button color="inherit">Players</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
