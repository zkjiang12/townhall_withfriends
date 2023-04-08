import {React} from "react";
import {auth} from '../firebase'
import LogInOut from './LogInOut'

export default function UserInfo(props){
    const login = props.login
    const setLogin = props.setLogin
    const anonymity = props.anonymity
    const setAnonymity = props.setAnonymity

    function ChangeAnonymity(){
        setAnonymity((prevA)=>!prevA)
    }

    return(
        <div>
            {login ?
            <div>
                <h3>{auth.currentUser.displayName}</h3>
                <h3>{auth.currentUser.email}</h3>
                <button onClick = {ChangeAnonymity}>You are: {anonymity? 'Anonymous': 'Not Anonymous'}</button>
                <LogInOut login = {login} setLogin={setLogin}/>
            </div>:
            <div>
                <p>login to comment, like and post</p>
                <LogInOut login = {login} setLogin={setLogin}/>
            </div>
            }
        </div>
    )
}