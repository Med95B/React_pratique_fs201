let mutateValue = 10; 
 function impureFonction(newValue) { 
   return mutateValue += newValue; 
 } 
 impureFonction(20) 
 console.log(mutateValue) 
 //rendu 30
let immutableValue=10 
 function pureFonction(newValue){ 
    return  immutableValue+newValue 
 } 
 pureFonction(20) 
 console.log(immutableValue) 
 //rendu 10

 let myList=[1,2,3,4,5]  
 function pureAppend(value){ 
       let appendMyList=[...myList,value]; 
        return appendMyList;
} 
 //affichage 
 console.log(pureAppend(10)) 
 //rendu [1,2,3,4,5,10]  
 console.log(myList) 
 //rendu [1,2,3,4,5] 

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

console.log(deleteInscriptions) 
console.log(inscriptions)

