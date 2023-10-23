import React from 'react';
import { Box, Typography, TextField, Button, } from "@mui/material";

function BasicInfo({ formData, setFormData }) {
    return (
        <>


            <TextField
                placeholder="User Name"
                value={formData.username}
                margin="normal"
                type={"text"}

                required
                onChange={(e) => {
                    setFormData({ ...formData, username: e.target.value });
                }}
            />

            <TextField
                placeholder="Email"
                value={formData.email}
                margin="normal"
                type={"email"}
                required
                onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                }}
            />

            <TextField
                placeholder="Phone No"
                value={formData.phoneno}
                margin="normal"
                type={"text"}
                required
                onChange={(e) => {
                    setFormData({ ...formData, phoneno: e.target.value });
                }}
            />

            <TextField
                placeholder="Address Line 1"
                value={formData.address}
                margin="normal"
                type={"text"}
                required
                onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                }}
            />

            <TextField
                placeholder="City"
                value={formData.city}
                margin="normal"
                type={"text"}
                required
                onChange={(e) => {
                    setFormData({ ...formData, city: e.target.value });
                }}
            />

            <TextField
                placeholder="State"
                value={formData.state}
                margin="normal"
                type={"text"}
                required
                onChange={(e) => {
                    setFormData({ ...formData, state: e.target.value });
                }}
            />

            <TextField
                placeholder="Pin Code"
                value={formData.email}
                margin="normal"
                type={"text"}
                required
                onChange={(e) => {
                    setFormData({ ...formData, pincode: e.target.value });
                }}
            />

            <TextField
                placeholder="Country"
                value={formData.country}
                margin="normal"
                type={"text"}
                required
                onChange={(e) => {
                    setFormData({ ...formData, country: e.target.value });
                }}
            />


        </>
    )
}

export default BasicInfo