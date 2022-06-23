import { GithubUser } from './GithubUser'
import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export function GithubUserList(){
    const [username, setUsername] = useState()
    const [usernames, setUsernames] = useState([])

    const insertInputUsername = (event)=> {
        setUsername(event.target.value)
        console.log(event.target.value)
    }

    const addUsername = () => {
        let copy = [...usernames];
        copy = [...copy, username];
        setUsernames(copy)
        console.log(copy)
      }

    return(
        <div>
            <input name='username' onChange={insertInputUsername} ></input>
            <button onClick={addUsername}>Add</button>

            {
                usernames.map((username) => (
                    <GithubUser username={username}></GithubUser>
                ))
            }

            <h2>All List User</h2>

            <ul>
                <li><Link to='emanuelebraco97'>Utente 1</Link></li>
            </ul>

            <hr></hr>

            <Outlet></Outlet>
        </div>
        
    )
}