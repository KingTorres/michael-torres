import ReactCert from '../assets/img/certificate/react.webp'
import BootstrapCert from '../assets/img/certificate/bootstrap.webp'
import BootcampCert from '../assets/img/certificate/bootcamp.webp'
const Certification = () => {
    const handleCert1 = () => {
        window.open("https://ude.my/UC-7257737f-91a3-40ec-8f0e-5e21f2a4e73e", "_blank");
    }
    const handleCert2 = () => {
        window.open("https://ude.my/UC-a1c48038-82a7-4e66-aca2-9191215111a0", "_blank");
    }
    const handleCert3 = () => {
        window.open("https://ude.my/UC-946f62bc-142d-4d75-b945-f73c135910a7", "_blank");
    }
  return (
    <>
    <div className='flex justify-center gap-5 py-4 md:gap-7'>
        <div>
            <img className='rounded w-auto md:h-50' onClick={() => handleCert3()} src={BootcampCert} alt="certificate" />
        </div>
        <div>
            <img className='rounded w-auto md:h-50' onClick={() => handleCert1()} src={ReactCert} alt="certificate" />
        </div>
        <div className='hidden md:block'>
            <img className='rounded w-auto md:h-50' onClick={() => handleCert2()} src={BootstrapCert} alt="certificate" />
        </div>
    </div>
      
    </>
  )
}

export default Certification
