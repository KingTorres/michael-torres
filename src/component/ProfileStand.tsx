import Formal from '../assets/img/profile.webp'
const ProfileStand = () => {
  return (
    <>
        <div className='
            formalStand
            md:w-[17em] w-[100vw] flex justify-center'>
            <img className='md:w-full w-[50vw] h-auto' src={Formal} alt="About me" />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--m-bg)] to-transparent z-1" />
        </div>
        <div className='absolute md:relative md:w-[8.6em] w-[100vw] md:text-xl flex font-[SFNSDisplay-Heavy]'>
            <div className='
            animate-[fadeSlideRight_1.5s_linear_forwards] [animation-delay:3.2s]
            opacity-0
            z-[-1] whitespace-nowrap flex-col absolute flex
            bg-gradient-to-r from-[#9f9f9f] to-[#454545] bg-clip-text text-transparent
            top-[1vw] right-[13.5vw] text-[6.5vw] text-left
            md:top-[0.1em] md:left-[-2.9em] md:right-[unset] md:text-[2em]'>
              <div>BUILD THE</div>
              <div className='mt-[-0.4em]'>FUTURE</div>
            </div>
            <div className='
            animate-[fadeSlideRight_1.5s_linear_forwards] [animation-delay:3.4s]
            opacity-0
            whitespace-nowrap text-right flex-col flex
            bg-gradient-to-r from-[#101010] to-[#d5d5d5] bg-clip-text text-transparent
            top-[28vw] md:text-left left-[2.1vw] absolute text-[6.5vw]
            md:from-[#9f9f9f] md:to-[#454545]
            md:top-[3em] md:left-[-2em] md:text-[2em]'>
              <div className='mr-8'>DESIGN &</div>
              <div className='mt-[-0.4em]'>CODE</div>
            </div>
            <div className='
            animate-[fadeSlideRight_1.5s_linear_forwards] [animation-delay:3.6s]
            opacity-0
            z-[-1] whitespace-nowrap absolute flex
            bg-gradient-to-r from-[#9f9f9f] to-[#454545] bg-clip-text text-transparent
            top-[49vw] right-[4.7vw] text-[6.5vw]
            md:top-[6.8em] md:left-[-1.3em] md:right-[unset] md:text-[2em]'>IN FOCUS</div>
            <div className='
            animate-[fadeSlideRight_1.5s_linear_forwards] [animation-delay:3.8s]
            opacity-0
            whitespace-nowrap absolute flex
            bg-gradient-to-r from-[#101010] to-[#d5d5d5] bg-clip-text text-transparent
            top-[60vw] left-[8vw] text-[6.5vw] 
            md:from-[#9f9f9f] md:to-[#454545]
            md:top-[8.8em] md:left-[-2.3em] md:text-[2em]'>
              IN PROGRESS
            </div>
        </div>      
    </>
  )
}

export default ProfileStand
