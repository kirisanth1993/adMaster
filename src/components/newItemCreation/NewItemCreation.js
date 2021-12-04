import './NewItemCreation.scss';
import React, { useEffect, useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import DropDown from '../common/DropDown';
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';

const NewItemCreation = (props) => {
    const {categoryList} = useSelector((state) => state);
    
    const [title, setTitle] = useState("");
    const [isTitleError, setIsTitleError] = useState(false);
    const [ categoryOptions, setCategoryOptions ] = useState(categoryList.slice(1));
    const [ selectedCategory, setSelectedCategory ] = useState("all");
    const [ isSelectedCategoryError, setIsSelectedCategoryError ] = useState(false);

    const categorySelectionAction = (event) => {
        setSelectedCategory(event.target.value);
        setIsSelectedCategoryError(false);
    }

    return(
        <Grid className="drawer-main-wrapper">
            <Grid container display="flex" justifyContent="space-between" alignItems="center" className="margin-block">
                <Grid className="new-word">New Classified</Grid>
                <Grid className="close-icon">
                    <CloseIcon onClick={() => { props.closeAction() }}/>
                </Grid>
            </Grid>
            <TextField 
                error={ isTitleError }
                id="outlined-basic" 
                label="Title" 
                variant="outlined" 
                value={ (e) => { isTitleError(false); setTitle(e.target.value); } }
                fullWidth    
                className="margin-block"
            />
            <DropDown
                id="Category"
                label="Category"
                selectedCategory={ selectedCategory }
                categorySelectionAction={ (e) => { categorySelectionAction(e); } }
                options={ categoryOptions }
                error={ isSelectedCategoryError }
            />
        </Grid>
    );
}

export default NewItemCreation;