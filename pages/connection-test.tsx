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

  const resetTests = useCallback(() => {
    setTestSignalConnectionStatus('waiting');
    setTestWebRTCConnectionStatus('waiting');
    setTestConnectTURNStatus('waiting');
    setTestPublishAudioStatus('waiting');
    setTestPublishVideoStatus('waiting');
    setTestResumeConnectionStatus('waiting');
  }, []);

  const runTests = useCallback(async () => {
    // todo: finish this
  }, []);

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
            <Button
              variant="contained"
              disabled={!data?.roomToken}
              onClick={runTests}
            >
              Begin Test
            </Button>
          </Box>
          <Box>
            <Typography variant="h3" component="h1">
              Results
            </Typography>
            <List>
              <TestStatusItem
                key="test-signal-connection"
                status={testSignalConnectionStatus}
                message="Connecting to signal connection via WebSocket"
              />
              <TestStatusItem
                key="test-webrtc-connection"
                status={testWebRTCConnectionStatus}
                message="Establishing WebRTC connection"
              />
              <TestStatusItem
                key="test-connect-turn"
                status={testConnectTURNStatus}
                message="Can connect via TURN"
              />
              <TestStatusItem
                key="test-publish-audio"
                status={testPublishAudioStatus}
                message="Can publish audio"
              />
              <TestStatusItem
                key="test-publish-video"
                status={testPublishVideoStatus}
                message="Can publish video"
              />
              <TestStatusItem
                key="test-resume-connection"
                status={testResumeConnectionStatus}
                message="Resuming connection after interruption"
              />
            </List>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ConnectionTest;
