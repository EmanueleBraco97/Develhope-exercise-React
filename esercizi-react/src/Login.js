import {useState} from 'react'

export function Login(){
    const [data, setData] = useState({
        username : '',
        password : '',
        remember : false
    })

    function handleInputChange(event){
        const {name, type, checked, value} = event.target

        setData((data) => {
            return{
                ...data,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }
    console.log(data)
    return(
        <form>
            <input onChange={handleInputChange} name='username' value={data.username}></input>
            <input onChange={handleInputChange} name='password' type='password' value={data.password}></input>
            <input onChange={handleInputChange} name='remember' type='checkbox' value={data.remember}></input>
        </form>
    )
}






















// import React from 'react';
// export class Login extends React.Component {
//     state = { 
//         name:'',
//         password:'',
//         remember: false,
//      } 

//      handleInputChange = (event) => {
//          const value = event.target.value
//          const name = event.target.name

//         this.setState({
//             [name]: value
//         })
//      }

//      handleCheckboxChange = (event) => {
//          const name = event.target.name
//          const checked = event.target.checked

//          this.setState({
//              [name]: checked
//          })
//      }

//      handleResetState = () => {
//          this.setState({
//             name:'',
//             password:'',
//             remember: false
//          })
//      }


//     render() { 
//         return (
//             <div>
//                 <div>
//                     <button onClick={this.handleResetState}>Reset</button>
//                 </div>
                
//                 <div>
//                     <button disabled = {!this.state.name || !this.state.password}>Login</button>
//                     <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange}></input>
//                     <input type='password' name= 'password' value={this.state.password} onChange={this.handleInputChange}></input>
//                     <input type='checkbox' name='remember' checked= {this.state.remember} onChange= {this.handleCheckboxChange}></input>
//                 </div>
//             </div>
//         );
//     }
// }