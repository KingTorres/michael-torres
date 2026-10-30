import Megabet from '../assets/img/projects/mb.webp'
const Projects = () => {
  return (
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
  )
}

export default Projects
