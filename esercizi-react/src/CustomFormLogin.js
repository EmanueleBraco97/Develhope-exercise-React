import {useCustomFormLogin} from './useCustomFormLogin'
 

export function CustomFormLogin(){
    const {data, onChange} = useCustomFormLogin()

  
    return(
        <form>
            <input name='username' value={data.username} onChange={onChange}></input>
            <input name= 'password' value={data.password} type='password' onChange={onChange}></input>
        </form>
    )
}