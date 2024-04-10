import './NavBar.css';
import {useState} from 'react'
import  logo from "../../assets/Images/farmly.PNG"
import { Link } from "react-router-dom"
import { BiSolidUser} from "react-icons/bi";
import EmailModal from "../EmailModal/EmailModal ";

export default function Navbar() {

  const [showModal, setShowModal] = useState(false);
  return <>
    <nav className="navbar navbar-expand-lg farm-nav  top-0 bg-light"  >
      <div className="container-fluid containerMedia">
      <Link className="navbar-brand" to={`/`}>
        <div className=' logomedia'>
        <img src={logo} /></div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg ms-auto   text-end ">
            <li className="nav-item mr-4">
              <Link className="nav-link active " aria-current="page" to={`/`} >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link "  to={`/AboutUs`} >About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/ContactUs`}  >Contact Us</Link>
            </li>
          </ul>
        </div>
          
          <div className='loginsignupMedia'> 
           <button className="Login-btn" onClick={() => setShowModal(true)}> <BiSolidUser  size="1.5em" style={{marginRight:'5px'}}/>Login/SignUp</button>
          </div>
          <EmailModal show={showModal} onHide={() => setShowModal(false)} />

      </div>
    </nav>
  </>
}

