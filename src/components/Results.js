import { React, useState, useEffect } from "react";
import Modpacks from '../Modpacks.json'

const Results = (selected) => {

    return (
        <div className="results-container">
            {Modpacks.map(item => {
                if(selected.mod.every(i => item.mods.includes(i))){
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