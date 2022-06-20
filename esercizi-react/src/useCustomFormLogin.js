import { useState } from "react"

export function useCustomFormLogin(){
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    function handleInputChange(event){
        const {name, value} = event.target

        setData((data) => {
            return{
                ...data,
                [name]: value
            }
        })
    }
    
    return {
        data:data,
        onChange:handleInputChange
    }
}