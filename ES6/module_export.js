const Etablissement='ISGI' 
class Etudiant{ 
    constructor(nom,age){ 
        this.nom=nom;
        this.age=age 
    } 
} 
function info(etudiant){ 
    return `nom:${etudiant.nom} age:${etudiant.age}` 
} 
export default Etudiant 
export {Etablissement,info} 

