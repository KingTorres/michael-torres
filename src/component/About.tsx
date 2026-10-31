import ProfileStand from '../component/ProfileStand'
import Qoute from '../assets/img/qoute.webp'
import { useState, useEffect } from 'react'
const About = () => {
    const fullText = "MICHAEL TORRES";
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const typingSpeed = 100; // Speed in milliseconds per character
    window.scrollTo({top: 0})
    useEffect(() => {
        if (currentIndex < fullText.length) {
        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + fullText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

  return (
    <>
    <section className='pt-3 pb-7 px-5 justify-center flex-col flex scroll-mt-10 md:scroll-mt-11' id='SectionAbout'>
        <div className='flex-col text-left items-start flex justify-start'>
            <div className='items-center flex text-4xl md:text-6xl lg:text-6xl font-[SFNSDisplay-BLACK]'>
                {displayedText}
                {displayedText != fullText && <span className='font-[SFNSDisplay-Thin]'>|</span>}
            </div>
            <div className='text-xl md:text-2xl my-1.5'>
            <div className={`
            ${displayedText === fullText ? 'opacity-100 animate-[fadeIn_1s_linear]' : 'opacity-0'}
            bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent
            font-[SFNSDisplay-Semibold]`}>Web Developer</div>
            </div>
            <div className={`
            ${displayedText === fullText ? 'opacity-100 animate-[fadeIn_1.5s_linear]' : 'opacity-0'}
            text-xs md:text-lg font-[SFNSDisplay-Light]`}>Building responsive, user-friendly and optimize website.</div>
        </div>
        </section>
        <section className={`
            items-center md:grid md:grid-cols-[58%_42%] gap-2 md:gap-0`}>
            <div className={`
                md:order-2 relative flex`}>
                <ProfileStand></ProfileStand>
            </div>
            <div className={`
                ${displayedText === fullText && 'animate-[fadeIn_2s_linear_forwards] [animation-delay:2.5s]'}
                opacity-0
                relative md:order-1 gap-2 items-center justify-center flex flex-col text-left p-5`}>
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
      
    </>
  )
}

export default About
