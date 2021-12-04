import './Layout.scss';
import { Route } from "react-router-dom";
import { Grid, Tabs, Tab, Paper, Button, Drawer ,List} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ListView from '../adList/ListView';
import Info from '../adInfo/Info';
import NewItemCreation from '../newItemCreation/NewItemCreation';

const Layout = () => {
    const [ tabValue, setTabValue ] = useState(0);
    const [ currentAd, setCurrentAd ] = useState({});
    const [ currentPage, setCurrentPage ] = useState("list");
    const [ isNewDrawer, setIsNewDrawer ] = useState(false);

    useEffect(() => {
        if(currentAd.title){
            setCurrentPage("info");
        }else{
            setCurrentPage("list");
        }
    }, [currentAd]);
    
    return(
        <Grid>
            <Drawer 
                anchor="right" 
                open={isNewDrawer} 
                // onClose={() => { setIsNewDrawer(false) }}
                >
                <NewItemCreation
                    closeAction={ () => { setIsNewDrawer(false) } }
                />
            </Drawer>
            <Paper className="headerBlock">
                <Grid container display="flex" justifyContent="space-between" alignItems="center">
                    <Grid className="appTitle">Classified Ads</Grid>
                    <Tabs
                        value={ tabValue }
                        indicatorColor="primary"
                        // textColor="primary"
                        onChange={ (e, currentTab) => { setTabValue(currentTab); }}
                        // aria-label="disabled tabs example"
                    >
                        <Tab label="Home" />
                        <Tab label="Favourites" />
                    </Tabs>
                </Grid>
            </Paper>
            <Grid className="innerPage">
                {
                    currentPage === "list" &&
                    <ListView
                        currentPageId={ tabValue }
                        adClickAction={ (item) => { setCurrentAd(item) } }
                        newBtnAction={ () => { setIsNewDrawer(true) } }
                    />
                }
                {
                    currentPage === "info" &&
                    <Info
                        ad={currentAd}
                        backClickAction={ () => { setCurrentPage("list"); setCurrentAd({}) } }
                    />
                }


            </Grid>
            {/* <Grid>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                </Drawer>
            </Grid> */}
        </Grid>

    );
}
export default Layout;