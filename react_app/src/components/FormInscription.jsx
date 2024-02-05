//import { useState } from "react";
import { Component } from "react"
/*
function FormInscription(){

    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [infos,setInfos]=useState('')

    function Afficher(){
        setInfos(`Nom : ${nom} Prenom : ${prenom}`)
    }

    function Reset(){
        setInfos('')
        setNom('')
        setPrenom('')
    }
    return(
        <>
        <h2>Inscription</h2>
        <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" name="nom" onChange={(e)=>setNom(e.target.value)} value={nom}/>
        </div>
        <div>
            <label htmlFor="prenom">Prenom</label>
            <input type="text" name="prenom" onChange={(e)=>setPrenom(e.target.value)} value={prenom}/>
        </div>
        <button className="btn btn-secondary" onClick={Afficher}>Afficher</button>
        <button className="btn btn-danger" onClick={Reset}>Reset</button>
        <p>{infos}</p>
        </>
    )
}
*/
class FormInscription extends Component{
    constructor(){
        super()
        this.state={
            nom:'',
            prenom:'',
            infos:''
        }
    }

    Afficher=()=>{
        this.setState({infos:`Nom : ${this.state.nom} Prenom : ${this.state.prenom}`})
    }

    Reset=()=>{
        this.setState({nom:'',
        prenom:'',
        infos:''})
    }

    render(){
        return(
            <div className="container">
        <h2>Inscription</h2>
        <div>
            <label htmlFor="nom">Nom</label><br />
            <input type="text" name="nom" onChange={(e)=>this.setState({nom:e.target.value})} value={this.state.nom}/>
        </div>
        <div>
            <label htmlFor="prenom">Prenom</label><br />
            <input className="mb-3" type="text" name="prenom" onChange={(e)=>this.setState({prenom:e.target.value})} value={this.state.prenom}/>
        </div>
        <button className="btn btn-secondary me-3" onClick={this.Afficher}>Afficher</button>
        <button className="btn btn-danger" onClick={this.Reset}>Reset</button>
        <p className="mt-3">{this.state.infos}</p>
        </div>
        )
    }
}

export default FormInscription