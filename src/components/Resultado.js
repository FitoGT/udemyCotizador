import React, {Component} from 'react';
import {TransitionGroup,CSSTransition} from 'react-transition-group';

class Resultado extends Component{
    render(){
        const total = this.props.total;
        const mensaje = !(total) ? 'Selecciona Marca, Año y Plan' : 'El total es $';
        return(
            <div className="gran-total">
                {mensaje}
                <TransitionGroup component="span" className="resultado">
                    <CSSTransition 
                        classNames="resultado"
                        key={total}
                        timeout={{enter:500,exit:500}}>
                        <span>{total}</span>
                    </CSSTransition>

                </TransitionGroup>
            </div>
        )
    }
}

export default Resultado;