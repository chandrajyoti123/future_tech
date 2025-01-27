import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    List,
    ListItem,
    ListItemText,
    Typography,
    Box,
    Button,
} from '@mui/material';
import { Constants } from '../shared/constants';
import { BORDER_STYLE } from '../shared/constants';

const Navbar = () => {
    const [activePath, setActivePath] = useState('#');
    const menuList = [
        { name: 'Home', path: '#' },
        { name: 'News', path: '#news' },
        { name: 'Podcasts', path: '#podcasts' },
        { name: 'Resources', path: '#resources' },
    ];

    const handleMenuClick = (path) => {
        setActivePath(path);
    };

    return (
        <Box bgcolor="secondary.main" px="162px" py="10px">
            <AppBar
                color="transparent"
                position="static"
                elevation={0}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Toolbar disableGutters sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Constants.customImages.Logo} alt="Blok" width="50px" />
                    <Typography variant="h4" ml={2}>
                        Future Tech
                    </Typography>
                </Toolbar>


                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 2,
                        px: 2,
                    }}
                >
                    {menuList.map((item, index) => (
                        <ListItem
                            key={index}
                            onClick={() => handleMenuClick(item.path)}
                            sx={{
                                py: '10px',
                                px: '26px',
                                border:
                                    activePath === item.path
                                        ? BORDER_STYLE || '2px solid primary.main'
                                        : 'none',
                                borderRadius: '10px',
                                color:
                                    activePath === item.path ? 'primary.contrastText' : 'text.secondary',
                                cursor: 'pointer',
                                backgroundColor:
                                    activePath === item.path ? 'primary.main' : 'transparent',
                                '&:hover': {
                                    backgroundColor: activePath === item.path ? 'primary.main' : 'rgba(0, 0, 0, 0.1)',
                                },
                            }}
                        >
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textAlign: 'center',
                                            color: activePath === item.path ? 'primary.contrastText' : 'text.secondary',
                                        }}
                                    >
                                        {item.name}
                                    </Typography>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
                <Button sx={{ bgcolor: "warning.main", py: "14px", px: "20px", borderRadius: "10px" }}>
                    <Typography variant='body1' color='rgba(20, 20, 20, 1)' fontWeight={500}>Contact Us</Typography>
                </Button>
            </AppBar>
        </Box>
    );
};

export default Navbar;
