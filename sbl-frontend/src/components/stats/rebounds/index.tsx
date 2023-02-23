import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

const Rebounds: React.FC = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Rebounds
          </Typography>
        </CardContent>
        <Divider />
        <List>
          <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Tianty" />
              </Grid>
              <Grid item>
                <Typography variant="h5">10</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Will" />
              </Grid>
              <Grid item>
                <Typography variant="h5">8</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Victor" />
              </Grid>
              <Grid item>
                <Typography variant="h5">6</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default Rebounds;
