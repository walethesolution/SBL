import { Box, Typography } from "@mui/material";

const NoGamesScheduled: React.FC = () => {
  return (
    <Box
      sx={{
        margin: "30%",
        marginTop: "4%",
      }}
    >
      <Typography variant="h4">NO SCORES YET </Typography>
    </Box>
  );
};

export default NoGamesScheduled;
