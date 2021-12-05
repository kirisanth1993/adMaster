import { Grid, Button, Box, Paper, Checkbox  } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './ListView.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const SingleAdvertisement = (props) => {
    const {adDetail, checkboxChange, infoPage, itemClickAction} = props;
    const [textCount, setTextCount] = useState(350);

    useEffect(() => {
        setTextCount(adDetail.isFav ? 200 : 350)
    },[adDetail.isFav]);

    return(
        <Paper className={ (!infoPage && "single-ad-container ") + (!infoPage && adDetail.isFav && "small-single-ad-container") }>
            <Grid className="fav-img-wrapper">
                <img 
                    className={ "single-ad-img " + (infoPage && "info-page-single-ad-img")} 
                    src={ !adDetail.isNew ? require( "../../assets/images/" + adDetail.image).default : adDetail.image }
                    onClick={ () => { !infoPage && itemClickAction(adDetail); } }
                />
                {
                    // fav icon
                    !infoPage &&
                    <Grid className="fav-checkbox">
                        <Checkbox
                            icon={ <FavoriteBorderIcon/> }
                            checkedIcon= { <FavoriteIcon/> }
                            checked={ adDetail.isFav }
                            onChange={ (e) => { checkboxChange(e.target.checked, adDetail) } }
                            color="primary"
                        />
                    </Grid>
                }
            </Grid>
            <Grid className="single-ad-inner-block" onClick={ () => { !infoPage && itemClickAction(adDetail); } }>
                <Grid className="single-ad-category">{adDetail.category}</Grid>
                <Grid className={"single-ad-title " + (infoPage && "info-page-single-ad-title")}>{adDetail.title}</Grid>
                <Grid className={ "single-ad-description "  + (infoPage && "info-page-single-ad-description")}>
                    { ((adDetail.description.length <= textCount) || infoPage) ? adDetail.description : adDetail.description.slice(0, textCount) + " . . ." }
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SingleAdvertisement;