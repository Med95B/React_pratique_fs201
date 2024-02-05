//import { Component } from "react";
/*
function App(){
    const nom="rami"
    const date=new Date().toLocaleDateString()

    return(
        <h1>salut {nom} la date : {date}</h1>
    )
}

function App(){
    const articles=10
    let remise=0
    if(articles>=5){
        remise=2
    }
    
    return(
        <>
        <h1>Remise :</h1>
        <p>votre remise est : {remise} %</p>
        </>
    )
}


function calculAge(naissance) {
  //let naissance_form = naissance.split("/");
  //console.log(naissance_form);
  let naissance_form=Date.parse(naissance)
  console.log(naissance_form);
  let naissance_date=new Date(naissance)
  //let naissance_date = new Date(naissance_form[2],naissance_form[1]-1,naissance_form[0]);
  console.log(naissance_date);
  let currentDate = new Date();
  let diff_date = currentDate - naissance_date;
  let age = Math.floor(diff_date / 31557600000);
  console.log(currentDate);
  return age;
}
/*
function App(){   
     const nom='RAMI'      
     const naissance='1/11/2000'   
     
     return(
        <>
        <h3>nom : {nom}</h3>
        <h4>age : {calculAge(naissance)} ans</h4>
        </>
     )
       }


let calculAge=(naissance)=>Math.floor((new Date() - new Date(naissance))/(1000*60*60*24*365.25))

class App extends Component {
  constructor() {
    super();
    this.nom = "RAMI";
    this.naissance = "1/11/2000";
  }

  render() {
    return (
      <>
        <h3>nom : {this.nom}</h3>
        <h4>age : {calculAge(this.naissance)} ans</h4>
      </>
    );
  }
}

function App(){
    return(
      <>
        <Presentation nom="Rami"   prenom="Ahmed"/>        
        <Presentation nom="Kamali" prenom="Ali" />         
        <Presentation nom="Fahmi"  prenom="Khalid"/>
      </>
      
    )
}

import Presentation from "./components/Presentation";

function App(){

  let personne1={nom:"Rami",prenom:"Ahmed"}  
  let diplomes=["Bac","Licence","Master"] 

  return(
    <>
      <Presentation personne={personne1} diplomes={diplomes}/>        
    </>
    
  )
  }

import Salutation from "./components/Salutation";

function App(){

  let personne1={nom:"Rami",prenom:"Ahmed"}  
  let diplomes=["Bac","Licence","Master"]
  return(
    <Salutation personne={personne1} diplomes={diplomes}/>
  )
}


import Presentation from "./components/Presentation";

function App(){

        return(
            <>
            <Presentation nom="Rami" prenom="Ahmed">
              <p>ce ci est un children props</p>
            </Presentation>
            <Presentation nom="Kamali" prenom="Ali">
              <button>quitter</button>
            </Presentation>
            </>
        ) 
    
}

function App(){

  return(
      <div className="p-5">
          <Form/>
      </div>
  ) 

}


import FormInscription from "./components/FormInscription";

function App(){
  return(
    <div className="App p-5">
        <FormInscription/>
    </div>
) 
}

import { useState } from "react";
import ChercheBar from "./components/ChercheBar";
import ResultatList from "./components/ResultatList"
import ProduitsList from "./components/ProduitsList";
function App(){

  const produits=[ 
    {id:1,nom:"banane",type:"fruit"}, 
    {id:2,nom:"orange",type:"fruit"}, 
    {id:3,nom:"pomme",type:"fruit"}, 
    {id:4,nom:"raisins",type:"fruit"}, 
    {id:5,nom:"kiwi",type:"fruit"}, 
    {id:6,nom:"tomate",type:"legume"}, 
    {id:7,nom:"carotte",type:"legume"}, 
    {id:8,nom:"pomme de terre",type:"legume"}, 
    {id:9,nom:"navet",type:"legume"}, 
    {id:10,nom:"poivron",type:"legume"}]

  const [produits,setProduits]=useState(produits)
  let supprimerProduit=(id)=>{
    setProduits(produits.filter((produit)=>produit.id!==id))
  }  
  
  const[id,setId]=useState(produits.length)

  let enregistrerProduit=(produit)=>{
      setId(id+1)
      setProduits([...produits,{id:id+1,...produit}])
  }

  const [type,setType]=useState('') 
  const [resultat,setResultat]=useState([]) 
  let RechercherSubmit=(type)=>{
        setType(type)
        setResultat(produits.filter((item)=>item.type.toUpperCase()===type))
  }
  return(

    <div className="App container p-5 bg-info col-lg-6 mx-auto">
            <h1 className="mb-4">Composant App</h1>  
            <ChercheBar RechercherSubmit={RechercherSubmit}/>          
            <p className="ms-4 mb-4">Le type : <span>{type}</span></p>
            <ResultatList resultat={resultat}/>
            <ProduitsList produits={produits} supprimer={supprimerProduit}
            enregistrer={enregistrerProduit}
            />
    </div>
) 
}

import { useState,useEffect } from "react";
import ChercheBar from "./components/ChercheBar";
import ResultatList from "./components/ResultatList"
import ProduitsList from "./components/ProduitsList";
import axios from "axios";

function App(){

  useEffect(()=>{
        axios.get('./listProduits.json')
        .then((res)=>setProduits(res.data))
  },[])

  const [produits,setProduits]=useState([])
  let supprimerProduit=(id)=>{
    setProduits(produits.filter((produit)=>produit.id!==id))
  }  
  
  const[id,setId]=useState(produits.length)

  let enregistrerProduit=(produit)=>{
      setId(id+1)
      setProduits([...produits,{id:id,...produit}])
  }

  const [type,setType]=useState('') 
  const [resultat,setResultat]=useState([]) 
  let RechercherSubmit=(type)=>{
        setType(type)
        setResultat(produits.filter((item)=>item.type.toUpperCase()===type))
  }
  return(

    <div className="App container p-5 bg-info col-lg-6 mx-auto">
            <h1 className="mb-4">Composant App</h1>  
            <ChercheBar RechercherSubmit={RechercherSubmit}/>          
            <p className="ms-4 mb-4">Le type : <span>{type}</span></p>
            <ResultatList resultat={resultat}/>
            <ProduitsList produits={produits} supprimer={supprimerProduit}
            enregistrer={enregistrerProduit}
            />
    </div>
) 
}

import { Component } from "react";
import ChercheBar from "./components/ChercheBar";
import ResultatList from "./components/ResultatList"
import ProduitsList from "./components/ProduitsList";
import axios from "axios";

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        produits:[],
        id:null,
        type:'',
        resultat:[]
    }
  }

componentDidMount(){
    axios.get('./listProduits.json')
    .then(res=>this.setState({produits:res.data,id:res.data.length+1}))
}

  
  supprimerProduit=(id)=>{
    this.setState({produits:this.state.produits.filter((produit)=>produit.id!==id)})
  }  
  
 

   enregistrerProduit=(produit)=>{
     
      this.setState({produits:[...this.state.produits,{id:this.state.id,...produit}],id:this.state.id+1})
  }

 
 RechercherSubmit=(type)=>{
  this.setState({
    type:type,
    resultat:this.state.produits.filter((item)=>item.type.toUpperCase()===type)
  })
       
       
  }
  render(){
    return(

      <div className="App container p-5 bg-info col-lg-6 mx-auto">
        <h1 className="mb-4">Composant App</h1>  
        <ChercheBar RechercherSubmit={this.RechercherSubmit}/>          
        <p className="ms-4 mb-4">Le type : <span>{this.state.type}</span></p>
        <ResultatList resultat={this.state.resultat}/>
        <ProduitsList produits={this.state.produits} supprimer={this.supprimerProduit}
        enregistrer={this.enregistrerProduit}
        />
       </div>
) 
  }
  
}

import Formulaire from "./components/Formulaire";
import TableauForm from "./components/TableauForm";
import { useState } from "react";

function App(){

  const[users,setUsers]=useState([])
  const[id,setId]=useState(1)
  

  let Submit=(e)=>{
    e.preventDefault()
    
    const formData=new FormData(e.target)
    const formJson=Object.fromEntries(formData.entries())
    const statutValues = formData.getAll("statut")
    const img=formData.get("photo")
    const dip=formData.get("diplome")
        
    formJson.statut = statutValues
    console.log(statutValues);
    const photoUrl = URL.createObjectURL(formJson.photo)
    formJson.photo = photoUrl
    if(formJson.diplome){
      const diplomeUrl = URL.createObjectURL(formJson.diplome)
      formJson.diplome=diplomeUrl
    }

    if (Object.keys(update).length !== 0 && update.constructor === Object) {
      console.log(formData.get('photo'));
      if(img.size===0){
        formJson.photo=update.photo
      }
      if(dip===null||dip.size===0){
           formJson.diplome=update.diplome 
      }
      const updatedUsers = users.map((user) => {
          if (user.id === update.id) {
            console.log(user)
              return { ...user, ...formJson}
          }
          return user
      })
      setUsers(updatedUsers)
      setUpdate({}) 
     
  } else {
      formJson.id = id;
      setId((prevId) => prevId + 1)
      setUsers([...users, formJson])
      
  }
    console.log(formJson) 
  }

  let DeleteUser=(id)=>{

    setUsers(users.filter((user)=>user.id!==id))
  }

  const[update,setUpdate]=useState({})

  let UpdateUser=(id)=>{
      let userUpdate=users.find((user)=>user.id===id) 
      setUpdate(userUpdate) 
  }

  console.log(users);

  return(
    <div className="App">
        <Formulaire submit={Submit} update={update}/>
        <TableauForm users={users} delete={DeleteUser} update={UpdateUser}/>
    </div>
    
  )

}



import { useState } from "react";
import Formulaire1 from "./components/Formulaire1";
import TableauForm1 from "./components/TableauForm1";

function App(){

  const[users,setUsers]=useState([])
  const[id,setId]=useState(1)

  let Enregistrer=(data)=>{

    if(Object.keys(userUpdate).length !== 0){

      if(data.photo===''){
        data.photo=userUpdate.photo
      }
      if(data.diplome===''){
           data.diplome=userUpdate.diplome 
      }

      const updatedUsers = users.map((user) => {
        if (user.id === userUpdate.id) {

            return { ...user, ...data}
        }
        return user
    })
    setUsers(updatedUsers)
    setUserUpdate({}) 

    }else{

      data.id = id;
      setId((prevId) => prevId + 1)
      setUsers([...users, data])  
    }
  }

  let Delete=(id)=>{
    setUsers([...users.filter((user)=>user.id!==id)])
  }

  const[userUpdate,setUserUpdate]=useState({})

  let Update=(id)=>{
      setUserUpdate({...users.find((user)=>user.id===id)})
  }

return(
  <div className="App">
     <Formulaire1 enregistrer={Enregistrer} update={userUpdate} setUpdate={setUserUpdate}/>
      <TableauForm1 users={users} delete={Delete} update={Update}/>
  </div>
)

}


import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="m-5">
      <h3>liste utilisateurs</h3>
      <div>
        <h1>nombre d'utilisateurs: {users.length}</h1>
        {users.map((user) => {
          return (
            <div key={user.id} className="card m-2 p-3 bg-info">
              <h3 className="text-danger">
                nom: {user.name} {user.username}
              </h3>
              <p>email : {user.email}</p>
              <p>ville : {user.address.city} rue : {user.address.street}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
*/
/*
import React, { useEffect, useState } from 'react' 
import axios from "axios"

function App(){   
  const [id,setId]=useState(1)   
  const [utilisateur,setUtilisateur]=useState({})   
  const [address,setAddress]=useState({})   
  function handelChangeId(event){     
    setId(event.target.value)   
  }   
  
  useEffect( ()=>{ axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) 
                    .then(resp=>{setAddress(resp.data.address)
                                  setUtilisateur(resp.data)
                                  //console.log(resp.data);
                                })  
                            },[id])     
       return(         
          <div>          
            <h1>Details utilisateur</h1>          
            <div>             
              <label>donner le id:</label>             
              <input type="text" onChange={handelChangeId} value={id}></input>          
              </div>{utilisateur && address ?<div className='child' key={utilisateur.id}>                        
               <h3>  id:{utilisateur.id}  nom: {utilisateur.name}   {utilisateur.username}</h3>      
                <p>email:{utilisateur.email}</p>                         
                <p> telephone:{utilisateur.phone} </p>                         
                <p> site web:{utilisateur.website} </p>                         
                <p> rue : {address.street} </p>                         
                <p> ville : {address.city} </p>         
                </div>
                :"svp choisir un id valide!!!!" }         
                </div>     ) }
*/
/*
import {Component} from "react"
//import axios from "axios"

class App extends Component{

  constructor(props){
    super(props)
    this.state={
        id:1,
        utilisateur:{},
        address:{}
    }
  }


 handelChangeId=(e)=>{     
      console.log(e.target.value);
      this.setState({id:e.target.value})  
      console.log(this.state.id); 
  }   
  
  componentDidMount(){

    /*axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`) 
                    .then(resp=>{
                      console.log(resp.data);
                      this.setState({
                        utilisateur:{...resp.data},
                        address:{...resp.data.address}}) 
                          })*/
    /*                      
      fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(resp=>resp.json())
      .then(data=>{
        console.log(data);
        this.setState({
          utilisateur:{...data},
          address:{...data.address}}) 
            })
                                
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.id !== prevState.id) {

      /*axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(resp => {
          console.log(resp.data);
          this.setState({
            utilisateur: { ...resp.data },
            address: { ...resp.data.address }
          });
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données :", error)
          
        })*/

    /*    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
        .then(resp=>resp.json())
        .then(data=>{
          console.log(data);
          this.setState({
            utilisateur: { ...data },
            address: { ...data.address }
          })
        })
        .catch(error=>console.error("Erreur lors de la récupération des données :", error))
    }
  }
  
    */
  
  
