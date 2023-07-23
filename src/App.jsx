import React, {Component} from 'react';
import "./App.css"

export default class App extends Component {
    handleSubmitClick = () =>{
        const name = this._name.value;
        const email = this._mail.value
        const phone = this._phone.value;
        if (name&&email&&phone !== '')
            return alert(` Your name: ${name} \n Your Email: ${email} \n Your Phone: ${phone}`)
        else console.log('missed stage!')
    }
    render() {
        return (
            <div className={"container"}>
                <h2 style={{color: "white"}}>Registration</h2>
                <input
                    ref={input => this._name = input}
                    placeholder={"Type your name:"}
                    type="text"
                    className={"from-input"}
                />
                <input
                    ref={input => this._mail = input}
                    placeholder={"Type your Email address:"}
                    type="text"
                    className={"from-input"}
                />
                <input
                    ref={input => this._phone = input}
                    placeholder={"Type your phone number:"}
                    type="text"
                    className={"from-input"}
                />
                <button
                    onClick={this.handleSubmitClick}
                    className={"btn"}>
                    Submit
                </button>
            </div>
        );
    }
}