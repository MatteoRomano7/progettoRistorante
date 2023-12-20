import React from "react";
class MyForm2 extends React.Component {
    constructor  (props){
        super(props);
        this.state = {nomeSelect: '', nomeText: ''};
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.handleChangeText = this.handleChangeText.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeSelect(event){
        this.setState({nomeSelect: event.target.value})
    }

    handleChangeText(event){
        this.setState({nomeText: event.target.value})
    }

    handleSubmit(event){
        if (this.state.nomeSelect==='') {alert('Non é stato inserito alcun nome!');
        return;
            
        }
        document.getElementById('nome2').innerHTML = `É stato inserito il nome ${this.state.nomeSelect}`

        if (this.state.nomeSelect!='') {document.getElementById('nome3').innerHTML = `É stato inserito il nome ${this.state.nomeText}`
            
        }
        else {document.getElementById('nome3').innerHTML = ''}
    }

    render(){
        return(
        <>
            <form onSubmit={this.handleSubmit}></form>
            <label htmlFor="scelta">Scegli un nome</label>
            <select onChange={this.handleChangeSelect} id="scelta">
                <option value="" defaultChecked></option>
                <option value="Matteo" >Matteo</option>
                <option value="Marco" >Marco</option>
                <option value="Diego" >Diego</option>
                </select>
                <p>&nbsp;</p>
                <label htmlFor="scrivi">Scrivi un nome</label>
                <input type="text" id="scrivi" value={this.state.nomeText} onChange={this.handleChangeText} />
                <button type="submit" id="manda">INVIA</button>
                <h3 id="nome2"></h3>
                <h3 id="nome3"></h3>
        </>)
    }
}
export default MyForm2