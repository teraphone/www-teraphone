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
import { useCallback, useEffect, useState } from 'react';

type TestStatus = 'waiting' | 'pending' | 'success' | 'failure';

interface TestItemProps {
  status: TestStatus;
  message: string;
}

const TestStatusItem = (props: TestItemProps) => {
  const { status, message } = props;

  if (status === 'waiting') {
    return null;
  }
  let icon;
  switch (status) {
    case 'success':
      icon = <DoneIcon color="success" />;
      break;
    case 'failure':
      icon = <CloseIcon color="error" />;
      break;
    default:
      icon = <CircularProgress size={24} />;
      break;
  }

  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={message} />
    </ListItem>
  );
};

const ConnectionTest = () => {
  const { data, error, isLoading } = useGetConnectionTestTokenQuery();
  const [testSignalConnectionStatus, setTestSignalConnectionStatus] =
    useState<TestStatus>('waiting');
  const [testWebRTCConnectionStatus, setTestWebRTCConnectionStatus] =
    useState<TestStatus>('waiting');
  const [testConnectTURNStatus, setTestConnectTURNStatus] =
    useState<TestStatus>('waiting');
  const [testPublishAudioStatus, setTestPublishAudioStatus] =
    useState<TestStatus>('waiting');
  const [testPublishVideoStatus, setTestPublishVideoStatus] =
    useState<TestStatus>('waiting');
  const [testResumeConnectionStatus, setTestResumeConnectionStatus] =
    useState<TestStatus>('waiting');

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
            <Button variant="contained" disabled={!data?.roomToken}>
              Begin Test
            </Button>
          </Box>
          <Box>
            <Typography variant="h3" component="h1">
              Results
            </Typography>
            <List>
              <TestStatusItem key="test1" status="success" message="Test 1" />
              <TestStatusItem key="test2" status="failure" message="Test 2" />
              <TestStatusItem key="test3" status="pending" message="Test 3" />
            </List>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ConnectionTest;
