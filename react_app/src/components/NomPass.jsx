import { useState } from "react";

function NomPass(props){

    const[nom,setNom]=useState('')
    const[pass,setPass]=useState('')


    let handelNom=(e)=>{
        setNom(e.target.value)
        props.Data({nom})
    }

    let handelPass=(e)=>{
        setPass(e.target.value)
        props.Data({pass})
    }

    return(
        <div class="form-row">
        <div class="form-group col-md-6">
          <label for="nom">Nom</label>
          <input type="text" class="form-control" name="nom" required
          onChange={(e)=>handelNom(e)}
          value={nom}
          />
        </div>
        <div class="form-group col-md-6">
          <label for="pass">Password</label>
          <input type="password" class="form-control" name="pass" required
          onChange={(e)=>handelPass(e)}
          value={pass}
          />
        </div>
      </div> 
    )
}
export default NomPass