import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PageProduit(props){

    const { id } = useParams();
    let produit = props.produits.find(item => item.id === parseInt(id))
    let thumbnailsrc = "/pictures/"+produit.thumbnail;
   
    return (
        <main className="container">
            <h1>{produit.title}</h1>
            <img className="bd-placeholder-img w-25" src={thumbnailsrc} alt="" />
            <p>{produit.price}</p>
            <Link to="/">Aller vers la page d'accueil</Link>
        </main>
    );

}

export default PageProduit