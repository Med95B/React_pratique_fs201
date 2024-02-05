import { useState } from "react"


function Formulaire(props){

const[diplome,setDiplome]=useState(false)

let handelDiplome=(e)=>{

    setDiplome(e.target.checked)
}

  let handelSubmit=(e)=>{
    props.submit(e) 

  }

  

  console.log(props.update);

    return(
        <div className="m-5">
        <form className="row col-md-10 mx-auto g-3" encType="multipart/form-data"
        onSubmit={handelSubmit}
        >
      <h1>Formulaire d'inscription</h1>
      <div className="col-md-4 mb-3">
          <label htmlFor="nom" className="form-label fw-bold">Nom :</label>
          <input type="text" className="form-control" name="nom" placeholder="votre nom"
          defaultValue={props.update.nom || ''}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="nom" className="form-label fw-bold">Prenom :</label>
          <input type="text" className="form-control" name="prenom" placeholder="votre prenom"
          defaultValue={props.update.prenom || ''}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="nom" className="form-label fw-bold">Adresse Email :</label>
          <input type="email" className="form-control" name="email" placeholder="votre email"
          defaultValue={props.update.email || ''}
          />
        </div>
        
        <div className="col-md-4 mb-3">
          <label htmlFor="date" className="form-label fw-bold">Date de naissance :</label>
          <input type="date" className="form-control" name="date"
          defaultValue={props.update.date || ''}
          />
        </div>

        <div className="col-md-4 mb-3">
  <label htmlFor="filiere" className="form-label fw-bold">Filière :</label>
  <select className="form-select" name="filiere">
    <option>Selectionnez votre filiere</option>
    <option value="DDOFS"
    selected={props.update.filiere==="DDOFS" || null}
    >DDOFS</option>
    <option value="DDOAM"
    selected={props.update.filiere==="DDOAM" || null}
    >DDOAM</option>
    <option value="DDIA"
    selected={props.update.filiere==="DDIA" || null}
    >DDIA</option>
  </select>
</div>
<div className="col-md-4 mb-3">
          <label htmlFor="niveau" className="form-label fw-bold">Sélectionez un niveau :</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="niveau" value="Technicien" 
             defaultChecked={props.update.niveau==="Technicien" || false} 
            />
            <label className="form-check-label" htmlFor="Technicien">
            Technicien
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="niveau" value="Technicien Specialise"
            defaultChecked={props.update.niveau==="Technicien Specialise" || false}
            />
            <label className="form-check-label" htmlFor="Technicien Specialise">
                Technicien Spécialisé
            </label>
          </div>
        </div>

        <div className="col-md-4 mb-3">
        <label htmlFor="photo" className="form-label fw-bold">Photo :</label>
        <input type="file" name="photo" className="form-control"/>
        </div>

        <div className="col-md-4 mb-3">
<label className="form-label fw-bold" htmlFor="statut">Sélectionnez un statut :</label>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="en cours" name="statut"
    defaultChecked={props.update.statut?props.update.statut.includes("en cours"):false}
  />
  <label className="form-check-label" htmlFor="en cours">
    En cours
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="diplome" name="statut"
  defaultChecked={props.update.statut?props.update.statut.includes("diplome"):false}
  onChange={handelDiplome}
  />
  <label className="form-check-label" htmlFor="diplome">
    Diplomé
  </label>
</div>
</div>
<div className="col-md-4 mb-3">
  {diplome && (
        <>  
        <label htmlFor="diplomeFile" className="form-label fw-bold">Uploade Diplome :</label>
        <input type="file" name="diplome" className="form-control"/>
        </>
        )}
         </div>

        
        <div className="col-md-3 mb-3 ms-auto">
          <button type="submit" name="submit" className=" btn btn-dark form-control">Enregistrer</button>
        </div>
        <div className="col-md-3 mb-3">
          <button type="reset" name="reset" className=" btn btn-dark form-control">Effacer</button>
        </div>
        </form>
        </div>
    )
}

export default Formulaire