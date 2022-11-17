import Logo from "../../assets/sbl-logo.png";
import "./index.css";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const Header = () => {
  return (
    <AppBar position="static" style={{ background: "black" }}>
      <Toolbar>
        <IconButton color="inherit">SBL</IconButton>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Games</Button>
          <Button color="inherit">Stats</Button>
          <Button color="inherit">Teams</Button>
          <Button color="inherit">Players</Button>
          <Button color="inherit">
            <ShoppingCartTwoToneIcon />
          </Button>
          <Button color="inherit">User SignIn</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
