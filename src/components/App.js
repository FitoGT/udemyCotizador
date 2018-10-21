import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import {obtenerDiferenciaAnio,calcularMarca,obtenerPlan} from '../helper';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      result : '',
      datos : {}
    }
}

  cotizarSeguro = (datos) =>{
    const {marca,plan,year} = datos;
    let result = 2000;
    const yearDif = obtenerDiferenciaAnio(year);
    result -=((yearDif*3)*result)/100;
    result = calcularMarca(marca)*result;
    let incrementPlan = obtenerPlan(plan);
    result = parseFloat(result*incrementPlan).toFixed(2);
   
    this.setState({
      result:result,
      datos:datos
    })

  }

  render() {
    return (

      <div className="contenedor">
        <Header 
          titulo='Cotizador de Seguro de Auto'
        />
        <div className="contenedor-formulario">
         <Formulario
            cotizarSeguro={this.cotizarSeguro}
         />
         <Resumen
            datos = {this.state.datos}
            result = {this.state.result}
         />
        </div>
      </div>
    );
  }
}

export default App;
