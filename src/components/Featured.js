import React from 'react'
import Modpacks from '../Modpacks.json'

function Featured() {

    return (
        <div className="results-container">
            {Modpacks.map(item => {
                return (
                    <div className="results-card" >
                        <a href={item.link} target="_blank"><img src={item.thumbnail} key={item.id}/></a>
                    </div>
                )
            })}
        </div>

    )
}

export default Featured