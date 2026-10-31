import Megabet from '../assets/img/projects/mb.webp'
import KStore from '../assets/img/projects/k-store.webp'
const Projects = () => {
  return (
    <div className='flex flex-col gap-5 mt-2 md:grid md:grid-cols-2 md:gap-3 md:px-8'>
        <div className='px-5 flex flex-col gap-1'>
            <div className='px-[20%]'>
            <img className='h-29 w-50 md:h-34 object-contain' src={Megabet} alt="laptop" />
            </div>
            <div className='text-center text-lg font-[SFNSDisplay-Semibold]'>Megabet</div>
            <div className='text-left text-base h-32 md:h-24'>
            MegaBet is a gaming platform registered trademark, brand, and business name owned by MegaBet Corp. Regulated and licensed by the Philippine Amusement and Gaming Corporation (PAGCOR).
            </div>
        </div>
        <div className='px-5 flex flex-col gap-1'>
            <div className='px-[20%]'>
            <img className='h-29 w-50 md:h-34 object-contain' src={KStore} alt="laptop" />
            </div>
            <div className='text-center text-lg font-[SFNSDisplay-Semibold]'>K-Store</div>
            <div className='text-left text-base h-32 md:h-24'>
            K-Store is an e-commerce online shopping platform designed to provide a seamless, retail experience. Built with a focus on intuitive navigation, and responsive design across all devices.
            </div>
        </div>
    </div>
  )
}

export default Projects
