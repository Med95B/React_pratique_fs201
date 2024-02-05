/*
import { useState } from "react"


function ChercheBar(props){
    const[motCle,setMotCle]=useState('')

    let Rechercher=()=>{
            props.RechercherSubmit(motCle)

    }
   
    return(
        <div className="ms-4 mb-4 bg-warning p-3 border border-2 border-dark rounded-4">
            <h3>Composant ChercheBar</h3>
            <span>Entrer le mot clé de recherche :</span><br />
            <input type="text" value={motCle} onChange={(e)=>setMotCle(e.target.value.toUpperCase())}/><br />
            <button className="btn btn-secondary my-2 me-3" onClick={Rechercher}>Rechercher</button>
        </div>
       
    )
}
*/

import { useState } from "react"


function ChercheBar(props){
    const[motCle,setMotCle]=useState('')

    let Rechercher=()=>{
            props.RechercherSubmit(motCle)

    }
   
    return(
        <div className="ms-4 mb-4 bg-warning p-3 border border-2 border-dark rounded-4">
            <h3>Composant ChercheBar</h3>
            <span>Entrer le mot clé de recherche :</span><br />
            <input type="text" value={motCle} onChange={(e)=>setMotCle(e.target.value.toUpperCase())}/><br />
            <button className="btn btn-secondary my-2 me-3" onClick={Rechercher}>Rechercher</button>
        </div>
       
    )
}
export default ChercheBar
