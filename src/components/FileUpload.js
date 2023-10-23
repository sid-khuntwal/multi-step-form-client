import React from 'react'
import { TextField } from "@mui/material";

function FileUpload({ formData, setFormData }) {
    return (
        <>
            <TextField
                placeholder="Upload"

                margin="normal"
                type={"file"}

                required

            />

            <TextField
                placeholder="Location"
                value={formData.username}
                margin="normal"
                type={"text"}

                required
                onChange={(e) => {
                    setFormData({ ...formData, filename: e.target.value });
                }}
            />

        </>
    )
}

export default FileUpload