import { React, useState, useEffect } from "react";

const Results = (selected) => {
    const url = "http://localhost:4000"
    const [results, setResults] = useState([])
    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((json) => setResults(json))
    },[])

    console.log(selected.mod)
    return (
        <div className="results-container">
            {results.map(item => {
                if(item.mods.includes(`${selected.mod}`)){
                    return (
                        <div className="results-card">
                            <a href={item.link} target="_blank"><img src={item.thumbnail}/></a>
                        </div>
                    )
                } else if(selected.mod == ('')){
                    return (
                        <div className="results-card">
                            <a href={item.link} target="_blank"><img src={item.thumbnail}/></a>
                        </div>
                    )
                }
            })}
        
        </div>
    )
}

export default Results