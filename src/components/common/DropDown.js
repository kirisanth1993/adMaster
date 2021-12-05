import { Grid, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';

const DropDown = (props) => {
    return(
        <FormControl variant="outlined" fullWidth className={ props.mainWrapper }>
            <InputLabel error={props.error} id="demo-simple-select-outlined-label">{ props.label }</InputLabel>
            <Select
                // labelId="demo-simple-select-outlined-label"
                id={ props.id }
                value={ props.selectedCategory }
                onChange={ (e) => { props.categorySelectionAction(e); } }
                label={ props.label }
                error={props.error}
                
            >
                {
                    props.options && props.options.map((singleOption, singleOptionIndex) => {
                        return(
                            <MenuItem key={singleOptionIndex} value={ singleOption.id }>{ singleOption.name }</MenuItem>
                        );
                    })
                }
            </Select>
        </FormControl>
    );
}

export default DropDown;