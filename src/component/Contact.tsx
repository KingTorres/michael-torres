import React, { useState } from 'react'
import Avatar from '../assets/img/avatar-formal.webp'
const Contact = () => {
    const [copy, setCopy] = useState(false)
    const [phone, setPhone] = useState(false)
    const [email, setEmail] = useState(false)
    const [viber, setViber] = useState(false)
    const [telegram, setTelegram] = useState(false)
    // Mailer
    const [messageStatus, setMessage] = useState('')
    const [loadingStatus, setLoading] = useState(false)
    const formRef = React.useRef<HTMLFormElement>(null);
    const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')?.toString().trim() || 'Visitor Name';
        const email = formData.get('email')?.toString().trim() || 'Visitor Email';
        const message = formData.get('message')?.toString().trim() || 'Visitor Message';
        const payload = {
            name,
            email,
            message,
        };
        setMessage('')
        try {
            const res = await fetch('https://portfolio-backend-6tec.onrender.com/api/contact', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(payload)
            })
            const data = await res.json()
            if(data.success) {
                setMessage("Message sent successfully!")
                formRef.current?.reset();
            } else {
                setMessage("Failed to send message")
            }
        } catch(err) {
            console.error('Error', err)
            setMessage("Something went wrong.")
        } finally {
            setLoading(false)
        }
    }

    // Helper function to reset all active states
    const resetStates = () => {
        setCopy(false)
        setPhone(false)
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
    <div className='md:grid grid-cols-2 md:gap-3 mt-5 md:mt-6'>
        <div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className='flex flex-col gap-4'>
                    <input type="text" name="name" className='text-lg w-full border rounded-lg px-2 capitalize' placeholder='Name' required/>
                    <input type="text" name="email" className='text-lg w-full border rounded-lg px-2' placeholder='Email' required/>
                    <textarea name="message" className='text-lg min-h-35 max-h-35 border rounded-lg px-2 w-full' placeholder='Message' required/>
                </div>
                <button type='submit' disabled={loadingStatus} className='border w-full text-xl rounded-4xl mt-4 py-1'>
                    {loadingStatus ? 'Sending..' : 'Send'}
                </button>
            </form>
            <div>{messageStatus ? <div>{messageStatus}</div>:<div className='opacity-0'>- Message -</div>}</div>
        </div>
        <div className='
        lg:px-25
        grid grid-cols-[max-content_1fr] gap-4 mt-2
        md:mt-0 md:flex md:flex-col md:items-center md:gap-2 md:px-2'>
            <div className='
            md:h-36 md:w-36 md:border-10
            h-32 w-32 aspect-square border-8 rounded-[10em] overflow-hidden'>
                <img className='h-full w-full object-fill' src={Avatar} alt="avatar" />
            </div>
            <div className='
            md:text-xl md:gap-1 md:w-full md:gap-2.5
            text-base flex flex-col text-left mt-2 gap-1'>
                <div className='
                    md:gap-0
                    md:text-xl md:flex justify-center gap-2 md:items-center'>
                    <div className='
                    font-[SFNSDisplay-Bold]'>Michael Torres</div>
                    <div className='hidden md:inline-block mx-1'>|</div>
                    <button className='cursor-pointer' onClick={() => copyText('phone')} disabled={phone}>
                        {phone ? 'Copied!' : <u>+639493923708</u>}    
                    </button>
                </div>
                <div className='
                md:text-xl
                grid grid-cols-2 text-sm justify-center gap-3'>
                    <button onClick={() => copyText('viber')} className='cursor-pointer w-full border px-2 rounded-4xl md:py-1' disabled={viber}>
                        {viber ? 'Copied!' : 'Viber' }
                    </button>
                    <button onClick={() => copyText('telegram')} className='cursor-pointer w-full border px-2 rounded-4xl md:py-1' disabled={telegram}>
                        {telegram ? 'Copied!' : 'Telegram' }
                    </button>
                    <button onClick={() => window.open("https://linkedin.com/in/torres-michael36", "_blank")} className='cursor-pointer w-full border px-2 md:py-1 rounded-4xl'>
                        LinkedIn
                    </button>
                    <button onClick={() => copyText('email')} className='truncate cursor-pointer w-full border px-2 rounded-4xl md:py-1' disabled={email}>
                        {email ? 'Copied!' : 'Email' }
                    </button>
                </div>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default Contact
