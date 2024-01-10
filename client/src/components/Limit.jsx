//import Slider from 'react-rangeslider'
import { useState } from 'react';
import "../App.css"

export default function Limit ({setSelectValue, selectValue}) {
    const [volume, setVolume] = useState(10);
    const handleOnChange = (e) =>{
        setVolume(e.target.value);
        setSelectValue(volume)
        //alert("Hi");
    }
    
    return <div className="Slider">
        <input type="range" onChange={ handleOnChange }  min="0" max="20" value={selectValue || 10}/>
        Value : {selectValue}
    </div>
}