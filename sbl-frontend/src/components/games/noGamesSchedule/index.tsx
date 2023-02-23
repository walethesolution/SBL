import { Box, Typography } from "@mui/material";

const NoGamesScheduled: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "10%",
      }}
    >
      <Typography variant="h4" align="center">
        NO GAMES{" "}
      </Typography>
    </Box>
  );
};

export default NoGamesScheduled;
