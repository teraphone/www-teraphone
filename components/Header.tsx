import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import Link, { NextLinkComposed } from './Link';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Help', url: '/help' },
];

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenNavMenu = () => setIsMenuOpen(true);
  const handleCloseNavMenu = () => setIsMenuOpen(false);

  return (
    <AppBar position="static" elevation={0}>
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
                  }}
                >
                  {page.name}
                </Button>
              ))}
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
              borderRadius: 0,
              display: { xs: 'block', md: 'none' },
              left: 0,
              position: 'absolute',
              right: 0,
              top: '64px',
            }}
          >
            <MenuList variant="menu" id="menu-appbar">
              {pages.map((page) => (
                <MenuItem
                  component={NextLinkComposed}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  selected={router.asPath === page.url}
                  sx={{ justifyContent: 'center', minHeight: 56 }}
                  to={page.url}
                >
                  <Typography
                    textAlign="center"
                    variant="h4"
                    component="p"
                    sx={{ fontWeight: 600 }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                component={NextLinkComposed}
                onClick={() => {
                  handleCloseNavMenu();
                  setTimeout(() => {
                    const emailInput = document.getElementsByName('email')[0];
                    if (emailInput) emailInput.focus();
                  }, 100);
                }}
                selected={router.asPath === '/#signup'}
                sx={{ justifyContent: 'center', minHeight: 56 }}
                to="/#signup"
              >
                <Typography
                  textAlign="center"
                  variant="h4"
                  component="p"
                  sx={{ fontWeight: 600 }}
                >
                  Sign up
                </Typography>
              </MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      )}
    </AppBar>
  );
};

export default Header;
