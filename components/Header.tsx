import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  ClickAwayListener,
  Container,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Link, { NextLinkComposed } from './Link';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Pricing', url: '/pricing' },
  { name: 'Help', url: '/help' },
  { name: 'Download', url: '/download' },
];

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenNavMenu = () => setIsMenuOpen(true);
  const handleCloseNavMenu = () => setIsMenuOpen(false);

  return (
    <AppBar position="static" elevation={0} sx={{ flexGrow: 0, flexShrink: 0 }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between', gap: '16px' }}
        >
          <Box sx={{ flexBasis: '200px', flexGrow: 1, paddingTop: '3px' }}>
            <Link href="/">
              <img
                alt="Teraphone logo"
                height="24"
                src="/images/teraphone-logo-white.svg"
                width="24"
              />
            </Link>
          </Box>
          <Box
            component="h1"
            m={0}
            sx={{ flexGrow: 4, display: 'flex', justifyContent: 'center' }}
          >
            <Link href="/">
              <img
                alt="Teraphone"
                src="/images/teraphone-logo-text-white.svg"
                width="180"
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexBasis: '200px',
              flexGrow: 1,
              justifyContent: 'end',
            }}
          >
            <Box sx={{ display: { md: 'flex', xs: 'none' }, gap: '8px' }}>
              {pages.map((page) => (
                <Button
                  component={NextLinkComposed}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  to={page.url}
                  sx={{
                    my: 2,
                    color: 'white',
                    display: 'block',
                    textDecoration:
                      router.pathname === page.url
                        ? 'underline 2px rgba(255, 255, 255, 0.4)'
                        : 'none',
                    textUnderlineOffset: '5px',
                    minWidth: 0,
                  }}
                >
                  {page.name}
                </Button>
              ))}
              <Button
                component={NextLinkComposed}
                key="Sign-In"
                onClick={handleCloseNavMenu}
                to="https://web.teraphone.app"
                target="_blank"
                variant="outlined"
                sx={{
                  my: 2,
                  display: 'block',
                  minWidth: 0,
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    color: 'white',
                    borderColor: 'white',
                  },
                }}
              >
                Sign<span style={{ whiteSpace: 'nowrap' }}> </span>In
              </Button>
            </Box>
            <IconButton
              size="large"
              aria-label="Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={!isMenuOpen ? handleOpenNavMenu : handleCloseNavMenu}
              color="inherit"
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
                position: 'relative',
                right: '-15px',
              }}
            >
              {!isMenuOpen ? <MenuIcon /> : <CloseIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      {isMenuOpen && (
        <ClickAwayListener
          // Adding a short delay avoids a bug where clicking the close button
          // would trigger this handler to close the menu then think the open
          // button was clicked and open the menu again
          onClickAway={() => setTimeout(() => handleCloseNavMenu(), 10)}
        >
          <Paper
            elevation={8}
            sx={{
              backgroundColor: theme.palette.grey[100],
              borderRadius: 0,
              display: { xs: 'block', md: 'none' },
              left: 0,
              position: 'absolute',
              right: 0,
              top: '64px',
            }}
          >
            <MenuList disablePadding id="menu-appbar" variant="menu">
              {pages.map((page) => (
                <MenuItem
                  component={NextLinkComposed}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  selected={router.asPath === page.url}
                  sx={{
                    borderBottomColor: `${theme.palette.grey[300]} !important`,
                    borderBottom: '1px solid',
                    justifyContent: 'center',
                    minHeight: '56px !important',
                  }}
                  to={page.url}
                >
                  <Typography textAlign="center" sx={{ fontWeight: 600 }}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </MenuList>
            <Box onClick={() => handleCloseNavMenu()} p={2} textAlign="center">
              <Button
                component={NextLinkComposed}
                onClick={handleCloseNavMenu}
                to="https://web.teraphone.app"
                target="_blank"
                variant="outlined"
                sx={{
                  color: 'black',
                  borderColor: 'black',
                  '&:hover': {
                    color: 'black',
                    borderColor: 'black',
                  },
                }}
              >
                Sign In
              </Button>
            </Box>
          </Paper>
        </ClickAwayListener>
      )}
    </AppBar>
  );
};

export default Header;
