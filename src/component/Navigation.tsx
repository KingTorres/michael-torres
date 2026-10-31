import Logo from './logo'
import ArrowIcon from './arrow';
import { useState, useEffect, useRef } from 'react';

const Navigation = () => {
  const [arrow , setArrow] = useState(false)
  const navRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setArrow(false);
      }
    };

    if (arrow) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [arrow]);
  return (
    <div ref={navRef} className='z-2 sticky top-0 bg-[var(--m-bg)] px-5 py-2 items-center justify-between flex navFade'>
        <div className='cursor-pointer' onClick={() => scrollHome()}>
          <Logo size={30}></Logo>
        </div>
        <div className='cursor-pointer md:hidden' onClick={() => handleToggle()}>
          <ArrowIcon className={`${arrow ? 'upward' : 'downward'}`} size={30}></ArrowIcon>
        </div>
        <div className={`
        bg-[var(--m-bg)] border-1 shadow-xl gap-5 text-left flex-col flex text-xl px-5 py-7 top-[100%] right-0 absolute shadow-lg md:font-[SFNSDisplay-Bold]
        md:bg-none md:border-none md:shadow-none md:gap-5 md:flex-row md:flex md:text-lg md:p-0 md:relative md:top-unset md:right-unset font-[SFNSDisplay-Semibold] 
        ${arrow ? 'flex' : 'hidden'}`}>
          <div className='py-1 w-full pl-5 pr-10 md:p-0' onClick={() => scrollToSection('SectionAbout')}>ABOUT</div>
          <div className='py-1 w-full pl-5 pr-10 md:p-0' onClick={() => scrollToSection('SectionProjects')}>PROJECTS</div>
          <div className='py-1 w-full pl-5 pr-10 md:p-0' onClick={() => scrollToSection('SectionSkills')}>SKILLS</div>
          <div className='py-1 w-full pl-5 pr-10 md:p-0' onClick={() => scrollToSection('SectionContact')}>CONTACT</div>
          {/* <div className='py-1.5 border-b-1 w-full pl-5 pr-10'>CONTACT</div> */}
        </div>
    </div>
  )
}

export default Navigation
