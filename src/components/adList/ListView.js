import './ListView.scss';
import { Grid, Button, Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DropDown from '../common/DropDown';
import { useDispatch, useSelector } from "react-redux";
import SingleAdvertisement from './SingleAdvertisement';
import { ChangeAdvertiseList } from '../../actions/ChangeAdvertiseList';
import { ChangeCategory } from '../../actions/ChangeCategory';

const ListView = (props) => {
    // redux saving action
    const dispatch = useDispatch();
    // get data from redux store
    const {categoryList} = useSelector((state) => state);
    const {advertisementList} = useSelector((state) => state);
    const {category} = useSelector((state) => state);    
    const [ selectedCategory, setSelectedCategory ] = useState("all");
    const [ categoryOptions, setCategoryOptions ] = useState(categoryList);
    const [ displayAdvertisementList, setDisplayAdvertisementList ] = useState([]);

    const categorySelectionAction = (event) => {
        setSelectedCategory(event.target.value);
        dispatch(ChangeCategory(event.target.value));
    }

    useEffect(() => {
        setSelectedCategory(category);
    },[]);

    // filtering action
    useEffect(() => {
        let filteredAdList = advertisementList.filter((singleAd) => {
            if((selectedCategory === "all") || (selectedCategory === singleAd.category)){
                if( ((props.currentPageId === 1) && singleAd.isFav) || (props.currentPageId === 0)){
                    return(singleAd);
                }
            }
        });
        setDisplayAdvertisementList(filteredAdList);
    },[advertisementList, props.currentPageId, selectedCategory]);

    const favChangeAction = (value, item) => {
        advertisementList.map((singleAd) => {
            if(item.id === singleAd.id){
                singleAd.isFav = value;
            }
        });
        dispatch(ChangeAdvertiseList([...advertisementList]));
    }

    return(
        <Grid>
            {/* category selection and new btn */}
            <Grid container>
                <Grid item xs={2}>
                    <DropDown
                        id="Category"
                        label="Category"
                        selectedCategory={ selectedCategory }
                        categorySelectionAction={ (e) => { categorySelectionAction(e); } }
                        options={ categoryOptions }
                    />
                </Grid>
                <Grid item xs={10} container justifyContent={"flex-end"}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className="new-btn"
                            onClick={ () => props.newBtnAction() }
                            >
                            New Classified
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            {/* list view */}
            <Grid container className="advertisement-list-block" spacing={3} display="flex" justifyContent="space-between">
                {
                    displayAdvertisementList &&
                    displayAdvertisementList.map((SingleAdvertisementData, SingleAdvertisementDataIndex) => {
                        return(
                            <Grid item className="singleBlock" key={ SingleAdvertisementDataIndex }>
                                {/*  single component for each ads */}
                                <SingleAdvertisement 
                                    adDetail={ SingleAdvertisementData }
                                    checkboxChange={ (value, item) => favChangeAction(value, item) }
                                    itemClickAction={ (ad) => { props.adClickAction(ad) } }
                                />
                            </Grid>
                        );
                    })
                }
                {
                    // error message
                   displayAdvertisementList && displayAdvertisementList.length === 0 &&
                   <Grid container display="flex" justifyContent="center" className="nodata">No Data Found</Grid>
                }
                

            </Grid>

        </Grid>

    );
}
export default ListView;