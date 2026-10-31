import './App.css'
import Navigation from './component/Navigation'
import About from './component/About'
import Projects from './component/Projects'
import Talent from './component/Talent'
import CoverPhoto from './assets/img/coverPhoto.webp'
import Certification from './component/Certification'
import Contact from './component/Contact'
function App() {

  return (
    <>
      <div className='relative w-full flex flex-col h-dvh h-full select-none'>
        <Navigation></Navigation>
        <div className='md:px-2'>
          <About></About>
          <section className='animate-[fadeIn_3.5s_linear] text-center flex-col flex py-6 px-5 text-[var(--m-bg)] bg-[var(--m-color)] scroll-mt-10 md:scroll-mt-11' id='SectionProjects'>
            <div className='mb-5 text-xl md:text-3xl font-[SFNSDisplay-Heavy]'>PROJECTS</div>
            <Projects></Projects>
          </section>
          <section className='animate-[fadeIn_3.5s_linear] p-5 pb-8'>
            <div className='text-xl md:text-3xl font-[SFNSDisplay-Heavy] w-full text-center mb-2'>EXPERIENCE</div>
            <div className='text-left'>
              My professional journey bridges technical execution with creative vision. With experience leading front-end development, graphic design, and publishing workflows, I combine a strong design sense with a data-driven approach to build intuitive, high-performance web experiences.
            </div>
            <div className='grid grid-cols-2 gap-2 md:flex md:justify-center md:mt-3'>
              <div className='shadow-lg w-full py-7 px-2 flex flex-col gap-1'>
                <div className='font-[SFNSDisplay-Heavy] text-4xl md:text-6xl'>3</div>
                <div className='text-[0.7em] md:text-[0.8em]'>Years of <br className='md:hidden'/>Web Development</div>
              </div>
              <div className='shadow-lg w-full py-7 px-2 flex flex-col gap-1'>
                <div className='font-[SFNSDisplay-Heavy] text-4xl md:text-6xl'>2</div>
                <div className='text-[0.7em] md:text-[0.8em]'>Years of <br className='md:hidden'/>Graphic Design</div>
              </div>
              <div className='shadow-lg w-full py-7 px-2 flex flex-col gap-1'>
                <div className='font-[SFNSDisplay-Heavy] text-4xl md:text-6xl'>4</div>
                <div className='text-[0.7em] md:text-[0.8em]'>Years in <br className='md:hidden'/>Publishing Industry</div>
              </div>
              <div className='shadow-lg w-full py-7 px-2 flex flex-col gap-1'>
                <div className='font-[SFNSDisplay-Heavy] text-4xl md:text-6xl'>2</div>
                <div className='text-[0.7em] md:text-[0.8em]'>Years of <br className='md:hidden'/>Data Analysis</div>
              </div>
            </div>
          </section>
          <section className='text-[var(--m-bg)] py-5 md:pb-1 relative md:pb-1 scroll-mt-10 md:scroll-mt-11' id='SectionSkills'>
            <div className='text-xl md:text-3xl font-[SFNSDisplay-Heavy]'>SKILLS</div>
            <div className='mb-2 mx-[8%] md:mx-20 py-2 mb-5 border-b-1'>Core technical and UI/UX design skills.</div>
            <Talent></Talent>
            <div className='h-full w-full absolute top-0 z-[-1]'>
              <div className='z-1 absolute top-0 h-[calc(100%+0.15em)] w-full bg-[#141414bd]'></div>
              <img className='h-full w-full object-cover blur-[0.1em]' src={CoverPhoto} alt="Cover Photo" />
            </div>
          </section>
          <section className='p-5'>
            <div className='text-xl md:text-3xl font-[SFNSDisplay-Heavy] w-full text-center mb-2'>EXPERTISE</div>
            <div className='text-left flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-3'>
              <div><span className='font-[SFNSDisplay-Bold]'>Design Vision</span>: Translating sophisticated design concepts into exceptionally clean, responsive, and high-performance code that bridges the gap between aesthetics and seamless functionality across all modern devices.</div>
              <div><span className='font-[SFNSDisplay-Bold]'>Code Execution</span>: Delivering robust, highly modular, pixel-perfect, and mobile-first code architectures designed for long-term scalability, easy maintenance, and optimal cross-browser compatibility.</div>
              <div><span className='font-[SFNSDisplay-Bold]'>Data Insights</span>: Leveraging analytical thinking and quantitative data to rigorously validate design choices, track user behavior patterns, and continuously improve overall user engagement and retention.</div>
            </div>
          </section>
          <section className='p-5 text-[var(--m-bg)] bg-[var(--m-color)]'>
            <div className='
            bg-gradient-to-r from-[#9f9f9f]/80 via-[#dddddd] to-[#454545] bg-clip-text text-transparent
            text-xl md:text-3xl font-[SFNSDisplay-Heavy] w-full text-center mb-2'>CERTIFICATIONS</div>
            <Certification></Certification>
          </section>
          <section id='SectionContact' className='p-5'>
            <div className='text-xl md:mt-3 md:text-3xl font-[SFNSDisplay-Heavy] w-full text-center mb-2'>Let's Work Together</div>
            <Contact></Contact>
          </section>
          <section className='p-2 text-[var(--m-bg)] bg-[var(--m-color)] md:mt-8 md:rounded-tl-xl md:rounded-tr-xl'>
            <div className='opacity-50 flex justify-between text-sm px-3'>
              <div>&copy; 2026 Michael Torres.</div>
              <div>Built in React & Redux</div>
            </div>
          </section>
        </div>        
      </div>
    </>
  )
}

export default App
