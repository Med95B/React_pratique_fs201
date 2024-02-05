import {Component} from 'react'

export default class Salutation extends Component{

    render(){
        return(
            <>
                <h2>Salut {this.props.personne.nom}  {this.props.personne.prenom}</h2>
                <h3>Diplomes :</h3>             
                <ul>{this.props.diplomes.map((diplome,index)=><li key={index}>{diplome}</li>)}</ul>
            </>
           
        )
    }
}