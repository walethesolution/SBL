import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="fixed" style={{ background: "black" }}>
      <Toolbar>
        <IconButton color="inherit">SBL</IconButton>
        <Stack
          direction="row"
          spacing={4}
          sx={{ flexGrow: 1, justifyContent: "center" }}
        >
          <NavLink to="/games">
            <Button color="inherit">Games</Button>
          </NavLink>
          <NavLink to="/about">
            <Button color="inherit">About</Button>
          </NavLink>
          <NavLink to="/stats">
            <Button color="inherit">Stats</Button>
          </NavLink>
          <NavLink to="/teams">
            <Button color="inherit">Teams</Button>
          </NavLink>
          <NavLink to="/players">
            <Button color="inherit">Players</Button>
          </NavLink>
          <NavLink to="/blog">
            <Button color="inherit">Blog</Button>
          </NavLink>
        </Stack>
        <Button color="inherit">
          <ShoppingCartTwoToneIcon />
        </Button>
        <Button color="inherit">User SignIn</Button>
      </Toolbar>
    </AppBar>
  );
}
