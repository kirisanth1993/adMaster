import './NewItemCreation.scss';
import React, { useEffect, useState } from 'react';
import { Grid, TextField, TextareaAutosize, Button } from '@material-ui/core';
import DropDown from '../common/DropDown';
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import { ChangeAdvertiseList } from '../../actions/ChangeAdvertiseList';

const NewItemCreation = (props) => {
    const dispatch = useDispatch();
    const {categoryList} = useSelector((state) => state);
    const {advertisementList} = useSelector((state) => state);
    
    const [title, setTitle] = useState("");
    const [isTitleError, setIsTitleError] = useState(false);
    const [ categoryOptions, setCategoryOptions ] = useState(categoryList.slice(1));
    const [ selectedCategory, setSelectedCategory ] = useState("");
    const [ isSelectedCategoryError, setIsSelectedCategoryError ] = useState(false);
    const [ description, setDescription ] = useState("");
    const [ isDescriptionError, setIsDescriptionError ] = useState(false);
    const [ imageLink, setImageLink ] = useState("");
    const [ isImageError, setIsImageError ] = useState(false);

    // category dropdown change action
    const categorySelectionAction = (event) => {
        setSelectedCategory(event.target.value);
        setIsSelectedCategoryError(false);
    }

    // new advertisement saving part
    const saveAction = () => {
        if(!title){
            setIsTitleError(true);
        }
        if(!selectedCategory){
            setIsSelectedCategoryError(true);
        }
        if(!description){
            setIsDescriptionError(true);
        }
        if(!imageLink){
            setIsImageError(true);
        }
        if(title && selectedCategory && description && imageLink){
            let newAdData = {
                id: advertisementList.length,
                title: title,
                category: selectedCategory,
                description: description,
                image: imageLink,
                isNew: true
            }
            advertisementList.unshift(newAdData);
            console.log("advertisementList", advertisementList);
            dispatch(ChangeAdvertiseList([...advertisementList]));
            props.closeAction();
        }
    }

    const handleUploadImg = (e) => {
        setIsImageError(false);
        let files = e.target.files;

        if (files && files[0].name.match(/\.(jpg|jpeg|png|gif)$/)) {
            const file = files && files[0];
            file && getBase64(file);
        } else {
            setIsImageError(true);
        }
    }

    // to convert into base 64
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };

    const onLoad = (fileString) => {
        setImageLink(fileString);
    };

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
                value={ title }
                onChange={ (e) => { setIsTitleError(false); setTitle(e.target.value); } }
                fullWidth    
                className="margin-block"
            />
            <DropDown
                id="CategorySelection"
                label="Category"
                selectedCategory={ selectedCategory }
                categorySelectionAction={ (e) => { categorySelectionAction(e); } }
                options={ categoryOptions }
                error={ isSelectedCategoryError }
                mainWrapper="margin-block"
            />
            <TextareaAutosize
                fullWidth
                minRows={20}
                maxRows={20}
                placeholder="Description"
                className={"margin-block text-area-class " + (isDescriptionError && " error-text-area")}
                value={ description }
                onChange={ (e) => { setDescription(e.target.value); setIsDescriptionError(false); } }
            />
            <input
                onChange={ (e) => handleUploadImg(e)}
                name="summaryImg"
                accept="image/*"
                hidden={true}
                type="file"
                id="img-upload"
            />
            <Grid className="margin-block">
                <label className={"upload-text " + (isImageError && "error-upload-text")} htmlFor="img-upload">UPLOAD PHOTO</label>
            </Grid>

            <Button 
                variant="contained" 
                color="primary" 
                className="save-btn"
                onClick={ () => saveAction() }
                >
                save and publish
            </Button>
        </Grid>
    );
}

export default NewItemCreation;