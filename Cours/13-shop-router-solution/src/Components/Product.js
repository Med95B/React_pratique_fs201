import { Link } from 'react-router-dom';
function Product(props) {
  const { id, title, price, thumbnail } = props;
  let thumbnailsrc = "/pictures/"+thumbnail;
  let url = "/product/"+id;
  return (
    <div className="col">
      <div className="card shadow-sm">
        <Link to={url}><img className="bd-placeholder-img card-img-top" src={thumbnailsrc} alt="Pc" /></Link>
        <div className="card-body">
          <p className="card-title">{title}</p>
          <p className="card-text">{price}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;