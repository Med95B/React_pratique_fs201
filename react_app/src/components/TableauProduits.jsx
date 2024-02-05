import { useState } from "react"
import FormProduit from './FormProduit' 

function TableauProduits(props){

    const [ajouter,setAjouter]=useState(false)

    let btnAjouter=()=>{
        setAjouter(true)
    }
console.log(props.produits);
    return(
            <div className="mt-4">
                  <div>
                   {ajouter&&<FormProduit enregistrer={props.enregistrer} />}
                </div>
                 { props.produits.length===0 ? <><p>Pas de Produits</p>
                            <button className="btn btn-success" onClick={btnAjouter}>Ajouter Produit</button>
                          </>
                        :  <>
                            <button className="btn btn-success mb-3" onClick={btnAjouter}>Ajouter Produit</button>
                            <table className="table table-secondary border border-2 border-dark text-center">
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Type</td>
                                    <td>Nom</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            {
                                props.produits.map((produit,i)=>{
                                 return   <tbody key={produit.id}>
                                    <tr>
                                    <td>
                                            {produit.id}
                                        </td>
                                        <td>
                                            {produit.type}
                                        </td>
                                        <td>
                                        {produit.nom}
                                        </td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>{props.supprimer(produit.id)}}>Supprimer</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                })
                            }
                        </table> 
                               </>
}  
                        </div>
    )
}

export default TableauProduits