import React ,{useEffect, useState} from "react"
   
function SalutationEffect(){ 
    
    const [nom,setNom]=useState("---") 
    const [prenom,setPrenom]=useState("---")
    const [age,setAge]=useState(0)

    let changeNom=(e)=>setNom(e.target.value)
    let changePrenom=(e)=>setPrenom(e.target.value)
    let changeAge=(e)=>setAge(e.target.value)

        
    //useEffect(()=>{document.title=nom },[nom])     
    //document.title=nom
    console.log('rerender')

    useEffect(()=>{document.title=nom+" "+prenom},[nom,prenom])    
    //document.title=nom+" "+prenom
    


    return(         
        <div className="m-5 d-flex flex-column container col-4">  
            <label>nom:</label>  
            <input type="text" value={nom} onChange={changeNom}></input>  
            <label>prénom:</label>  
            <input type="text" value={prenom} onChange={changePrenom}></input> 
            <label>age:</label> 
            <input type="text" value={age} onChange={changeAge}></input>  
            <h2>Salutation</h2>  
            <p>salut {nom} {prenom} vote age est : {age}</p>  
        </div>     
        )
        
    }

export default SalutationEffect