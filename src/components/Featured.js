import React from 'react'
import { useState, useEffect } from 'react'

function Featured() {
    const url = "http://localhost:4000"
    const [results, setResults] = useState([])
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => setResults(json))
    }, [])
    console.log(results)
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

export default Featured