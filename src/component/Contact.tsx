import { useState } from 'react'
import Avatar from '../assets/img/avatar-formal.webp'
const Contact = () => {
    const [copy, setCopy] = useState(false)
    const [phone, setPhone] = useState(false)
    const [linkedin, setLinkedin] = useState(false)
    const [email, setEmail] = useState(false)
    const [viber, setViber] = useState(false)
    const [telegram, setTelegram] = useState(false)

    // Helper function to reset all active states
    const resetStates = () => {
        setCopy(false)
        setPhone(false)
        setLinkedin(false)
        setEmail(false)
        setViber(false)
        setTelegram(false)
    }

    async function copyProgress(textToCopy: string) {
        try {
            // Check if navigator.clipboard is available (fixes iOS Safari HTTP / WebView crashes)
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(textToCopy);
            } else {
                // Fallback for older iOS browsers or non-secure contexts
                const textArea = document.createElement("textarea");
                textArea.value = textToCopy;
                textArea.style.position = "fixed";  // Avoid scrolling to bottom
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                
                if (!successful) {
                    throw new Error('Fallback copy command failed');
                }
            }
            
            // Keep your 3-second timeout to reset the states
            setTimeout(() => {
                resetStates()
            }, 3000)
        } catch (err) {
            alert('Failed to copy: ' + err)
            // Reset states if it fails so the user isn't locked out
            resetStates()
        }
    }

    function copyText(value: string) {
        if (copy) return; // Prevent spamming while active

        setCopy(true)
        let textToCopy = ''

        switch (value) {
            case "phone":
                setPhone(true)
                textToCopy = '+639493923708'
                break;
            case "linkedin":
                setLinkedin(true)
                textToCopy = 'http://linkedin.com/in/torres-michael36'
                break;
            case "email":
                setEmail(true)
                textToCopy = 'torres.michael36@gmail.com'
                break;
            case "viber":
                setViber(true)
                textToCopy = '+639493923708'
                break;
            case "telegram":
                setTelegram(true)
                textToCopy = '+639493923708'
                break;
            default:
                textToCopy = ''
                break;
        }
        
        copyProgress(textToCopy)
    }
  return (
    <>
    <div className='grid grid-cols-[max-content_1fr] gap-4 md:gap-6 mt-5 md:mt-3 md:px-40'>
        <div className='
        md:h-35 md:w-35 md:border-10
        h-32 w-32 aspect-square border-8 rounded-[10em] overflow-hidden'>
            <img className='h-full w-full object-fill' src={Avatar} alt="avatar" />
        </div>
        <div className='
        md:text-xl md:gap-3
        text-base flex flex-col text-left mt-2 gap-1'>
        <div className='
            md:text-2xl md:flex gap-2 md:items-center'>
            <div className='
            font-[SFNSDisplay-Bold]'>Michael Torres</div>
            <div className='hidden md:inline-block mx-1'>|</div>
            <button onClick={() => copyText('phone')} disabled={linkedin}>
                {phone ? 'Copied!' : <u>+639493923708</u>}    
            </button>
        </div>
        <div className='
        md:text-xl
        grid grid-cols-2 text-sm justify-center gap-2'>
            <button onClick={() => copyText('linkedin')} className='w-full border px-2 rounded-xl md:rounded-2xl' disabled={linkedin}>
                {linkedin ? 'Copied' : 'LinkedIn' }
            </button>
            <button onClick={() => copyText('email')} className='w-full border px-2 rounded-xl md:rounded-2xl' disabled={email}>
                {email ? 'Copied' : 'Email' }
            </button>
            <button onClick={() => copyText('viber')} className='w-full border px-2 rounded-xl md:rounded-2xl' disabled={viber}>
                {viber ? 'Copied' : 'Viber' }
            </button>
            <button onClick={() => copyText('telegram')} className='w-full border px-2 rounded-xl md:rounded-2xl' disabled={telegram}>
                {telegram ? 'Copied' : 'Telegram' }
            </button>
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Contact
