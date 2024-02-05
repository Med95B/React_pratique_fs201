//Quiz de révision

//1) A l’intérieur d’une page HTML ou on met Java script :
        // b. <script> 

//2) Quelle est la vraie syntaxe pour changer le contenu de l’élément suivant : 
       // <span id=’span1’>test</span>
       //a. document.getElementById(‘span1’).innerHTML=’salut monde’ 

//3) Quelle est l’emplacement  de Java Script :
        //c. Les deux

//4) Quelle la bonne syntaxe pour faire reference à un script externe script1.js :
        //c. <script src=’script1.js’>

//5) Un script externe doit contenir le tag <script> :
        //b. Nom

//6) Comment créer une fonction en javascript :
        //b. function  function1()

//7) Comment écrire la condition if :
        //c. if(x==7)

//8) Comment écrire la condition x n’est pas égal à 7 :
        //d. if (x !=7)
    
//9) La bonne syntaxe de la boucle while :
            //b. while (k<=20)

//10) La bonne syntaxe de for :
            //c. for(j=0 ;j<=10 ;j++) 

//11) Quelle est syntaxe correcte pour créer un Array :
            //b. var fruits= [‘pomme’,’orange’,’banane’]

//12) Quel évènement est déclenché si on clique sur un élément HTML :
            //b. onclick

//13) Est-ce que javascript est sensible à la casse :
            //a. oui

//14) let numbers=[3,7,2,5,9,4,10] 
    //console.log(numbers.filter(n=>n>=5)) :
    //d. [7,5,9,10]

//15) let numbers=[3,7,2,5,9,4,10] 
      //console.log(numbers.find(n=>n>=5))  :
      //b. 7

//16) let numbers=[3,7,2,5,9,4,10] 
      //console.log(numbers.find(n=>n==6))  :
      //d. Undefined

//17) let numbers=[3,7,2,5,9,4,10] 
      //console.log(numbers.map(n=>n*2))    :
      //c. [6,14,4,10,18,8,20]

//18) let numbers=[3,7,2,5,9,4,10] 
      //console.log(numbers.reduce(function(total,n){return total+n},0))
      //b. 40

//19) function salutation(nom, presentation){ presentation(nom) } 
      //function hello(nom){ console.log(`hello ${nom.toUpperCase()}`) } 
      //function salut(nom){ console.log(`salut ${nom.toUpperCase()}`) } 
        
        //salutation("rami",hello) 
        //salutation("fahmi",salut)  :
        //    b. hello  RAMI 
                //salut FAHMI

//20)let cmpt={second:0} 
    //const incremente=()=>{cmpt.second++;if(cmpt.second==60) cmpt.second=0;       
    //console.log(cmpt.second)} 
    //const compteur=setInterval(incremente,1000)     :
    //b. affiche des valeurs de 1à 59 puis recommence de 0 à 59 plusieurs fois 
//---------------------------------------------------------------------------------------------------------
//Exercice 1 :
//a)
/*class Document{
        constructor(id,dateEdition){
                this.id=id
                this.dateEdition=dateEdition
        }
}

//b) et //e)
class Livre extends Document{
        constructor(id,dateEdition,titre,auteur){
                  super(id,dateEdition)
                  this.titre=titre
                  this.auteur=auteur   
        }

        infoLivre(){
                return `Livre: id:${this.id} titre:${this.titre} Auteur:${this.auteur} dateEdition:${this.dateEdition}`
        }
}

//c)
let doc1=new Document(1,'1/1/2023')
let doc2=new Document(2,'1/1/2024')

console.log(doc1,doc2);

//d)
let liv1=new Livre(1,'1/1/2022','livre1','auteur1')
let liv2=new Livre(2,'1/1/2023','livre2','auteur2')
let liv3=new Livre(3,'1/1/2024','livre3','auteur3')

console.log(liv1,liv2,liv3);

//e)
console.log(liv1.infoLivre());
*/
//-----------------------------------------------------------------------------------------------------------
/*
//Exercice 2 :
//class Book :
class Book {
        constructor(title,author,description,pages,currentPage=1,read=false){
                this.title=title
                this.author=author
                this.description=description
                this.pages=pages
                this.currentPage=currentPage
                this.read=read
        }

        readBook=(page)=>page<1||page>this.pages?0+' :Entree invalide'
                        :page>=1&&page<this.pages?(this.currentPage=page,1+' :En cours de lecture')
                        :(this.currentPage=page,this.read=true,1+' :Lu')
        
}

let book1=new Book('book1','auth1','desc1',0)

console.log(book1.readBook(100)+'\n','======================================\n',book1);
*/
//----------------------------------------------------------------------------------------------------------
//Exercice 3 :
/*const nums=[1,2,3,4,5]
const numsCarre=nums.map((num) => num**2)
console.log(numsCarre);
*/
//---------------------------------------------------------------------------------------------------------
//Exercice 4 :
/*const nums=[1,-2,3,4,-5]
const numsPos=nums.filter((num)=>num>=0)
console.log(numsPos);
const som=nums.reduce((num,som)=>(som+=num),0)
console.log(som);
const somPos=nums.filter((num)=>num>0)
                 .reduce((som,num)=>(som+=num),0)
console.log(somPos);
*/
//------------------------------------------------------------------------------------------------------
//Exercice 5 :
/*let livres=[
        {id:10,titre:'POO',auteur:'RAMI',prix:300},
        {id:11,titre:'JS ES6',auteur:'FAMI',prix:230},
        {id:12,titre:'Algorithme',auteur:'KARIMI',prix:330},
        {id :13,titre:'HTMH& CSS',auteur:'RAMI',prix:340}
           ]

//1)
const titres=livres.map((livre)=>livre.titre)
console.log(titres);
//2)
const titresRami=livres.filter((livre)=>livre.auteur==='RAMI')
                       .map((livre)=>livre.titre)
console.log(titresRami);
//3)
const livre12=livres.find((livre)=>livre.id==12)
console.log(livre12);
//4)
const totalPrix=livres.reduce((total,livre)=>(total+=livre.prix),0)
console.log(totalPrix);
//5)
const meslivres=[...livres]
console.log(meslivres);
*/
//-----------------------------------------------------------------------------------------------------------
//Exercice 6 :
/*
spanHeure=document.getElementById("spHeure") 
spanMinute=document.getElementById("spMinute") 
spanSecond=document.getElementById("spSecond") 

let initTime={heure:10,minute:23,second:5} 
let currentTime=initTime 
let timer=null 

function incrementer(temps){     
   let time={...temps}     
    return function(){         
        time.second++         
        if(time.second>59){            
             time.second=0            
              time.minute++             
              if(time.minute>59){                
                 time.minute=0                
                  time.heure++    } }  
                  affiche(time)         
                  currentTime=time         
                  return time     } }

function decrementer(temps){     
   let time={...temps}     
    return function(){         
        time.second--         
        if(time.second<0){            
             time.second=59            
              time.minute--             
              if(time.minute<0){                
                 time.minute=59                
                  time.heure-- } }  
                  affiche(time)         
                  currentTime=time         
                  return time     } }

function affiche(time){ 
        spanHeure.innerHTML=time.heure; 
        spanMinute.innerHTML=time.minute; 
        spanSecond.innerHTML=time.second; } 

function stopTimer() {  
            if(timer){ clearInterval(timer); }     
            timer = null; }

function incrementerTimer() {    
            stopTimer()    
            let next=incrementer(currentTime)       
            timer=setInterval(next,1000);       
                            }

function decrementerTimer(){
    stopTimer()
    let previous=decrementer(currentTime);
    timer=setInterval(previous,1000)
}

*/

