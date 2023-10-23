import React, { useState } from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Button,
    Typography,
    Tabs
} from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {

    const [value, setValue] = useState();

    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">Multi-Step Form</Typography>
                    {(
                        <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
                            <Tabs
                                textColor="inherit"
                                value={value}
                                onChange={(e, val) => setValue(val)}
                            >
                            </Tabs>
                        </Box>
                    )}
                    <Box display={"flex"} marginLeft="auto">
                        {(
                            <>
                                <Button
                                    sx={{ margin: 1, color: "white" }}
                                    LinkComponent={Link}
                                    to="/login"
                                >
                                    Login
                                </Button>
                                <Button
                                    sx={{ margin: 1, color: "white" }}
                                    LinkComponent={Link}
                                    to="/"
                                >
                                    Register
                                </Button>
                            </>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;
