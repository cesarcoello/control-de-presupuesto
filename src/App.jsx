import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  return (
    <div>
      <Header 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
      />
    </div>
  )
}

export default App
