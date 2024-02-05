import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Single(props) {
    const { id } = useParams();
    let product = props.products.find(item => item.id === parseInt(id))
    let thumbnailsrc = "/pictures/"+product.thumbnail;
   
    return (
        <main className="container">
            <h1>{product.title}</h1>
            <img className="bd-placeholder-img w-25" src={thumbnailsrc} alt="" />
            <p>{product.price}</p>
            <Link to="/">Aller vers la page d'accueil</Link>
        </main>
    );
}
export default Single;