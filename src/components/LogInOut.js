import {auth} from '../firebase'
import { GoogleAuthProvider,signInWithPopup, signOut} from 'firebase/auth'

export default function LogInOut(props){

    const Logout  = async() =>{
        await signOut()
    }
    
    const Login = async()=>{
        const googleProvider = new GoogleAuthProvider()
        await signInWithPopup(auth, googleProvider)
    }
    return(
        <div>
            <button onClick = {Login}>Log In</button>
            <button onClick = {Logout}>Log Out</button>
        </div>
    )
}