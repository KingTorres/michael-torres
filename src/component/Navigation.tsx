import VTracerIcon from './logo'

const Navigation = () => {
  return (
    <div className='z-2 sticky top-0 bg-[var(--m-bg)] relative px-2 py-2 items-center justify-between flex'>
        <div>
        <VTracerIcon size={30}></VTracerIcon>
        </div>
        {/* <div className='bg-[var(--m-bg)] shadow-lg gap-8 text-left flex-col flex text-xl px-10 py-10 rounded-lg top-[100%] right-0 absolute border-1' style={{fontFamily: 'SFNSDisplay-Semibold'}}>
        <div className='py-1.5 border-b-1 w-full pl-5 pr-10'>HOME</div>
        <div className='py-1.5 border-b-1 w-full pl-5 pr-10'>WORK</div>
        <div className='py-1.5 border-b-1 w-full pl-5 pr-10'>CONTACT</div>
        </div> */}
    </div>
  )
}

export default Navigation
