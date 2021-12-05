import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { apiUrl } from '../apiUrl';

function ListStudent() {

    const [s, setS] = useState();

    useEffect( () => {
        const fetchData = async () => {
            const res = await axios.get(apiUrl + "/students");
            setS(res.data);
            console.log(res.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {s && s.map((item, index) => (
                    <li>Học sinh ${item.name}, lớp {item.class}, trường {item.school} </li>
                ))}
            </ul>
        </div>
    )
}

export default ListStudent;