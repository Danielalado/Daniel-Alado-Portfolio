import globe from "../../assets/navbar-images/globe.png"
import instagram from "../../assets/navbar-images/instagram.png"
import linked from "../../assets/navbar-images/linked.png"
import github from "../../assets/navbar-images/github.png"
import "./Navbar.css"

export const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-left">
                <h2 className="navbar-logo">DA</h2>
                <div className="navbar-name">
                    <h4>DANIEL ALADO</h4>
                    <p>Creative Web Design</p>
                </div>
            </div>
            
            <ul className="navbar-btns">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">EXPERIENCE</a>
                <a href="#">WORK</a>
                <a href="#">CONTACT</a>
            </ul>
           <hr />
           

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