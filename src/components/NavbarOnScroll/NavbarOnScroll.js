
import React from "react";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import {AppBar, Toolbar, Typography} from '@mui/material'


const NavbarOnScroll = (props) => {
    const trigger = useScrollTrigger({
        target: props.window ? window() : undefined,

      });

    return (
        <Slide appear={true} direction="down" in={trigger}>
            <AppBar>
            <Toolbar>
                <Typography variant="h6" component="div">
                Scroll to hide App bar
                </Typography>
            </Toolbar>
            </AppBar>
        </Slide>
    )
}

export default NavbarOnScroll