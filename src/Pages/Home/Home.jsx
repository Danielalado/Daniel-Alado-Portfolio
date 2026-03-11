import About from "../../Components/About/About";
// import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header"
import Project from "../../Components/Projects/Project";
import Services from "../../Components/Services/Services"
import TechTools from "../../Components/TechTools/TechTools"


export default function Home() {
    return(
    <div>
        <Header />
        <About />
        <Services />
        <TechTools />
        <Project />
    </div>
    )
}