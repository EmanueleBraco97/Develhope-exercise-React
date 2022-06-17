import { GitHubUser } from './GitHubUser'
import { useState } from 'react'

export function GitHubUserList(){
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
                    <GitHubUser username={username}></GitHubUser>
                ))
            }
        </div>
    )
}