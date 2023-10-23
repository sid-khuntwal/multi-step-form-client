import React from 'react'
import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";
function DropDown({ formData, setFormData }) {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Options</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                >
                    <MenuItem value={10}>one</MenuItem>
                    <MenuItem value={20}>Two</MenuItem>
                    <MenuItem value={30}>Three</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default DropDown