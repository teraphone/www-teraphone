import { useGetConnectionTestTokenQuery } from '../src/redux/api';
import {
  ConnectionError,
  Room,
  RoomConnectOptions,
  RoomEvent,
  RoomOptions,
} from 'livekit-client';
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
  error: string;
}

const ROOM_URL = 'wss://sfu-demo2.teraphone.app';

const TestStatusItem = (props: TestItemProps) => {
  const { status, message, error } = props;

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
      <ListItemText primary={message} secondary={error} />
    </ListItem>
  );
};

const ConnectionTest = () => {
  const { data } = useGetConnectionTestTokenQuery();
  const [testsPending, setTestsPending] = useState(false);

  // statuses
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

  // error messages
  const [testSignalConnectionError, setTestSignalConnectionError] =
    useState('');
  const [testWebRTCConnectionError, setTestWebRTCConnectionError] =
    useState('');
  const [testConnectTURNError, setTestConnectTURNError] = useState('');
  const [testPublishAudioError, setTestPublishAudioError] = useState('');
  const [testPublishVideoError, setTestPublishVideoError] = useState('');
  const [testResumeConnectionError, setTestResumeConnectionError] =
    useState('');

  const resetTests = useCallback(() => {
    setTestSignalConnectionStatus('waiting');
    setTestWebRTCConnectionStatus('waiting');
    setTestConnectTURNStatus('waiting');
    setTestPublishAudioStatus('waiting');
    setTestPublishVideoStatus('waiting');
    setTestResumeConnectionStatus('waiting');

    setTestSignalConnectionError('');
    setTestWebRTCConnectionError('');
    setTestConnectTURNError('');
    setTestPublishAudioError('');
    setTestPublishVideoError('');
    setTestResumeConnectionError('');
  }, []);

  const runPhase1 = useCallback(async () => {
    const token = data?.roomToken;
    if (!token) {
      return;
    }

    // init room
    const room = new Room();
    room.on(RoomEvent.SignalConnected, () => {
      console.log(RoomEvent.SignalConnected);
      setTestSignalConnectionStatus('success');
      setTestWebRTCConnectionStatus('pending');
    });

    // connect
    const roomConnectOptions = {
      autoSubscribe: false,
    };
    try {
      setTestSignalConnectionStatus('pending');
      await room.connect(ROOM_URL, token, roomConnectOptions);
    } catch (err: unknown) {
      if (err instanceof ConnectionError) {
        setTestSignalConnectionStatus('failure');
        setTestSignalConnectionError(err.message);
      } else {
        console.log(err);
      }
      return;
    }
    setTestWebRTCConnectionStatus('success');

    // test signal connection
    // test webrtc connection
  }, [data?.roomToken]);

  const runPhase2 = useCallback(async () => {
    // test connect to TURN
    // test publish audio
    // test publish video
    // test resume connection
  }, []);

  const runTests = useCallback(async () => {
    setTestsPending(true);
    resetTests();
    await runPhase1();
    await runPhase2();
    setTestsPending(false);
  }, [resetTests, runPhase1, runPhase2]);

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
              disabled={!data?.roomToken || testsPending}
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
                error={testSignalConnectionError}
              />
              <TestStatusItem
                key="test-webrtc-connection"
                status={testWebRTCConnectionStatus}
                message="Establishing WebRTC connection"
                error={testWebRTCConnectionError}
              />
              <TestStatusItem
                key="test-connect-turn"
                status={testConnectTURNStatus}
                message="Can connect via TURN"
                error={testConnectTURNError}
              />
              <TestStatusItem
                key="test-publish-audio"
                status={testPublishAudioStatus}
                message="Can publish audio"
                error={testPublishAudioError}
              />
              <TestStatusItem
                key="test-publish-video"
                status={testPublishVideoStatus}
                message="Can publish video"
                error={testPublishVideoError}
              />
              <TestStatusItem
                key="test-resume-connection"
                status={testResumeConnectionStatus}
                message="Resuming connection after interruption"
                error={testResumeConnectionError}
              />
              <TestStatusItem
                key="test-x"
                status="failure"
                message="Test that fails"
                error="This is the error message"
              />
            </List>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ConnectionTest;
