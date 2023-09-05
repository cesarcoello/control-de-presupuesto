import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import {formatearFecha} from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'


const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones

}

const Gasto = ({gasto}) => {

  const {categoria, nombre, cantidad, id, fecha} = gasto;

  const leadingActions = () => {
    console.log('editar...');
  }

  const trailingActions = () => {
    console.log('eliminar');
  }

  return (
    <SwipeableList>
        <SwipeableListItem
            leadingActions={leadingActions}
            trailingActions={trailingActions}
        >
          <div className='gasto sombra'>
              <div className='contenido-gasto'>
                <img 
                    src={diccionarioIconos[categoria]}
                    alt='Icono Gasto'
                />
                
                  <div className='descripcion-gasto'>
                        <p className='categoria'>{categoria}</p>
                        <p className='nombre-gasto'>{nombre}</p>
                        <p className='fecha-gasto'>
                            Agregado el: {' '}
                            <span>{formatearFecha(fecha)}</span>
                        </p>
                  </div>
              </div>

                  <p className='cantidad-gasto'>L {' '}{cantidad}</p>

          </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto