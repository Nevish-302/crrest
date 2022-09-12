
import { Link } from 'react-router-dom';


const Header = (props) => {
  return (
    <>
    <nav className='navbar'>
      <div className="name">
        <h2 id='naam'>AKASH</h2>
      </div>
      <div className="menu">
        <ul className='navbar-list' id='navbar-main-list'>
        <li className='navbar-list-items' id='homebutton'>
          <Link to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</Link>
        </li>
        <li className='navbar-list-items' id='howtobutton'>
          <Link to="/Howto" className={({ isActive }) => (isActive ? "link-active" : "link")}>How to</Link>
        </li>
        <li className='navbar-list-items' id='contactbutton'>
          <Link to="/Contact" className={({ isActive }) => (isActive ? "link-active" : "link")}>Contacts</Link>
        </li> 
        <li className='navbar-list-items' id='signinbutton'>
          <Link to="/SignIn" className={({ isActive }) => (isActive ? "link-active" : "link")}>SignIn</Link>
        </li> 
        <li className='navbar-list-items' id='signupbutton'>
          <Link to="/SignUp" className={({ isActive }) => (isActive ? "link-active" : "link")}>SignUp</Link>
        </li>           
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header
