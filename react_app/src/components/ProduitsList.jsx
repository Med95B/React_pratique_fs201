/*
import { useState } from "react"
import TableauProduits from "./TableauProduits"

function ProduitsList(props){

    const [afficher,setAfficher]=useState(false)

    let btnAfficher=()=>{
        setAfficher(prev=>!prev)
    }

    return(
        <div className="ms-4 bg-warning p-3 border border-2 border-dark rounded-4">
            <h3>Composant ProduitsList</h3>
            <button className="btn btn-secondary my-2 me-3" onClick={btnAfficher}>{afficher?'Masquer Produits':'Afficher Produits'}</button>
            <div>
                   {afficher&&<TableauProduits produits={props.produits} supprimer={props.supprimer}
                        enregistrer={props.enregistrer}
                   />}
            </div>
        </div>
       
    )
}
*/

import { useState } from "react"
import TableauProduits from "./TableauProduits"

function ProduitsList(props){

    const [afficher,setAfficher]=useState(false)

    let btnAfficher=()=>{
        setAfficher(prev=>!prev)
    }

    return(
        <div className="ms-4 bg-warning p-3 border border-2 border-dark rounded-4">
            <h3>Composant ProduitsList</h3>
            <button className="btn btn-secondary my-2 me-3" onClick={btnAfficher}>{afficher?'Masquer Produits':'Afficher Produits'}</button>
            <div>
                   {afficher&&<TableauProduits produits={props.produits} supprimer={props.supprimer}
                        enregistrer={props.enregistrer}
                   />}
            </div>
        </div>
       
    )
}
export default ProduitsList