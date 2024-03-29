import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import searchIcon from '@material-ui/icons/Search'

import useStyles from './style';

const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor

                </Typography>

                <Box display="flex">
                    <Typography variant="h5" className={classes.title}>
                        Explore new places

                    </Typography>
                    {/*<Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <searchIcon />

                            </div>
                            <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                        </div>
                    {/*</Autocomplete> */}
                </Box>

            </Toolbar>

        </AppBar>


    );
}

export default Header;