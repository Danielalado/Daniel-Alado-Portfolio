import headerImage from "../../assets/headerImages/right-arrow.png" 
import "./Header.css"

export const Header = () => {
    return(
        <section id="header">
             <div className="header">
            <p className="header-top">FRONTEND DEVELOPER <span className="slash">//</span> WEB DESIGNER</p>
            <h1>Creative</h1>
            <h1 className="h1-bottom">Web Designer</h1>
            <p className="description">
                I'm a Ghanaian-based web designer and frontend developer specializing in React and JavaScript. I design and build high-converting websites and product UIs that feel premium and ship fast.
            </p>

            <div className="my-works">
                <a href="#" className="project">
                    START PROJECT
                    <img src={headerImage} alt="" />
                </a>

                <a href="#" className="portfolio">
                    PORTFOLIO
                </a>
            </div>

            <div className="header-bottom-line"></div>

        </div>
        </section>
       
    )
}