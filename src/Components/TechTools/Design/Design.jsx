import "./Design.css"
import Code from "../../../assets/ServicesImages/code.png"



export default function FrontEnd() {
    return(
        <div className="frontEnd">
            <div className="frontEnd-top">
                <p className="frontEnd-top-text">Design & UI/UX</p>
                <div className="frontEnd-top-line"></div>
            </div>
            <p className="frontEnd-description">
               Crafting intuitive and visually stunning experiences that align with brand identity.
            </p>

            <div className="frontEnd-cards">
                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="frontEnd-title">Canva</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="frontEnd-title">PixelLab</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="frontEnd-title">LightRoom</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="frontEnd-title">PhotoRoom</p>
                    </div>
            </div>
        </div>
    )
}