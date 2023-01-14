import { AppBar, Tabs, Tab } from "@mui/material";
export default function GameSubBar() {
  return (
    <AppBar position="static">
      <Tabs>
        <Tab value="0" label="All games" />
        <Tab value="1" label="Highlight of the week" />
      </Tabs>
    </AppBar>
  );
}
