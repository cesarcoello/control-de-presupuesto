import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({
     presupuesto,
     setPresupuesto,
     isValidPresupuesto,
     setIsValidPresupuesto
    }) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        
        {isValidPresupuesto ? (
        <h2>control de gastos</h2>
        ) : (
            <NuevoPresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />   
        )
        }
    </header>
  )
}

export default Header