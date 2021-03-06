import React, { useMemo } from 'react'
import PropTypes from 'prop-types';
import {IconContext} from 'react-icons';
import {WiDaySunny} from 'react-icons/wi';
import {Grid, AppBar, Toolbar, IconButton,Link, Typography} from '@material-ui/core'
//React Router
import {Link as LinkRouter} from 'react-router-dom'

const AppFrame = ({children}) => {
    const IconSize = useMemo(() => ({size: "2em"}), []);
    return (
        <Grid  container justifyContent="center">
                <AppBar position="static">
                        <Toolbar variant="dense">
                                <IconButton color="inherit" aria-label="menu">
                                    <Link component={LinkRouter} to ="/main" color="inherit" aria-label="menu">
                                        <IconContext.Provider value={IconSize}>
                                            <WiDaySunny/>
                                            
                                        </IconContext.Provider>
                                    </Link>
                                    </IconButton>
                                    <Typography variant="h6" color="inherit">
                                        Weather App
                                    </Typography>
                        </Toolbar>
                </AppBar>
                <Grid item 
                        xs={12}
                        md={11}
                        md={10}
                        lg={8}
                >
                { children }
                </Grid>
        </Grid>
    )
}

AppFrame.propTypes = {
children: PropTypes.node //hace referencia a cualquier tipo de hijo
}

export default AppFrame
