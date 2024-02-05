/*const notes=[
             {id:10,module:'Algorithme',note:15},
             {id:10,module:'POO',note:17},
             {id:11,module:'Algorithme',note:16},
             {id:11,module:'POO',note:14},
            ]; 

function pureUpdateNote(id,module,note){  
    const updatednotes=[
        ...notes.filter(note=>!(note.id===id && note.module===module)),
            {id:id,module:module,note:note}
                        ] 
        return updatednotes; } 

console.log("----pureUpdateNote-------") 
console.log(pureUpdateNote(10,'POO',18)) 
console.log(notes)

let personne={id:10,nom:'Rami'} */

const inscriptions=[     
                {id:10,nom:'Rami',filiere:'DEV'},     
                {id:11,nom:'Kamali',filiere:'DEV'},     
                {id:12,nom:'Fahmi',filiere:'DEV'},     
                {id:13,nom:'Chaouki',filiere:'DEV'}    
                    ];

function pureDeleteFonction(id){     
        return [...inscriptions.filter((ins)=>ins.id!=id)] 
                } 
let deleteInscriptions= pureDeleteFonction(12) 
console.log('----pureDeleteFonction-------') 
console.log(deleteInscriptions) 
console.log(inscriptions)
 