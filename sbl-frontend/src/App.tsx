import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/landing-page/Header";
import Footer from "./components/landing-page/Footer";
import ErrorPage from "./components/errors";
import Games from "./components/games";
import FirstPage from "./components/firstpage";
import About from "./components/about";
import Blog from "./components/blog";
import Stats from "./components/stats";
import Players from "./components/players";
import SignIn from "./components/signIn";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "rgba(55, 146, 211, 0.08)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/players" element={<Players />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}
