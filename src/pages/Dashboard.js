import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Dashboard = () => {

    const [userdata, setUserData] = useState([]);

    const handleGetData = async () => {
        try {
            const id = localStorage.getItem("userId");
            const { data } = await axios.get(`https://adorable-garters-moth.cyclic.app/api/v1/user/userdata/${id}`);
            if (data?.success) {
                const dataArr = data?.data;
                console.log(dataArr);
                setUserData(dataArr);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleGetData();
        // console.log(userdata);
    }, [])

    return (
        <>
            <div>
                {
                    userdata.map((data) => {
                        return (
                            data.username
                        );
                    })
                }
            </div>
        </>
    )
}

export default Dashboard