import React, { useState } from 'react';


const Access = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleConfPasswordChange = (e) => {
    setConfPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    if (password !== confPassword) {

      alert("Password did not Match");
    }
    else {

      alert('A form was submitted with Name :"' + name + '"  and Email :"' + email + '"');
    }
    e.preventDefault();

  }

  return (
    <>
      <div className="signup_crrest">
        <h2>crrest</h2>
      </div>
      <div className='access_background'>

        <div className="home-background-animation-1"></div>
        <div className="home-background-animation-2"></div>

        <div className="signup_dashboard">
          <div className="crrest_signup_about">
            <h1>
              crrest
            </h1>
          </div>

          <div className="access">
            <header className="App-header">
              <form onSubmit={(e) => { handleSubmit(e) }}>

                <div className="main_access">
                  <div className="register_navbar input_size">
                    <h3 className='top_sign' id='top_signup'> SignUp </h3>

                  </div>

                  <div className="inputs_signup">
                    <input className='input_size' type="text" value={name} placeholder="username" required onChange={(e) => { handleChange(e) }} /><br />


                    <input className='input_size' type="email" value={email} placeholder="Email id" required onChange={(e) => { handleEmailChange(e) }} /><br />


                    <input className='input_size' type="password" value={password} placeholder="Password" required onChange={(e) => { handlePasswordChange(e) }} /><br />


                    <input className='input_size' type="password" value={confPassword} placeholder="Confirm Password" required onChange={(e) => { handleConfPasswordChange(e) }} /><br />

                    <input id="submit" type="submit" value="Submit" />
                  </div>
                </div>


              </form>
            </header>
          </div>
        </div>

      </div>
    </>
  )
}

export default Access
