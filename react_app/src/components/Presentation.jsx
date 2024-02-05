/*
export default function Presentation(props){  
     
    return (  <h2>Salut {props.nom}  {props.prenom}</h2> )
    
   }

export default function Presentation(props){  
     
    let listDiplomes=props.diplomes.map((diplome,index)=><li key={index}>{diplome}</li>)
    return ( 
        <>
        <h2>Salut {props.personne.nom}  {props.personne.prenom}</h2>
        <h3>Diplomes :</h3>             
        <ul>{listDiplomes}</ul>
        </>
          )
    
   }

*/


export default function Presentation(props){  
     
    return ( 
        <>
            <h2>Salut {props.nom}  {props.prenom}</h2>
                {props.children}         
            <hr/>
        </>
          )
    
   }