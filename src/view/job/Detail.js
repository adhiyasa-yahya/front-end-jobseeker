import { useState, useEffect } from "react"
import axios from 'axios';
import { NavLink, useLocation } from "react-router-dom";

function Detail(id) {
    const [content, setContent ] = useState([])

    useEffect(() => {
        getDetail(id)
    }. [])

    const getDetail = (id) => {
        const tokenData = JSON.parse(localStorage.getItem("user"));

        axios.get(`http://localhost:8000/detail/${id}` , {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + tokenData,
            },
        })
        .then(res => {
            setContent(res.data.content)
        })
    }

    return (
        <>
            <small>{{content.type}}/{{content.location}}</small>
            <h1>{{content.title}}</h1>
            <article>
                {{content.description}}
            </article>
        </>
    )
}

export default Detail;
