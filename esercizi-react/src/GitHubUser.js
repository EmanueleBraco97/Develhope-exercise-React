import {useEffect, useState} from 'react'

export function GitHubUser({username}){
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                console.log(json)
                setData(json)
            })
    }, [username])
    

    return (
        <div>
            {data && <h1>Id utente è: {data.id}</h1>}
            {data && <h1>Nome utente è: {data.name}</h1>}
            {data && <h1>Nome Login utente è: {data.login}</h1>}
            {data && <h1>Città dell'utente è: {data.location}</h1>}
        </div>
    );
}