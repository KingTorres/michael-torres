import './App.css'
import Navigation from './component/Navigation'
import Formal from './assets/img/profile.webp'

function App() {

  return (
    <>
      <div className='relative w-full flex flex-col h-dvh'>
        <Navigation></Navigation>
        <section className='py-5 px-5 justify-center flex-col flex'>
          <div className='flex-col text-left items-start flex justify-start'>
            <div className='items-center flex text-4xl md:text-6xl lg:text-6xl font-[SFNSDisplay-BLACK]'>MICHAEL TORRES<span className='font-[SFNSDisplay-Thin]'>|</span></div>
            <div>
              <div className='
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent
              font-[SFNSDisplay-Semibold] text-xl md:text-2xl lg:text-2xl'>Front-end Developer</div>
              <div className='w-10 border'></div>
            </div>
            <div className='mt-2 text-xs md:text-s lg:text-s font-[SFNSDisplay-Light]'>Building responsive, user-friendly and optimize website.</div>
          </div>
        </section>
        <section className='items-center md:grid md:grid-cols-2 gap-2'>
          <div className='md:order-2 relative flex md:text-base'>
            <div className='w-[8.6em] flex font-[SFNSDisplay-Bold]'>
              <div className='
              bg-gradient-to-r from-[#454545] to-[#9f9f9f] bg-clip-text text-transparent
              z-[-1] top-[0.5em] left-[3.5em] text-[1.6em] absolute text-right whitespace-nowrap flex-col flex'>
                <div>BUILD THE</div>
                <div className='mt-[-0.4em]'>FUTURE</div>
              </div>
              <div className='
              bg-gradient-to-r from-[#454545] to-[#9f9f9f] bg-clip-text text-transparent
              top-[5.2em] left-[2.1em] absolute text-[1.6em] whitespace-nowrap text-right flex-col flex'>
                <div className='mr-8'>DESIGN &</div>
                <div className='mt-[-0.4em]'>CODE</div>
              </div>
              <div className='
              bg-gradient-to-r from-[#454545] to-[#9f9f9f] bg-clip-text text-transparent
              z-[-1] top-[9em] left-[1.7em] absolute text-[1.6em] whitespace-nowrap text-right flex'>IN FOCUS</div>
              <div className='
              bg-gradient-to-r from-[#454545] to-[#9f9f9f] bg-clip-text text-transparent
              top-[11.7em] left-[1.9em] absolute text-[1.6em] whitespace-nowrap text-left flex-col flex'>
                <div>IN PROGRESS</div>
              </div>
            </div>
            <div className='w-[16.5em]'>
              <img className='w-full h-auto' src={Formal} alt="About me" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--m-bg)] to-transparent z-1" />
            </div>
          </div>
          <div className='md:order-1 gap-2 flex flex-col text-left py-7 px-5'>
            <div className='text-xl md:text-3xl font-[SFNSDisplay-Heavy]'>ABOUT ME</div>
            <div className='text-xl md:text-2xl'>
              Michael Torres is a Web Designer passionate about crafting beautiful and functional web application designs.
              <br/><br/>
              Bringing together expertise in Web Design and Graphic-Arts development, he creates seamless user experiences, analyzes complex problems, and optimizes systems through a deep understanding of both fields.
            </div>
          </div>        
        </section>
      </div>
    </>
  )
}

export default App
