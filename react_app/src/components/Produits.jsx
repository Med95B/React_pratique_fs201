import Produit from "./Produit"

function Produits(props){

        return(
            <div className="container">
                    <h1>Ordinateurs Portables</h1>
                    <div className="row mb-2">
                            {
                                props.produits.map((produit)=><Produit key={produit.id} produit={produit}/>)
                            }
                    </div>
            </div>
        )
}

export default Produits