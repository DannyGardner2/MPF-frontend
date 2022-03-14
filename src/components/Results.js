import { React, useState, useEffect } from "react";
import axios from 'axios'

const Results = () => {
    const url = "http://localhost:4000"
    const [results, setResults] = useState([])
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => setResults(json))
    },[])
    return (
        <div className="results-container">
            {results.map(item => {
                return (
                    <div className="results-card">
                        <img src={item.thumbnail}/>
                    </div>
                )
            })}

        </div>
    )
}

export default Results