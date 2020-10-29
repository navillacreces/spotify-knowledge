import React from 'react'
import '../css/Login.css'
import { loginUrl } from '../spotify'

export default function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt=""></img>
            <h1>
                Spotify Knowledge
            </h1>
            <p>Personalized for <span>you</span></p>
            <a href={loginUrl}>
                Login with Spotify
            </a>
        </div>
    )
}
