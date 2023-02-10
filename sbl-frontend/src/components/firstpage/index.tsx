import { Box } from "@mui/material";
import About from "../landing-page/About";
import Blog from "../landing-page/Blog";
import Headline from "../landing-page/Headline";

const FirstPage: React.FC = () => {
  return (
    <Box>
      <Headline />
      <About />
      <Blog />
    </Box>
  );
};

export default FirstPage;
