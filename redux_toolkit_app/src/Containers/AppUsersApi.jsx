import {useDispatch,useSelector} from 'react-redux'
import { fetchUsers } from '../Stores/UsersApiStore'

export default function AppUsersApi(){
    const dispatch=useDispatch()
    const data=useSelector(state=>state.users.users)
    const loading=useSelector(state=>state.users.loading)
    const error=useSelector(state=>state.users.error)

    function loadUsers(){
        dispatch(fetchUsers())
    }

    return(
        <div>
            <h3>liste users</h3>
            <button onClick={loadUsers}>charger uers</button>
        {loading && <h3>chargement...</h3>}
        {(!loading && data.length>0) && 
        <ul>
            {data.map(user=><li key={user.id}>{user.name}</li>)}
        </ul>
        }
        {
            (!loading && error) && <p style={{color:'red'}}>{error}</p>
        }
        </div>

    )
}