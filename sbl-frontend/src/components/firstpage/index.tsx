import { Box } from "@mui/material";
import About from "../landing-page/About";
import Blog from "../landing-page/Blog";
import Headline from "../landing-page/Headline";

export default function FirstPage() {
  return (
    <Box>
      <Headline />
      <About />
      <Blog />
    </Box>
  );
}
