import { useState, useEffect } from "react"
import axios from 'axios';

function List() {
    const [ list, setList ] = useState([])
    const [ param, setParam ] = useState({
        "description" : "",
        "location": "",
        "full_time": true,
        "page": 1
    })

    useEffect(() => {
        onLoadData()
    }, [])

    const onFilter = () => {
        onLoadData()
    }

    const onLoadData = () => {
        axios.post(`http://localhost:8000/login`, { user })
        .then(res => {
            setList(current => [...current, res.data.content])
        })
    }

    return (
        <>
            <h1>List Job</h1>
            <ul>
                {
                    list.map((item) => {
                        return (
                            <li>
                                <a href={`/detail/${item.id}`}>
                                    <h4>{{ item.title }}</h4>
                                    <small>{{ item.company }}</small> - <small>{{ item?.type }}</small>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default List;
