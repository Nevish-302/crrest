import React, { useState } from "react";
import Header from "./Header";


const SignIn = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function performValidation() {
        return username.length > 0 && password.length > 0;
    }
    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <>
            <Header />
            <div className="Login">
                <h3>Login</h3>
                <form onSubmit={handleSubmit}>

                    <input
                        id="login_username"
                        autoFocus
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={e => setUsername(e.target.value)} />

                    <input
                        value={password}
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        type="password" />

                    <button disabled={!performValidation()} type="submit">SignIn</button>
                </form>

            </div>
        </>
    );
}
export default SignIn