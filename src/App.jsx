import { useState } from 'react'

import './App.css'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <div className='bg-gray-950 flex flex-col justify-center items-center gap-12 w-full h-dvh'>
      <h1 className='text-3xl font-semibold text-white'>Currency Converter</h1>
      
        <InputBox topLabel='from' />
      <InputBox topLabel='to'/>
    
     </div>
    </>
  )
}

export default App
