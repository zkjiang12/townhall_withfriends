import {React,useState} from 'react'
import {db} from '../firebase'
import {addDoc,collection} from 'firebase/firestore'

export default function Form(){

    const [content,setContent] = useState()
    const [title,setTitle] = useState()

    const postRef = collection(db,'Posts')

    const post = async() =>{
        await addDoc(postRef,{
            title:title,
            content:content
        })
    }

    return(
        <div className = 'form'>
           <h3 className='form--title'>Suggestions</h3>
           <textarea placeholder = 'Title...' className = 'input--title' onChange = {((e)=>setTitle(e.target.value))} />
           <textarea placeholder = 'Content...'className = 'input--body' onChange = {((e)=>setContent(e.target.value))} />
           <button className = 'form--button' onClick = {post}>Submit</button>
        </div>
    )
}