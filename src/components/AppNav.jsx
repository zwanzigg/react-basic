import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from 'react-router-dom';
import {CurrentUserContext} from "../helpers/AppProviders";
import {SwitchTheme} from "./SwitchTheme";
import {AppSettings} from "./AppSettings";

export const AppNav = ({pages, settings}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const {currentUser} = useContext(CurrentUserContext);

    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleClickNavMenu = (route) => {
        handleCloseNavMenu();
        navigate(route);
    };

    return (
        <Toolbar disableGutters>
            <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: {xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                    color: '#fff'
                }}
            >
                SHREDITION
            </Typography>

            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom', horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top', horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: {xs: 'block', md: 'none'},
                    }}
                >
                    {pages.map(({title, route}, i) => (
                        <MenuItem key={i} onClick={() => handleClickNavMenu(route)}>
                            <Typography textAlign="center">{title}</Typography>
                        </MenuItem>))}
                </Menu>
            </Box>
            <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
            <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                    mr: 2,
                    display: {xs: 'flex', md: 'none'},
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    textDecoration: 'none',
                }}
            >
                SHRED
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map(({title, route}, i) => (<Button
                    key={i}
                    onClick={() => handleClickNavMenu(route)}
                    sx={{my: 2, color: 'white', display: 'block'}}
                >
                    {title}
                </Button>))}
            </Box>
            <SwitchTheme/>
            {currentUser && <AppSettings settings={settings} handleClickNavMenu={handleClickNavMenu}/>}
        </Toolbar>
    );
}

