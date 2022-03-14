import React from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import { useState, useEffect } from 'react'


function ModSelector() {
    const [selected, setSelected] = useState([])

    const handleChange = (e) => {
        setSelected([e.target.value])
        console.log(selected)
    }

    return (
        <div className='mod-selector-container'>
            <div>
                <button onClick={handleChange} value="Applied Energistics">Applied Energistics</button>
                <button onClick={handleChange} value="Tinkers Construct">Tinkers Construct</button>
                <button onClick={handleChange} value="Thermal Expansion">Thermal Expansion</button>
                <button onClick={handleChange} value="TechReborn">TechReborn</button>
                <button onClick={handleChange} value="RFTools">RFTools</button>
                <button onClick={handleChange} value="QuantumStorage">QuantumStorage</button>
                <p>{selected}</p>
            </div>
        </div>
    )
}

export default ModSelector