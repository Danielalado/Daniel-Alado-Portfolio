import "./Tools.css"
import Code from "../../../assets/ServicesImages/code.png"



export default function FrontEnd() {
    return(
        <div className="frontEnd">
            <div className="frontEnd-top">
                <p className="frontEnd-top-text">Tools & Ecosystem</p>
                <div className="frontEnd-top-line"></div>
            </div>
            <p className="frontEnd-description">
               The essential utilities, platforms, and integrations that power my development workflow.
            </p>

            <div className="frontEnd-cards">
                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="frontEnd-title">ChartGPT</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="frontEnd-title">Vs Code</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="frontEnd-title">Discord</p>
                    </div>

                    <div className="frontEnd-card">
                        <div className="frontEnd-image">
                            <img src={Code} alt="" />
                        </div>
                        <p className="frontEnd-title">Stack Overflow</p>
                    </div>
            </div>
        </div>
    )
}