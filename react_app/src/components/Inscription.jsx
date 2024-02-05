//import { useState } from "react";
import {Component} from 'react';

/*
function Inscription(){

    const msg={clicked:false, 
               message:"Bien venu visiteur",
               btnMessage:"inscription"}

    const [msg_obj,setMsg_obj]=useState(msg)

    let handelClick=()=>msg_obj.clicked ? setMsg_obj(msg)
                                        :setMsg_obj({clicked:true,
                                                     message:"votre inscription est effectuée", 
                                                     btnMessage:"merci"})

    return(
    <> 
    <h2>{msg_obj.message}</h2> 
    <button onClick={handelClick}>{msg_obj.btnMessage}</button> 
    </>)
}

*/
class Inscription extends Component {

    constructor(){
        super()
        this.state={clicked:false, 
            message:"Bien venu visiteur",
            btnMessage:"inscription"}
        this.initiale=this.state
    }
    
    handelClick=()=>this.state.clicked ? this.setState(this.initiale)
                                       : this.setState({clicked:true,
                                                        message:"votre inscription est effectuée", 
                                                        btnMessage:"merci"})
                       
    render(){
        return(
            <> 
            <h2>{this.state.message}</h2> 
            <button onClick={this.handelClick}>{this.state.btnMessage}</button> 
            </>)
    }
    
}

export default Inscription