import { useGetConnectionTestTokenQuery } from '../src/redux/api';
import {
  createLocalAudioTrack,
  createLocalVideoTrack,
  LivekitError,
  LocalAudioTrack,
  LocalVideoTrack,
  LocalTrack,
  LocalTrackPublication,
  MediaDeviceFailure,
  Room,
  RoomConnectOptions,
  RoomEvent,
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

const ROOM_URL = 'wss://sfu-demo.teraphone.app';

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
      if (err instanceof LivekitError) {
        switch (err.code) {
          case 1: // ConnectionError
            if (err.message.includes('signal')) {
              setTestSignalConnectionStatus('failure');
              setTestSignalConnectionError(err.message);
            } else if (err.message.includes('timeout')) {
              setTestWebRTCConnectionStatus('failure');
              setTestWebRTCConnectionError(err.message);
            } else if (err.message.includes('cancelled')) {
              setTestWebRTCConnectionStatus('failure');
              setTestWebRTCConnectionError(err.message);
            }
            break;
          case 10: // UnsupportedServer
            setTestSignalConnectionStatus('failure');
            setTestSignalConnectionError(err.message);
            break;
          default:
            setTestSignalConnectionStatus('failure');
            setTestSignalConnectionError(err.message);
            setTestWebRTCConnectionStatus('failure');
            setTestWebRTCConnectionError(err.message);
        }
      } else {
        console.log('unknown error:', err);
        setTestSignalConnectionStatus('failure');
        setTestSignalConnectionError('unknown error, see console for details');
        setTestWebRTCConnectionStatus('failure');
        setTestWebRTCConnectionError('unknown error, see console for details');
      }
      return;
    }
    setTestWebRTCConnectionStatus('success');

    // cleanup
    if (room.state === 'connected') {
      try {
        await room.disconnect();
      } catch (err: unknown) {
        console.log('error disconnecting:', err);
      }
    }
    return;
  }, [data?.roomToken]);

  const runPhase2 = useCallback(async () => {
    const token = data?.roomToken;
    if (!token) {
      return;
    }

    // init room
    const room = new Room();

    // connect
    const roomConnectOptions: RoomConnectOptions = {
      autoSubscribe: false,
      rtcConfig: {
        iceTransportPolicy: 'relay',
      },
    };

    try {
      setTestConnectTURNStatus('pending');
      await room.connect(ROOM_URL, token, roomConnectOptions);
    } catch (err: unknown) {
      setTestConnectTURNStatus('failure');
      if (err instanceof LivekitError) {
        setTestConnectTURNError(err.message);
      } else {
        console.log('unknown error:', err);
        setTestConnectTURNError('unknown error, see console for details');
      }
      return;
    }
    setTestConnectTURNStatus('success');

    // publish audio
    setTestPublishAudioStatus('pending');
    let audioTrack: LocalAudioTrack;
    let audioTrackPublication: LocalTrackPublication;
    try {
      audioTrack = await createLocalAudioTrack();
      audioTrackPublication = await room.localParticipant.publishTrack(
        audioTrack
      );
    } catch (err: unknown) {
      setTestPublishAudioStatus('failure');
      if (err instanceof LivekitError) {
        setTestPublishAudioError(err.message);
      } else {
        const msg = MediaDeviceFailure.getFailure(err);
        if (msg) {
          setTestPublishAudioError(msg);
        } else {
          console.log('unknown error:', err);
          setTestPublishAudioError('unknown error, see console for details');
        }
      }
      return;
    }

    if (audioTrackPublication) {
      try {
        setTimeout(async () => {
          room.localParticipant.unpublishTrack(
            audioTrackPublication.track as LocalTrack,
            true
          );
        }, 100);
      } catch (err: unknown) {
        console.log('error unpublishing:', err);
      }
    } else {
      setTestPublishAudioStatus('failure');
      return;
    }
    setTestPublishAudioStatus('success');

    // publish video
    setTestPublishVideoStatus('pending');
    let videoTrack: LocalVideoTrack;
    let videoTrackPublication: LocalTrackPublication;
    try {
      videoTrack = await createLocalVideoTrack();
      videoTrackPublication = await room.localParticipant.publishTrack(
        videoTrack
      );
    } catch (err: unknown) {
      setTestPublishVideoStatus('failure');
      if (err instanceof LivekitError) {
        setTestPublishVideoError(err.message);
      } else {
        const msg = MediaDeviceFailure.getFailure(err);
        if (msg) {
          setTestPublishVideoError(msg);
        } else {
          console.log('unknown error:', err);
          setTestPublishVideoError('unknown error, see console for details');
        }
      }
      return;
    }

    if (videoTrackPublication) {
      try {
        setTimeout(async () => {
          room.localParticipant.unpublishTrack(
            videoTrackPublication.track as LocalTrack,
            true
          );
        }, 100);
      } catch (err: unknown) {
        console.log('error unpublishing:', err);
      }
    } else {
      setTestPublishVideoStatus('failure');
      return;
    }
    setTestPublishVideoStatus('success');
  }, [data?.roomToken]);

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
          <Box sx={{ p: 3 }}>
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
          <Box sx={{ p: 3 }}>
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
