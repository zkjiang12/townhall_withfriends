import {React,useState} from 'react'
import LogInOut from './LogInOut'
import jiao from '/Users/zikangjiang/townhall_withfriends/app/src/img/jiao.png'

export default function Navbar(){

    const[openPage,setOpenPage] = React.useState()

    function openpage(){
        setOpenPage((prevState)=>!prevState)
    }

    return(
        <div className = 'navbar'>
            <h1 className = 'nav--title'>Townhall</h1>
            <img className = 'user--img' src = {jiao} alt = 'chubby dog'/>
            <h3 className = 'nav--info' type = 'button' onClick = {openpage}>User Info</h3>
            <LogInOut
                openPage = {openPage} 
            />
        </div>
    )
}