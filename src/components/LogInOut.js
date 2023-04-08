import {React,useState} from 'react'
import {auth,db} from '../firebase'
import {GoogleAuthProvider,signInWithPopup, signOut} from 'firebase/auth'
import {collection,doc,getDocs,setDoc} from 'firebase/firestore'

export default function LogInOut(props){
    const login = props.login
    const setLogin = props.setLogin

    const [users,setUsers] = useState()
    const [isUser,setIsUser] = useState('')

    const userRef=collection(db,'users')

    function checkReturningUser(){
        let User
        const checkUser = async() =>{
            const dbUsers = await getDocs(userRef)
            const filteredUsers = dbUsers.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id
            }))
            setUsers(filteredUsers)

            filteredUsers.map((user)=>{
                if (user.id == auth.currentUser.email){
                    setIsUser(true)
                    User = true
                    console.log('true')
                } 
            })

            console.log(isUser)
            console.log(User)
            if(User != true){
                console.log('creating a new user')
                setDoc(doc(db,'users',auth.currentUser.email),{
                    user:auth.currentUser.email,
                    identity:false,
                    name:auth.currentUser.displayName
                })
            }
        }
        checkUser()
        
    }

    const Login = async()=>{
        const googleProvider = new GoogleAuthProvider()
        await signInWithPopup(auth, googleProvider)
        checkReturningUser()
        setLogin(true)
    }

    const LogOut = async() =>{
        signOut(auth)
        setLogin(false)
    }

    return(
        <div>
            {login ? 
                <button onClick = {LogOut}>Log Out</button>:
                <button onClick = {Login}>Log In</button>
            }
        </div>
    )
}