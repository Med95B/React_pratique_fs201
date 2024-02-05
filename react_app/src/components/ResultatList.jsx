

/*
function ResultatList(props){


    return(
            <div className="ms-4 mb-4 bg-warning p-3 border border-2 border-dark rounded-4">
                <h3>Composant ResultatList</h3>
                <div>
                    {props.resultat.length===0
                        ? <p>Pas de resultats</p>
                        : <ul>
                                {props.resultat.map((res)=>{
                                    return <li key={res.nom}>{res.nom}</li>
                                }) }
                          </ul>                    }
                </div>
            </div>
    
    )
}
*/
function ResultatList(props){


    return(
            <div className="ms-4 mb-4 bg-warning p-3 border border-2 border-dark rounded-4">
                <h3>Composant ResultatList</h3>
                <div>
                    {props.resultat.length===0
                        ? <p>Pas de resultats</p>
                        : <ul>
                                {props.resultat.map((res)=>{
                                    return <li key={res.nom}>{res.nom}</li>
                                }) }
                          </ul>                    }
                </div>
            </div>
    
    )
}

export default ResultatList