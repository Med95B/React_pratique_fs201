import {useState,useEffect} from "react";  

function usePosts(url){ 
    
    const [posts,setPosts]=useState([]) 

    useEffect(()=>{ 
            fetch(url) 
            .then(res=>res.json()) 
            .then(data=>setPosts(data))  
        },[url]) 
    
    return posts 
} 

export default usePosts