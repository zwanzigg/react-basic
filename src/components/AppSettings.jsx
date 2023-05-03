import React, {useContext} from "react";
import {CurrentUserContext} from "../helpers/AppProviders";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

export const AppSettings = ({settings, handleClickNavMenu}) => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        setCurrentUser(null);
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const {setCurrentUser} = useContext(CurrentUserContext);

    return (
        <Box sx={{flexGrow: 0}}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"/>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{mt: '45px'}}
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
                {settings.map(({title, route}, i) => (
                    <MenuItem key={i} onClick={() => handleClickNavMenu(route)}
                    >
                        <Typography textAlign="center">{title}</Typography>
                    </MenuItem>
                ))}
                <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    )
}