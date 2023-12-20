import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./components/Home"
import MyForm1 from "./components/MyForm1"
import MyForm2 from "./components/MyForm2"
import Prenotazione from "./components/Prenotazione"

function App() {
  return (
    <div>
      <CustomNavbar testoAddizionale="Il nostro ristorante epico!" />
      <Home />
      <hr />
      <MyForm1 />
      <MyForm2 />
      <Prenotazione />
    </div>
  )
}

export default App
