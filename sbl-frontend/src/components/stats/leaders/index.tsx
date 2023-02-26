import { Grid, Typography, Button } from "@mui/material";
import { LeadersProps } from "../../../types";

const Leaders: React.FC<LeadersProps> = ({ leaderType }) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: leaderType === "current" ? "black" : "white",
        borderRadius: "4px",
      }}
    >
      <Grid
        item
        xs={6}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button>
          <Typography color={leaderType === "current" ? "white" : "black"}>
            {leaderType === "current"
              ? "Current week's leaders"
              : "Season leaders"}
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Leaders;
