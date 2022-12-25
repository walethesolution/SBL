import {
  Box,
  Grid,
  Button,
  Divider,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";

export default function Stats() {
  return (
    <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
      <Tabs style={{ backgroundColor: "rgba(128, 128, 128, 0.30)" }}>
        <Tab value="0" label="All stats" />
        <Tab value="1" label="Points" />
        <Tab value="2" label="Assists" />
        <Tab value="3" label="Rebounds" />
      </Tabs>
    </Box>
  );
}
