const personnes = [ 
    { nom: "Rami", age: 33, estMember: true }, 
    { nom: "Fatihi", age: 24, estMember: false }, 
    { nom: "Chakib", age: 45, estMember: true }, 
    { nom: "Mounir", age: 37, estMember: false }, 
    ];

const membres=personnes.filter((pers)=>pers.estMember)
                     .map((pers)=>{return {nom:pers.nom,age:pers.age} })
console.log(membres);
