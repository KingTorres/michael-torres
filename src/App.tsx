import './App.css'
import ProfileStand from './component/ProfileStand'
import Navigation from './component/Navigation'
import Qoute from './assets/img/qoute.webp'
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
            <ProfileStand></ProfileStand>
          </div>
          <div className='relative md:order-1 gap-2 items-center justify-center flex flex-col text-left p-5'>
            <div className='text-xl md:text-3xl font-[SFNSDisplay-Heavy] w-full text-center md:text-left'>ABOUT ME</div>
            <div className='text-xl md:text-2xl'>
              I'm <span className='font-[SFNSDisplay-Semibold]'>Michael Torres</span>, a Web Designer and Front-end Developer passionate about <span className='font-[SFNSDisplay-Semibold]'>crafting beautiful and functional web application designs</span>.
              <br/><br/>
              Bringing together expertise in Web Design and Graphic-Arts development, I create seamless user experiences, analyze complex problems, and optimize systems through a deep understanding of both fields.
            </div>
            <div className='h-[50%] w-[50%] absolute opacity-[9%] z-[-1]'>
              <img className='h-full w-full object-contain' src={Qoute} alt="qoute" />
            </div>
          </div>        
        </section>
        <section className='text-center flex-col flex py-6 px-5 text-[var(--m-bg)] bg-[var(--m-color)]'>
          <div className='mb-5 text-xl md:text-3xl font-[SFNSDisplay-Heavy]'>PROJECTS</div>
          <div className='flex flex-col gap-2 md:grid md:grid-cols-2 gap-2 md:px-8'>
            <div className='p-5 flex flex-col gap-2'>
              <div className='px-[20%]'>
                <img src={Megabet} alt="laptop" />
              </div>
              <div className='text-center text-xl font-[SFNSDisplay-Bold]'>Megabet</div>
              <div className='text-left text-base h-32 md:h-24'>
                MegaBet is a gaming platform registered trademark, brand, and business name owned by MegaBet Corp. Regulated and licensed by the Philippine Amusement and Gaming Corporation (PAGCOR).
              </div>
            </div>
            <div className='p-5 flex flex-col gap-2'>
              <div className='px-[20%]'>
                <img src={Megabet} alt="laptop" />
              </div>
              <div className='text-center text-xl font-[SFNSDisplay-Bold]'>K-Store</div>
              <div className='text-left text-base h-32 md:h-24'>
                K-Store is an e-commerce online shopping platform designed to provide a seamless, retail experience. Built with a focus on intuitive navigation, and responsive design across all devices.
              </div>
            </div>
          </div>
        </section>
        <section className='p-5'>
          <div className='text-xl md:text-3xl font-[SFNSDisplay-Heavy] w-full text-center mb-2'>EXPERIENCE</div>
          <div className='grid grid-cols-2 gap-2 md:flex md:justify-between'>
            <div className='shadow-lg md:shadow-none py-7 px-2 flex flex-col gap-1'>
              <div className='font-[SFNSDisplay-Heavy] text-4xl md:text-6xl'>3</div>
              <div className='text-[0.7em] md:text-[0.8em]'>Years of <br className='md:hidden'/>Web Development</div>
            </div>
            <div className='shadow-lg md:shadow-none py-7 px-2 flex flex-col gap-1'>
              <div className='font-[SFNSDisplay-Heavy] text-4xl md:text-6xl'>2</div>
              <div className='text-[0.7em] md:text-[0.8em]'>Years of <br className='md:hidden'/>Graphic Design</div>
            </div>
            <div className='shadow-lg md:shadow-none py-7 px-2 flex flex-col gap-1'>
              <div className='font-[SFNSDisplay-Heavy] text-4xl md:text-6xl'>4</div>
              <div className='text-[0.7em] md:text-[0.8em]'>Years in <br className='md:hidden'/>Publishing Industry</div>
            </div>
            <div className='shadow-lg md:shadow-none py-7 px-2 flex flex-col gap-1'>
              <div className='font-[SFNSDisplay-Heavy] text-4xl md:text-6xl'>2</div>
              <div className='text-[0.7em] md:text-[0.8em]'>Years of <br className='md:hidden'/>Data Analysis</div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default App
