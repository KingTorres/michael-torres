import './App.css'
import Navigation from './component/Navigation'
import Formal from './assets/img/profile.webp'

function App() {

  return (
    <>
      <div className='relative w-dvw flex flex-col h-dvh'>
        <Navigation></Navigation>
        <section className='py-5 px-5 justify-center flex-col flex'>
          <div className='flex-col text-left items-start flex justify-start'>
            <div className='text-4xl font-[SFNSDisplay-BLACK]'>MICHAEL TORRES</div>
            <div>
              <div className='
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent
              font-[SFNSDisplay-Semibold] text-lg'>Front-end Developer</div>
              <div className='w-10 border'></div>
            </div>
            <div className='mt-2 text-xs font-[SFNSDisplay-Light]'>Building responsive, user-friendly and optimize website.</div>
          </div>
        </section>
        <section className='relative flex'>
          <div className='w-34.5 flex'>
            <div className='
            bg-gradient-to-r from-[#6b1212] to-[#a33939] bg-clip-text text-transparent
            z-[-1] top-5 left-17 absolute text-right text-3xl font-[SFNSDisplay-Black] whitespace-nowrap'>BUILD THE<br/>FUTURE</div>
            <div className='
            bg-gradient-to-r from-[#1b2d05] to-[#58a734] bg-clip-text text-transparent
            top-32 left-8 absolute text-3xl font-[SFNSDisplay-Black] whitespace-nowrap text-right flex-col flex'>
              <div className='mr-8'>DESIGN &</div>
              <div>CODE</div>
            </div>
            <div className='
            bg-gradient-to-r from-[#411763] to-[#5335b9] bg-clip-text text-transparent
            z-[-1] top-60 left-7 absolute text-3xl font-[SFNSDisplay-Black] whitespace-nowrap text-right flex'>IN FOCUS</div>
            <div className='
            bg-gradient-to-r from-[#b95610] to-[#919709] bg-clip-text text-transparent
            top-78 left-9 absolute text-3xl font-[SFNSDisplay-Black] whitespace-nowrap text-left flex-col flex'>
              <div>IN PROGRESS</div>
            </div>
          </div>
          <div className='w-64.5'>
            <img className='w-full h-auto' src={Formal} alt="About me" />
          </div>
        </section>

      </div>
    </>
  )
}

export default App
