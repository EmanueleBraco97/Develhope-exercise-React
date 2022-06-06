import React from 'react';

export class Login extends React.Component {
    state = { 
        name:'',
        password:'',
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




    render() { 
        return (
            <div>
                <input type='text' name='name' value={this.state.name} onChange={this.handleInputChange}></input>
                <input type='password' name= 'password' value={this.state.password} onChange={this.handleInputChange}></input>
                <input type='checkbox' name='remember' checked= {this.state.remember} onChange= {this.handleCheckboxChange}></input>
            </div>
        );
    }
}