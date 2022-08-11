import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link, { NextLinkComposed } from './Link';

const pages = [
  { name: 'Home', url: '/' },
  { name: 'Help', url: '/help' },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
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
                  sx={{ my: 2, color: 'white', display: 'block' }}
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
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {
                  xs: 'block',
                  md: 'none',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={NextLinkComposed}
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  to={page.url}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
