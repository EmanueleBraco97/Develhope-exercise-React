import React from 'react';

export class Login extends React.Component {
    state = { 
        name:'',
        password: '',
        remember: false,
     } 

     handleInputChange = (event) => {
         const value = event.target.value
         const name = event.target.name

        this.setState({
            [name]: value
        })
     }

     handleCheckboxChange = (event) => {
         const name = event.target.name
         const checked = event.target.checked

         this.setState({
             [name]: checked
         })
     }

     handleResetState = () => {
         this.setState({
            name:'',
            password:'',
            remember: false
         })
     }


    render() { 

        const LoginStyle = {
            color: this.state.password.length < 8 ? 'red' : 'green'
        }

        return (
            <div>
                <div>
                    <button onClick={this.handleResetState}>Reset</button>
                </div>
                
                <div>
                    <button style={LoginStyle}>Login</button>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange}></input>
                    <input type='password' name= 'password' value={this.state.password} onChange={this.handleInputChange}></input>
                    <input type='checkbox' name='remember' checked= {this.state.remember} onChange= {this.handleCheckboxChange}></input>
                </div>
            </div>
        );
    }
}