import React, { useState } from "react";
import Footer from "../Footer";
import Header from "./Header";


const SignIn = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function performValidation() {
        return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        //event.preventDefault();
    }
    return (
        <>
            <Header />
            <div className="home-background-animation-1"></div>
            <div className="home-background-animation-2"></div>
            <div className="login">
                <h3>Login</h3>
                <form onSubmit={handleSubmit} action="userauth/login" method="post">

                    <div className="form">
                        <input
                            id="login_username"
                            autoFocus
                            name = "username"
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)} />

                        <input
                            value={password}
                            name ="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            type="password" />

                        <button disabled={!performValidation()} type="submit">SignIn</button>
                    </div>
                </form>
                <div className="new_user">
                    <p>New User? <h4> SignUp</h4></p>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default SignIn