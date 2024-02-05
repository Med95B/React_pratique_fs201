let pers={id:10,nom:'Rami'}

function addAge1(age){
        let perso={...pers,age:age}
        return perso
}

console.log(addAge1(27));
console.log(pers);

function addAge2(age){
    return Object.assign({},pers,{age:age})
}
console.log(addAge2(27));