/*

  render(){
    return(         
      <div className="m-5 card p-4">          
        <h1>Details utilisateur</h1>          
        <div>             
          <label>donner le id:</label>             
          <input type="text" onChange={this.handelChangeId} value={this.state.id}></input>          
          </div>{this.state.utilisateur && this.state.address ?<div className='child' key={this.state.utilisateur.id}>                        
           <h3>  id:{this.state.utilisateur.id}  nom: {this.state.utilisateur.name}   {this.state.utilisateur.username}</h3>      
            <p>email:{this.state.utilisateur.email}</p>                         
            <p> telephone:{this.state.utilisateur.phone} </p>                         
            <p> site web:{this.state.utilisateur.website} </p>                         
            <p> rue : {this.state.address.street} </p>                         
            <p> ville : {this.state.address.city} </p>         
            </div>
            :"svp choisir un id valide!!!!" }         
            </div>     )
  }      
}

*/
/*
import CompteurEffect from "./components/CompteurEffect";
import SalutationEffect from "./components/SalutationEffect";

function App(){

  

  return(
    <>
      <CompteurEffect/>
      <SalutationEffect/>
    </>
      
  )
}
*/
/*
import { useState,useEffect } from "react";

const App=()=>{
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)

    useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(resp=>resp.json())
            .then(data=>{
                          setPost(data)
                          console.log(data)
                        }
            )
            
    },[id])

    let handleInput=(e)=>setId(e.target.value)

    return(
        <div className="m-5 card p-3">     
        <h1>liste des posts</h1> 
        <div>
          <label htmlFor="id">saisir un userId :</label>
          <input type="text" name="id" 
            onChange={handleInput}
            value={id}
          />
        </div>
          <ul>
          <li>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </li>
          </ul>  
          
       
        </div>
    )
}
*/

