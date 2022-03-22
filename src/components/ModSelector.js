import React from 'react'
import { useState } from 'react'
import Results from './Results'
import Mods from '../Mods.json'

function ModSelector() {
    const [selected, setSelected] = useState([])

    const style1 = {}
    const style2 = {backgroundColor: 'blue'}

    const handleChange = (e) => {
        if(e.target.checked){
            setSelected([...selected, e.target.value])
        } else {
            setSelected([...selected.filter(mod => mod !== e.target.value) ])
        }
    }
    return (
        <div>
            <h2 className='info'>Select your favorite mods</h2>
            <div className='mod-selector-container'>
                {Mods.map(item => {
                    return (
                        <div key={item} className='inputs'>
                            <input id={item} className="checked" type="checkbox" onClick={handleChange} value={item} /><label for={item} style={style1}>{item}</label>
                        </div>
                    )
                })}
            </div>
            <Results mod={selected}/>

        </div>
    )
}

export default ModSelector