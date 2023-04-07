import {db,auth} from '../firebase'
import { getDoc,updateDoc,collection,doc, deleteDoc } from 'firebase/firestore'
import {React,useEffect,useState} from 'react'


// can make each component dynamic, where it reacts to which page is toggled on
// displays one set of stylin and post for the community page and another for the more formal page.

const Content=(props)=>{
    const post = props.post

    const postsElements = (
        <div className = 'post'>
            <h3>{post.title}</h3>
            <h4 className = 'post--content'>{post.content}</h4> 
        </div>
    )
    const Delete = async() =>{
        deleteDoc(doc(db,'Posts',post.id))
    }
    return(
        <div>
            {postsElements}
            <button onClick={Delete}>Delete</button>
        </div>
    )
}
export default Content

// like button is weird for when a new user logs in 
