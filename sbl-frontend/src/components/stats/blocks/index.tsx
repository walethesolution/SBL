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

const Blocks: React.FC = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            Blocks
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
                <ListItemText primary="Sam" />
              </Grid>
              <Grid item>
                <Typography variant="h5">4</Typography>
              </Grid>
            </Grid>
          </ListItem>
          <ListItem>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <ListItemAvatar>
                  <Avatar />
                </ListItemAvatar>
                <ListItemText primary="Adolo" />
              </Grid>
              <Grid item>
                <Typography variant="h5">4</Typography>
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
                <Typography variant="h5">3</Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Card>
    </Box>
  );
};

export default Blocks;
