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

const Assists: React.FC = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Assists
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
                <ListItemText primary="Quam" />
              </Grid>
              <Grid item>
                <Typography variant="h5">-</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Steve" />
              </Grid>
              <Grid item>
                <Typography variant="h5">-</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Iman" />
              </Grid>
              <Grid item>
                <Typography variant="h5">-</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default Assists;
