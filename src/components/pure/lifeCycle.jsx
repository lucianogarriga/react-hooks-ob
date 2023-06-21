/**
 * Ejemplo de Componente de Tipo Clase que 
 * dispone de los metodos de ciclo de vida 
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class lifeCycle extends Component {
  constructor(props){
    super(props)
    console.log('CONSTRUCTOR: Cuando se instancia el componente');
  }

  componentWillMount(){ 
    console.log('WillMount: Antes del montaje del componente');
  }

  componentDidMount(){
    console.log('DidMount: Justo al terminar el montaje del componente, antes de pintarlo');
  }

  componentWillReceiveProps(nextProps){
    console.log('WillReceiveProps: Si va a recibir nuevas props');
  }

  componentWillUpdate(nextProps, nextState){
    console.log('WillUpdate: Justo antes de Actualizarse');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('DidUpdate: Justo despues de Actualizarse');
  }

  componentWillUnmount(){
    console.log('DidUpdate: Justo antes de desaparecer');
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default lifeCycle
