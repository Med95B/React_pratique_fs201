import { useState,useEffect } from "react"


function Formulaire1(props){

  
  const[formData,setFormData]=useState({
    nom:'',
    prenom:'',
    email:'',
    date:'',
    filiere:'',
    niveau:'',
    photo:'',
    statut:[],
    diplome:''
  })

  useEffect(()=>{

      setFormData(props.update)
      
  },[props.update])

  const[check,setCheck]=useState([])
  let handleCheckbox=(e)=>{
      const{name,value}=e.target
      check.includes(value)?setCheck([...check.filter((item)=>item===value)])
                           :setCheck([...check,value])
      setFormData({...formData,[name]:check})
  }
 
  const handleFile = (e) => {

    const{name,files}=e.target
    const fileURL=URL.createObjectURL(files[0])
      setFormData({...formData,[name]:fileURL})
    
  }

  let handleChange=(e)=>{
      const  {name,value}=e.target
      setFormData({...formData,[name]:value})
  }

  let handleSubmit=(e)=>{
      e.preventDefault()

      props.enregistrer(formData)

      setFormData({
        nom:'',
        prenom:'',
        email:'',
        date:'',
        filiere:'',
        niveau:'',
        photo:'',
        statut:[],
        diplome:''
      })
      setCheck([])
      props.setUpdate({})
  }

  return(
        <div className="m-5">
        <form className="row col-md-10 mx-auto g-3" onSubmit={handleSubmit}>
      <h1>Formulaire d'inscription</h1>
      <div className="col-md-4 mb-3">
          <label htmlFor="nom" className="form-label fw-bold">Nom :</label>
          <input type="text" className="form-control" name="nom" placeholder="votre nom"
          value={formData.nom || ''} onChange={handleChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="nom" className="form-label fw-bold">Prenom :</label>
          <input type="text" className="form-control" name="prenom" placeholder="votre prenom"
          value={formData.prenom || ''} onChange={handleChange}
          />
        </div>
        <div className="col-md-4 mb-3">
          <label htmlFor="nom" className="form-label fw-bold">Adresse Email :</label>
          <input type="email" className="form-control" name="email" placeholder="votre email"
          value={formData.email || ''} onChange={handleChange}
          />
        </div>
        
        <div className="col-md-4 mb-3">
          <label htmlFor="date" className="form-label fw-bold">Date de naissance :</label>
          <input type="date" className="form-control" name="date"
          value={formData.date || ''} onChange={handleChange}
          />
        </div>

        <div className="col-md-4 mb-3">
  <label htmlFor="filiere" className="form-label fw-bold">Filière :</label>
  <select className="form-select" name="filiere"
    value={formData.filiere} onChange={handleChange}
  >
    <option>Selectionnez votre filiere</option>
    <option value="DDOFS"

      >DDOFS</option>
    <option value="DDOAM"

      >DDOAM</option>
    <option value="DDIA"

      >DDIA</option>
  </select>
</div>
<div className="col-md-4 mb-3">
          <label htmlFor="niveau" className="form-label fw-bold">Sélectionez un niveau :</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="niveau" value="Technicien" 
             onChange={handleChange}
             checked={formData.niveau==='Technicien'}
            />
            <label className="form-check-label" htmlFor="Technicien">
            Technicien
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="niveau" value="Technicien Specialise"
             onChange={handleChange}
             checked={formData.niveau==='Technicien Specialise'}
            />
            <label className="form-check-label" htmlFor="Technicien Specialise">
                Technicien Spécialisé
            </label>
          </div>
        </div>

        <div className="col-md-4 mb-3">
        <label htmlFor="photo" className="form-label fw-bold">Photo :</label>
        <input type="file" name="photo" className="form-control"
         onChange={handleFile}
        />
        </div>

        <div className="col-md-4 mb-3">
<label className="form-label fw-bold" htmlFor="statut">Sélectionnez un statut :</label>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="en cours" name="statut"
    onChange={handleCheckbox} 
    
  />
  <label className="form-check-label" htmlFor="en cours">
    En cours
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="diplome" name="statut"
  onChange={handleCheckbox} 
  
  />
  <label className="form-check-label" htmlFor="diplome">
    Diplomé
  </label>
</div>
</div>
<div className="col-md-4 mb-3">
  {check.includes('diplome') && (
        <>  
        <label htmlFor="diplomeFile" className="form-label fw-bold">Uploade Diplome :</label>
        <input type="file" name="diplome" className="form-control"
         onChange={handleFile}
        />
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

export default Formulaire1