import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  height: "",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Item>Image</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Headline</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
