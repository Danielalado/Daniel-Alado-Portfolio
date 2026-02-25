import { About } from "./Components/About/About";
import { Header } from "./Components/Header/Header";
import { Navbar } from "./Components/Navbar/navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
    </div>
  )
}