import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import { apiUrl } from '../apiUrl';

function Student() {

    const [student, setStudent] = useState();
    const [message, setMessage] = useState("");
    const location = useLocation();
    const s = location.pathname.split("/")[2]
    console.log(s);

    useEffect(async () => {
        const fetchData = async () => {
            const res = await axios.get(apiUrl + `/student/${s}`);
            if (res.data.status === true) {
                setStudent(res.data.data);
            } else {
                setMessage(res.data.message)
            }
            console.log(res.data);
        }
        fetchData();
    }, []);
    return (
        <div>
            {
                message === "" ?
                <>
                    <p>Thông tin học sinh</p>
                    <p>Học sinh {student?.name}, lớp {student?.class}, trường {student?.school} </p>
                </> :
                <p>{message}</p>
            }
        </div>
    )
}

export default Student;