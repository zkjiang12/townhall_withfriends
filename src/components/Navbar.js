import React from 'react'
import jiao from '/Users/zikangjiang/townhall_withfriends/app/src/img/jiao.png'

export default function navbar(){
    return(
        <div className = 'navbar'>
            <h1 className = 'nav--title'>Townhall</h1>
            <img className = 'user--img' src = {jiao} alt = 'chubby dog'/>
            <h3 className = 'nav--info' type = 'button'>User Info</h3>
        </div>
    )
}