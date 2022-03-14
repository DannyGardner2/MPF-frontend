import React from 'react'
import { useState, useEffect } from 'react'
import Results from './Results'

function ModSelector() {
    const [selected, setSelected] = useState([])

    // const handleChange = (e) => {
    //     setSelected([...selected, e.target.value])
    //     console.log(selected)
    // }

    const handleChange = (e) => {
        if(e.target.checked){
            setSelected([...selected, e.target.value])
        } else {
            setSelected([...selected.filter(mod => mod !== e.target.value) ])
        }
    }

    return (
        <div>
            <div className='mod-selector-container'>
                <div>
                    <button onClick={handleChange} value="Applied Energistics 2">Applied Energistics</button>
                    <input type="checkbox" onClick={handleChange} value="RFTools"/>
                    <label>RFTools</label>
                    <button onClick={handleChange} value="Tinkers Construct">Tinkers Construct</button>
                    <button onClick={handleChange} value="Thermal Expansion">Thermal Expansion</button>
                    <button onClick={handleChange} value="TechReborn">TechReborn</button>
                    <button onClick={handleChange} value="RFTools">RFTools</button>
                    <button onClick={handleChange} value="QuantumStorage">QuantumStorage</button>
                    <button onClick={handleChange} value="AgriCraft">AgriCraft</button>
                </div>
            </div>
            <Results mod={selected}/>

        </div>
    )
}

export default ModSelector

{/* <div>
<button onClick={handleChange} value="Applied Energistics 2">Applied Energistics</button>
<input type="checkbox" onClick={handleChange} value="RFTools"/>
<label>RFTools</label>
<button onClick={handleChange} value="Tinkers Construct">Tinkers Construct</button>
<button onClick={handleChange} value="Thermal Expansion">Thermal Expansion</button>
<button onClick={handleChange} value="TechReborn">TechReborn</button>
<button onClick={handleChange} value="RFTools">RFTools</button>
<button onClick={handleChange} value="QuantumStorage">QuantumStorage</button>
<button onClick={handleChange} value="AgriCraft">AgriCraft</button>
</div> */}