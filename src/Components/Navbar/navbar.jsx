import globe from "../../assets/NavbarImages/globe.png"
import instagram from "../../assets/NavbarImages/instagram.png"
import linked from "../../assets/NavbarImages/linked.png"
import github from "../../assets/NavbarImages/github.png"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return(
        <div className="navbar">
                <Link to="/" className="navbar-left">
                    <h2 className="navbar-logo">DA</h2>
                    <div className="navbar-name">
                        <h4>DANIEL ALADO</h4>
                        <p>CRAETIVE WEB DESIGNER</p>
                    </div>
                </Link>
           
            <ul className="navbar-btns">
                
                <Link to="/">
                HOME
                </Link>

                <Link to="/about">
                ABOUT
                </Link>

                <Link to="/experience">
                EXPERIENCE
                </Link>

                <Link to="/work">
                WORK
                </Link>

                <Link to="/contact">
                CONTACT
                </Link>

            </ul>
           <hr className="navbar-hr" />
           

            <div className="navbar-right">
                <img src={globe} alt="" />
                <img src={instagram} alt="" />
                <img src={linked} alt="" />
                <img src={github} alt="" />

               <a href="#">HIRE ME</a>
            </div>

        </div>
    )
}