import { useState } from 'react'
import './App.css'
import VTracerIcon from './component/logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-dvw flex flex-col h-dvh'>
        <div className='bg-[var(--m-bg)] relative px-2 py-2 items-center justify-between flex border border-1 border-red-500'>
          <div>
            <VTracerIcon size={30}></VTracerIcon>
          </div>
          <div className='bg-[var(--m-bg)] shadow-lg gap-8 text-left flex-col flex text-xl px-10 py-10 rounded-lg top-[100%] right-0 absolute border-1' style={{fontFamily: 'SFNSDisplay-Semibold'}}>
            <div className='py-1.5 border-b-1 w-full pl-5 pr-10'>HOME</div>
            <div className='py-1.5 border-b-1 w-full pl-5 pr-10'>WORK</div>
            <div className='py-1.5 border-b-1 w-full pl-5 pr-10'>CONTACT</div>
          </div>
        </div>
        
        <section style={{fontFamily: 'SFNSDisplay-Regular'}}>
          <div>Michael Torres</div>
        </section>

      </div>
    </>
  )
}

export default App
