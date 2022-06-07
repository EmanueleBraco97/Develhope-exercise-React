import React from 'react';

export class UncontrolLogin extends React.Component {
    
    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(
            username,
            password,
            remember
        )
    }

    handleResetForm = () => {
        const username = ''
        const password = ''
        const remember = ''

        console.log(username,password,remember)
    }


    render() { 
        return (
            <div>   
                <form onSubmit={this.handleFormSubmit}>
                    <input name = 'username'></input>
                    <input name = 'password' type='password'></input>
                    <input name = 'remember' type='checkbox'></input>

                    <button type='submit'>Login</button>
                    <button type='reset' onClick={this.handleResetForm}>Reset</button>
                </form>
            </div>
        );
    }
}