import { Link } from "react-router-dom"

function Produit(props){

    let thumbsrc = "/pictures/"+props.produit.thumbnail;
    let url = "/produit/"+props.produit.id;
    return(
        <div className="col">
                <div className="card shadow-sm">
        <Link to={url}><img className="bd-placeholder-img card-img-top" src={thumbsrc} alt="" /></Link>
        <div className="card-body">
          <p className="card-title">{props.produit.title}</p>
          <p className="card-text">{props.produit.price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
        </div>
    )

}

export default Produit