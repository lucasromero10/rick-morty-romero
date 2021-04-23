import React from 'react';
import Header from './componentes/Header'
import Personajes from './componentes/Personajes'
import Footer from './componentes/Footer'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      arrayTarjeta: [],
      search: " ",
    }
  };

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=21")
    .then(r => r.json())
    .then((resultado)=>{
      //console.log(resultado)
      this.setState({
        arrayTarjeta: resultado.results});
      
    })
    .catch((e)=> console.log(e))
  }
  

render() {
  return (
    <div className="App">

      <header className="App-header">
          <div className="Header">
                <Header />
          </div>
      </header>

        <div className="grid-container">
          

           
          {
                  this.state.arrayTarjeta.map((item) => {
                    return <Personajes
                    key = {item.id}
                    elemento = {item}
                  }))
          

        </div>

          <footer className="Footer">
              <Footer />
          </footer>


    </div>
    );
  }
}
