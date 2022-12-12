import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

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
          <Button color="inherit">Games</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Stats</Button>
          <Button color="inherit">Teams</Button>
          <Button color="inherit">Players</Button>
          <Button color="inherit">Blog</Button>
        </Stack>
        <Button color="inherit">
          <ShoppingCartTwoToneIcon />
        </Button>
        <Button color="inherit">User SignIn</Button>
      </Toolbar>
    </AppBar>
  );
}