/*
import usePosts from "./hooks/usePosts";

const App=()=>{ 
  
    let url='https://jsonplaceholder.typicode.com/posts'  
   
    const posts=usePosts(url) 
    console.log(posts);

    return (
            <div className="m-5 card p-4">     
              <h1>liste des posts à partir d'un API</h1> 
             
              <ul>     
                {posts.map(post=><li key={post.id}>{post.title}</li>)}    
              </ul> 
            </div>
            ) 
    }
*/
/*
import { Component  } from "react";
import {Routes,Route,Link} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";

class App extends Component{

        render(){
          return(
              <div className="p-5">
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link to='/About'>About</Link>
                  </li>
                  <li>
                    <Link to='/Blog'>Blog</Link>
                  </li>
                </ul>
                <div className="border border-primary p-3">
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/About" element={<About/>}/>
                      <Route path="/Blog" element={<Blog/>}/>
                  </Routes>
                </div>
              </div>
              
          )
        }
}
*/
/*
import {Routes,Route} from 'react-router-dom'
import Produits from './components/Produits';
import PageProduit from './components/PageProduit';

function App(){

  const produits = [
    {
      id: 1,
      title: 'PC Portable Gamer HP VICTUS',
      price: '7490 DH',
      thumbnail : 'HP16D0195NF.jpg'
    },
    {
      id: 2,
      title: 'PC Portable Gamer HP VICTUS',
      price: '2190 DH',
      thumbnail : 'HP14424U3EA.jpg'
    },
    {
      id: 3,
      title: 'Pc Portable Chromebook Acer',
      price: '3640 DH',
      thumbnail: 'NXATHEF002.jpg'
    },
    {
      id: 4,
      title: 'PC Portable - HUAWEI',
      price: '1270 DH',
      thumbnail: 'HUA6901443442959.jpg'
    },
  ];


  return(
    <div className="App">
          <Routes>
        <Route path="/" element={<Produits produits={produits} />} />
        <Route path="/produit/:id" element={<PageProduit produits={produits} />} />
      </Routes>
    </div>
  )
}
*/
import {Component} from 'react'

class App extends Component{

      constructor(props){
        super(props)
        this.state={}
      }

      render(){
        return(
          <div>
            <button className='Clic_kMe' id='ClickMe'>Click Me</button>
          </div>
        )
      }
}
export default App;
