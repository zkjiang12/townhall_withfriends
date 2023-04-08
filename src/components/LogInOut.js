import {auth} from '../firebase'
import { GoogleAuthProvider,signInWithPopup, signOut} from 'firebase/auth'

export default function LogInOut(props){
    const login = props.openPage
    const provider = new GoogleAuthProvider();

    const Logout  = async() =>{
        await signOut()
    }
    const Login = async()=>{
        await signInWithPopup(auth, provider);
    }

    return(
        <div>
            {login ?
                <button onClick = {Logout}>Log Out</button>:
                <button onClick = {Login}>Log In</button>
            }   
        </div>
    )
}