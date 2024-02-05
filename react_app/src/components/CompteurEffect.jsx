import React, { useEffect, useState } from "react"

function CompteurEffect(){

    const [valeur,setValeur]=useState(0) 

    let incrementer=()=>setValeur(valeur+1) 
    let decrementer=()=>setValeur(valeur-1)

    useEffect(()=>{console.log(valeur)},[valeur]) 

    return(
        <div className="m-5">             
            <h1>compteur: {valeur}</h1>             
            <input type="button" value="incrementer" onClick={incrementer}/>             
            <input type="button" value="decrementer" onClick={decrementer}/>        
        </div>
    )
    
}
export default CompteurEffect