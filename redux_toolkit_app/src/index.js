import ReactDOM from "react-dom/client";
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit'

//import stores
//import userReducer   from './Stores/UsersStore'
import userApiReducer from './Stores/UsersApiStore'


//import containers
//import App from './App';
//import AppUsers from "./Containers/AppUsers";
import AppUsersApi from "./Containers/AppUsersApi";

const root=ReactDOM.createRoot(document.getElementById("root"));

//create stores
/*const store=configureStore({
    reducer:{
        users:userReducer,
    }
})*/
const store=configureStore({
    reducer:{
        users:userApiReducer
    }
})

root.render(<>
    <Provider store={store}>  
    <AppUsersApi/>
    </Provider>
  
    </>)