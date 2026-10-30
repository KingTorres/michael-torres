import VTracerIcon from './logo'
import ArrowIcon from './arrow';
import { useState } from 'react';

const Navigation = () => {
  const [arrow , setArrow] = useState(false)
  const scrollToSection = (id: string) => {
      setArrow(false)
      const element = document.getElementById(id);
      if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
      }
  };
  const scrollHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handleToggle = () => {
    setArrow((prev) => !prev);
  };
  return (
    <div className='z-2 sticky top-0 bg-[var(--m-bg)] relative px-5 py-2 items-center justify-between flex fadeIn'>
        <div className='cursor-pointer' onClick={() => scrollHome()}>
          <VTracerIcon size={30}></VTracerIcon>
        </div>
        <div className='cursor-pointer' onClick={() => handleToggle()}>
          <ArrowIcon className={arrow ? 'upward' : 'downward'} size={30}></ArrowIcon>
        </div>
        {arrow && 
          <div className='bg-[var(--m-bg)] border-1 shadow-xl gap-5 text-left flex-col flex text-xl px-10 py-7 top-[100%] right-0 absolute shadow-lg' style={{fontFamily: 'SFNSDisplay-Semibold'}}>
            <div className='py-1 w-full pl-5 pr-10' onClick={() => scrollToSection('SectionAbout')}>ABOUT</div>
            <div className='py-1 w-full pl-5 pr-10' onClick={() => scrollToSection('SectionProjects')}>PROJECTS</div>
            <div className='py-1 w-full pl-5 pr-10' onClick={() => scrollToSection('SectionSkills')}>SKILLS</div>
            {/* <div className='py-1.5 border-b-1 w-full pl-5 pr-10'>CONTACT</div> */}
          </div>
        }
    </div>
  )
}

export default Navigation
