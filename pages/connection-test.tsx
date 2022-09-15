import { useGetConnectionTestTokenQuery } from '../src/redux/api';
import { Room, RoomConnectOptions, RoomEvent } from 'livekit-client';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

const ConnectionTest = () => {
  const { data, error, isLoading } = useGetConnectionTestTokenQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>sad face</div>;
  }

  return (
    <Container>
      <Paper>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Box>
            <Typography variant="h3" component="h1">
              Connection Test
            </Typography>
            <Typography variant="body1">
              Test your connection to Teraphone's servers.
            </Typography>
            <Button variant="contained">Begin Test</Button>
          </Box>
          <Box>
            <Typography variant="h3" component="h1">
              Results
            </Typography>
            <List>
              <ListItem key="test1">
                <ListItemIcon>
                  <DoneIcon color="success" />
                </ListItemIcon>
                <ListItemText primary="Test 1" />
              </ListItem>
              <ListItem key="test2">
                <ListItemIcon>
                  <CloseIcon color="error" />
                </ListItemIcon>
                <ListItemText primary="Test 2" />
              </ListItem>
              <ListItem key="test3">
                <ListItemIcon>
                  <CircularProgress size={24} />
                </ListItemIcon>
                <ListItemText primary="Test 3" />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ConnectionTest;
