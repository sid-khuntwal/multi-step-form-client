import React, { useState } from "react";
import BasicInfo from "../components/BasicInfo";
import DropDown from "../components/DropDown";
import FileUpload from "../components/FileUpload";
import { Box, Typography, TextField, Button } from "@mui/material";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneno: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        filename: "",
        location: "",
    });

    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <BasicInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <FileUpload formData={formData} setFormData={setFormData} />;
        } else {
            return <DropDown formData={formData} setFormData={setFormData} />;
        }
    };

    //form handle
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // try {
        //     const { data } = await axios.post("https://adorable-garters-moth.cyclic.app/api/v1/user/register", {
        //         username: inputs.name,
        //         email: inputs.email,
        //         password: inputs.password,
        //     });
        //     if (data.success) {
        //         toast.success("User Register Successfully");
        //         navigate("/login");
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    };

    return (
        <>

            <div className="form">
                <div className="progressbar">
                    <div
                        style={{
                            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
                        }}
                    ></div>
                </div>
                <Box maxWidth={600}
                    maxHeight={600}
                    display="flex"
                    flexDirection={"column"}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    boxShadow="10px 10px 20px #ccc"
                    padding={3}
                    borderRadius={5}>

                    <Typography
                        variant="h5"
                        sx={{ textTransform: "uppercase" }}

                        textAlign="center"
                    >
                        {FormTitles[page]}
                    </Typography>

                    <div className="body">{PageDisplay()}</div>



                    <div className="footer">
                        <button
                            disabled={page === 0}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Prev
                        </button>
                        <button
                            onClick={(e) => {
                                if (page === FormTitles.length - 1) {
                                    handleSubmit(e);
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                        >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>

                </Box>
            </div>
        </>
    );
}

export default Form;
