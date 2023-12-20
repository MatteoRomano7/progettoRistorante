import React from "react"
import { Row, Col, Conntainer, Form, Button, Alert } from "react-bootstrap"

//Quali campi usiamo per la prentoazione?
// 1. nome string (obbligatorio)
// 2. telefono string (obbligatorio)
// 3. persone number (valore predefinito:1)
// 4. fumatori boolean
// 5. data e ora: string (obbligatorio)
// 6. note: string

class Prenotazione extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      prenotazione: {
        nome: "",
        telefono: "",
        persone: 1,
        fumatori: false,
        dataOra: "",
        note: "",
      },
    }

    this.showAlert = false
  }
  //con la arrow fuction sottostante, non c'é bisogno di fare il bind nel constructor

  handleInputChange = (proprietá, valore) => {
    this.setState({
      prenotazione: { ...this.setState.prenotazione, [proprietá]: valore },
    })
    //Se vogliamo utilizzare un paramentro o una variabile come nome di una proprietá dobbiamo valutare il contenuto del parametro o della variabile con le parentesi quadre. In questo caso "proprietá" puó essere nome, telefono, persone....
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Invio prenotazione")
    //Fetch con metodo POST
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/reservation",
        {
          method: "POST",
          body: JSON.stringify(this.state.prenotazione),
          headers: { "Content-Type": "Application/json" },
        }
      )

      if (res.ok) {
        this.setState({
          prenotazione: {
            nome: "",
            telefono: "",
            persone: 1,
            fumatori: false,
            dataOra: "",
            note: "",
          },
          showAlert: true,
        })
      } else {
        throw new Error("Errore nel salvataggio della prenotazione")
      }
    } catch (error) {
      console.log("Errore:", error)
    }
  }
  render() {
    ;<Conntainer>
      <Row className="justify-content-center mt-3">
        <Col md={6}>
          <h2 className="text-center">Modulo di prenotazione</h2>
          {this.state.showAlert === true && (
            <Alert variant="info">Prenotazione salvata!</Alert>
          )}
        </Col>
      </Row>
    </Conntainer>
  }
}
export default Prenotazione
