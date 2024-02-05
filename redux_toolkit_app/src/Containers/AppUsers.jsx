import {useDispatch,useSelector} from 'react-redux';

import {useRef } from 'react'
import { addUser } from '../Stores/UsersStore';
import "../Styles/AppUsers.css"
import Users from "../Components/Users";


function AppUsers(){
    const dispatch=useDispatch();
    const usersList=useSelector(data=>data.users.value)

    const nom=useRef('');
    const prenom=useRef('');
    function ajouter(){

        const id=usersList.length+1;
        dispatch(addUser({id:id,nom:nom.current.value,prenom:prenom.current.value}))
        nom.current.value="";
        prenom.current.value="";

    }
    
return <div className="App">
    <h3>Ajouter user</h3>
<input type="text" placeholder="nom" ref={nom} />
<input type="text" placeholder="prenom" ref={prenom}/>
<button onClick={()=>{ajouter()}}>ajouter</button>
<Users/>
</div>
}
export default AppUsers;