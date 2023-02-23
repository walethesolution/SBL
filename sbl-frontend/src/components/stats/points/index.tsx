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

const Points: React.FC = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Points
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
                <ListItemText primary="Fuad" />
              </Grid>
              <Grid item>
                <Typography variant="h6">30</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Dariel" />
              </Grid>
              <Grid item>
                <Typography variant="h6">22</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="OG" />
              </Grid>
              <Grid item>
                <Typography variant="h6">20</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default Points;
