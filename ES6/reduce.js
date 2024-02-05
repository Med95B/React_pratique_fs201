const clients = [ 
    { nom: "Rami", montant: 4500 }, 
    { nom: "Karimi", montant: 2300 }, 
    { nom: "Chaouki", montant: 5500 }, 
    { nom: "Ramoun", montant: 7700 }, 
]; 
const totalMontants=clients.reduce((total,client)=>total+=client.montant,0)
console.log(totalMontants)

