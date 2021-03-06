import React from 'react'
import PropTypes from 'prop-types';
import {Typography, Grid} from '@material-ui/core';
import { IconContext } from 'react-icons/lib';
import IconState from '../IconState';





const ForecastItem = ({weekDay, hour, state, temperature}) => {
    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            <Grid item>
                <Typography>{weekDay}</Typography>
            </Grid>
            <Grid item>
                <Typography>{hour}</Typography>
            </Grid>
            <Grid item>
            <IconContext.Provider value= {{size: '3em'}}>
                <IconState state={state}/>
            </IconContext.Provider>
            </Grid>
            <Grid item>
                <Typography>{temperature}°</Typography>
            </Grid>

        </Grid >
    )
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,//ptsr
    hour: PropTypes.number.isRequired,//ptnr
    state: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
}

export default ForecastItem
