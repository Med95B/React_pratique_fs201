/*
import { useState } from "react"

function FormProduit(props){

    const[produit,setProduit]=useState({type:'',nom:''})

let Enregistrer=(e)=>{
    e.preventDefault()
    console.log(produit);
    props.enregistrer(produit)
}

    return(
        <form className="form form-control mb-3" onSubmit={(e)=>{Enregistrer(e)}}>
          

          
            <label htmlFor="type" className="form-label">Type </label>
            <input type="text" name="type" className="form-text col-3 me-2"
            onChange={(e)=>{setProduit(prev=>({...prev,type:e.target.value}))}}
            value={produit.type}
            />
     
            <label htmlFor="nom" className="form-label">Nom </label>
            <input type="text" name="nom" className="form-text col-3 me-2"
             onChange={(e)=>{setProduit(prev=>({...prev,nom:e.target.value}))}}
             value={produit.nom}
             />
        
           
           
            <button className="btn btn-sm btn-primary col-3 ms-2">Enregitrer</button>
            
        </form>
    )
}
*/
import { useState } from "react"

function FormProduit(props){

    const[produit,setProduit]=useState({type:'',nom:''})

let Enregistrer=(e)=>{
    e.preventDefault()
    console.log(produit);
    props.enregistrer(produit)
}

    return(
        <form className="form form-control mb-3" onSubmit={(e)=>{Enregistrer(e)}}>
          

          
            <label htmlFor="type" className="form-label">Type </label>
            <input type="text" name="type" className="form-text col-3 me-2"
            onChange={(e)=>{setProduit(prev=>({...prev,type:e.target.value}))}}
            value={produit.type}
            />
     
            <label htmlFor="nom" className="form-label">Nom </label>
            <input type="text" name="nom" className="form-text col-3 me-2"
             onChange={(e)=>{setProduit(prev=>({...prev,nom:e.target.value}))}}
             value={produit.nom}
             />
        
           
           
            <button className="btn btn-sm btn-primary col-3 ms-2">Enregitrer</button>
            
        </form>
    )
}
export default FormProduit