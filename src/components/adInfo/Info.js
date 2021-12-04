import './Info.scss';
import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import SingleAdvertisement from '../adList/SingleAdvertisement';

const Info = (props) => {
    return(
        <Grid container>
            <Grid xs={3} container display="flex" justifyContent="center">
                <KeyboardBackspaceIcon
                    className="backArrow"
                    onClick={ () => { props.backClickAction() } }
                />
            </Grid>
            <Grid xs={5}>
                <SingleAdvertisement
                    adDetail={ props.ad }
                    infoPage={ true }
                />
            </Grid>
            
            
        </Grid>
    );
}

export default Info;