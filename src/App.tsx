import './App.css'
import Navigation from './component/Navigation'
import Formal from './assets/img/profile.webp'
import Megabet from './assets/img/projects/mb.webp'

function App() {

  return (
    <>
      <div className='relative w-full flex flex-col h-dvh h-full select-none'>
        <Navigation></Navigation>
        <section className='pt-3 pb-7 px-5 justify-center flex-col flex'>
          <div className='flex-col text-left items-start flex justify-start'>
            <div className='items-center flex text-4xl md:text-6xl lg:text-6xl font-[SFNSDisplay-BLACK]'>MICHAEL TORRES<span className='font-[SFNSDisplay-Thin]'>|</span></div>
            <div className='text-xl md:text-2xl my-1.5'>
              <div className='
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent
              font-[SFNSDisplay-Semibold]'>Web Developer</div>
            </div>
            <div className='text-xs md:text-lg font-[SFNSDisplay-Light]'>Building responsive, user-friendly and optimize website.</div>
          </div>
        </section>
        <section className='items-center md:grid md:grid-cols-[58%_42%] gap-2 md:gap-0'>
          <div className='md:order-2 relative flex'>
            <div className='md:w-[17em] w-[100vw] flex justify-center'>
              <img className='md:w-full w-[50vw] h-auto' src={Formal} alt="About me" />
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--m-bg)] to-transparent z-1" />
            </div>
            <div className='absolute md:relative md:w-[8.6em] w-[100vw] md:text-xl flex font-[SFNSDisplay-Heavy]'>
              <div className='
              z-[-1] whitespace-nowrap flex-col absolute flex
              bg-gradient-to-r from-[#454545] to-[#9f9f9f] bg-clip-text text-transparent
              top-[1vw] right-[13.5vw] text-[6.5vw] text-left 
              md:from-[#9f9f9f] md:to-[#454545]
              md:top-[0.1em] md:left-[-2.9em] md:right-[unset] md:text-[2em]'>
                <div>BUILD THE</div>
                <div className='mt-[-0.4em]'>FUTURE</div>
              </div>
              <div className='
              whitespace-nowrap text-right flex-col flex
              bg-gradient-to-r from-[#454545] to-[#9f9f9f] bg-clip-text text-transparent
              top-[28vw] md:text-left left-[2.1vw] absolute text-[6.5vw]
              md:from-[#9f9f9f] md:to-[#454545]
              md:top-[3em] md:left-[-2em] md:text-[2em]'>
                <div className='mr-8'>DESIGN &</div>
                <div className='mt-[-0.4em]'>CODE</div>
              </div>
              <div className='
              z-[-1] whitespace-nowrap absolute flex
              bg-gradient-to-r from-[#454545] to-[#9f9f9f] bg-clip-text text-transparent
              top-[49vw] right-[4.7vw] text-[6.5vw]
              md:from-[#9f9f9f] md:to-[#454545]
              md:top-[6.8em] md:left-[-1.3em] md:right-[unset] md:text-[2em]'>IN FOCUS</div>
              <div className='
              whitespace-nowrap absolute flex
              bg-gradient-to-r from-[#454545] to-[#9f9f9f] bg-clip-text text-transparent
              top-[60vw] left-[8vw] text-[6.5vw] 
              md:from-[#9f9f9f] md:to-[#454545]
              md:top-[8.8em] md:left-[-2.3em] md:text-[2em]'>
                <div>IN PROGRESS</div>
              </div>
            </div>
          </div>
          <div className='md:order-1 gap-2 flex flex-col text-left p-5'>
            <div className='text-xl md:text-3xl font-[SFNSDisplay-Heavy]'>ABOUT ME</div>
            <div className='text-xl md:text-2xl'>
              <span className='font-[SFNSDisplay-Semibold]'>Michael Torres</span> is a Front-end and Web Designer passionate about crafting beautiful and functional web application designs.
              <br/><br/>
              Bringing together expertise in Web Design and Graphic-Arts development, he creates seamless user experiences, analyzes complex problems, and optimizes systems through a deep understanding of both fields.
            </div>
          </div>        
        </section>
        <section className='text-left flex-col flex p-5 text-[var(--m-bg)] bg-[var(--m-color)]'>
          <div className='mb-5 text-xl md:text-3xl font-[SFNSDisplay-Heavy]'>PROJECTS</div>
          <div className='flex flex-col gap-2 md:grid md:grid-cols-2 gap-2 md:px-8'>
            <div className='p-5 flex flex-col gap-2'>
              <div className='px-[20%]'>
                <img src={Megabet} alt="laptop" />
              </div>
              <div className='text-xl font-[SFNSDisplay-Bold]'>Megabet</div>
              <div className='text-base h-32 md:h-24'>
                MegaBet is a gaming platform registered trademark, brand, and business name owned by MegaBet Corp. Regulated and licensed by the Philippine Amusement and Gaming Corporation (PAGCOR).
              </div>
            </div>
            <div className='p-5 flex flex-col gap-2'>
              <div className='px-[20%]'>
                <img src={Megabet} alt="laptop" />
              </div>
              <div className='text-xl font-[SFNSDisplay-Bold]'>K-Store</div>
              <div className='text-base h-32 md:h-24'>
                K-Store is an e-commerce online shopping platform designed to provide a seamless, retail experience. Built with a focus on intuitive navigation, and responsive design across all devices.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
