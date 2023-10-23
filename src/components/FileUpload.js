import React, { useState, useEffect } from 'react'
import { TextField } from "@mui/material";

function FileUpload({ formData, setFormData }) {
    const [currLocationJs, setCurrLocationJs] = useState({});
    useEffect(() => {
        getLocationJs();
    }, []);
    const getLocationJs = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            const { latitude, longitude } = position.coords;
            setCurrLocationJs({ latitude, longitude });
        });
    };
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
                value={currLocationJs.latitude}
                margin="normal"
                type={"text"}

                required
                onChange={(e) => {
                    setFormData({ ...formData, location: e.target.value });
                }}
            />

        </>
    )
}

export default FileUpload