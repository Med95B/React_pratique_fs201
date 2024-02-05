import {Trash,Pencil,Info } from 'react-bootstrap-icons';
import { useState } from 'react';
import { Modal,Button } from 'react-bootstrap'

function TableauForm1(props){

    let calculAge=(date)=>Math.floor((new Date() - new Date(date))/(1000*60*60*24*365.25))

    const [showDiplome, setShowDiplome] = useState(false);
    const [userDiplome, setUserDiplome] = useState(null);
  
    const DiplomeModal = (user) => {
      setUserDiplome(user.diplome);
      setShowDiplome(true);
    }

    const closeDiplome = () => {
      setShowDiplome(false);
      setUserDiplome(null);
    };

    return(
   
        <div className="row col-md-10 mx-auto g-3 m-5">
         <table className="table col-md-12">
         <thead>
            <tr className='col-md-12'>
            <th>Id</th><th>Nom</th><th>Age</th><th>Photo</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.map((user)=>{
              console.log(user.statut);
                return(
                    <tr className='col-md-12' key={user.id}>
                    <td>{user.id}</td>
                    <td className='col-md-3'>{user.nom}</td>
                    <td className='col-md-3'>{calculAge(user.date).toString()}</td>
                    <td className='col-md-3'>
                        <img width='100px' height='100px' src={user.photo} alt="profile"/>
                    </td>
                    <td className='col-md-3'>
                        <button className='btn btn-outline-info me-2'
                        onClick={() => DiplomeModal(user)}
                        ><Info/></button> 
                        <button className='btn btn-outline-warning me-2'
                        onClick={()=>props.update(user.id)}
                        ><Pencil/></button>
                        <button className='btn btn-outline-danger me-2'
                        onClick={()=>props.delete(user.id)}
                        ><Trash/></button>
                    </td>
                 </tr>
                )
            })}

        </tbody> 
         </table>

         <Modal show={showDiplome} onHide={closeDiplome}>
        <Modal.Header closeButton>
          <Modal.Title>Diplôme de l'utilisateur :</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userDiplome && (
            <img src={userDiplome} alt="Diplôme" />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDiplome}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    
         </div>
         
        
    )
}

export default TableauForm1