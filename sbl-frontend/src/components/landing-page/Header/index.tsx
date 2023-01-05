import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { NavLink } from "react-router-dom";

export default function Header() {
  const navStyles = { color: "white", textDecoration: "none" };

  return (
    <AppBar position="fixed" style={{ backgroundColor: "black" }}>
      <Toolbar>
        <NavLink to="/" style={navStyles}>
          <IconButton color="inherit">SBL</IconButton>
        </NavLink>
        <Stack
          direction="row"
          spacing={4}
          sx={{ flexGrow: 1, justifyContent: "center" }}
        >
          <NavLink to="/games" style={navStyles}>
            <Button color="inherit">Games</Button>
          </NavLink>
          <NavLink to="/about" style={navStyles}>
            <Button color="inherit">About</Button>
          </NavLink>
          <NavLink to="/stats" style={navStyles}>
            <Button color="inherit">Stats</Button>
          </NavLink>
          <NavLink to="/players" style={navStyles}>
            <Button color="inherit">Players</Button>
          </NavLink>
          <NavLink to="/blog" style={navStyles}>
            <Button color="inherit">Blog</Button>
          </NavLink>
        </Stack>
        <Button color="inherit" style={navStyles}>
          <ShoppingCartTwoToneIcon />
        </Button>
        <Button color="inherit">User SignIn</Button>
      </Toolbar>
    </AppBar>
  );
}
