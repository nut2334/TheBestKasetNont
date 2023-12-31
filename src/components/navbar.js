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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import myTheme from '../core-ui/theme';
import { ThemeProvider } from '@mui/material/styles';

const pages = [{name: 'แผนที่', path :'/Map'},{name: 'ราคากลาง',path: '/Price'}];
const settings = [{name:'เข้าสู่ระบบ',path:'/Login'}, {name:'สมัครสมาชิก',path:'/Register'},{name:'ลืมรหัสผ่าน',path:'/Forgot'}];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={myTheme}>
    <AppBar position="static" sx={{ background: 'linear-gradient(0deg, rgba(206,222,189,1) 31%, rgba(250,241,228,1) 100%)' ,color:'#129549'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
            <img src={process.env.PUBLIC_URL + "/image/karsetnont.png"} alt="Italian Trulli" height= "40px"></img>
          </IconButton>
          <NavLink to='/' style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              textDecoration: 'none',
              color: 'black'
            }}
          >
            ของเด็ดเกษตรนนท์
          </Typography></NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page,index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <img src={process.env.PUBLIC_URL + "/image/karsetnont.png"} alt="Italian Trulli" height= "40px"></img>
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: 'none',
              color: 'black'
            }}
          >
            ของเด็ดเกษตรนนท์
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
            <NavLink to={page.path} style={{ textDecoration: 'none' }}>
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block'}}
              >
                <Typography textAlign="center" sx={{color: 'black'}}>{page.name}</Typography>
              </Button></NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}
               size="large"
               aria-label="account of current user"
               aria-controls="primary-search-account-menu"
               aria-haspopup="true"
               color="inherit">
                <AccountCircle />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <NavLink to={setting.path} style={{ textDecoration: 'none' }}><Typography textAlign="center" sx={{color: 'black'}}>{setting.name}</Typography></NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
