import React, { useState } from 'react'
import Avatar from '../assets/img/avatar-formal.webp'
const Contact = () => {
    const [copy, setCopy] = useState(false)
    const [email, setEmail] = useState(false)
    const [viber, setViber] = useState(false)
    const [telegram, setTelegram] = useState(false)
    // Mailer
    const [messageStatus, setMessage] = useState('')
    const [messageStatusSuccess, setmessageStatusSuccess] = useState(false)
    const [loadingStatus, setLoading] = useState(false)
    const formRef = React.useRef<HTMLFormElement>(null);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.name === 'email') {
            setMessage('');
            setmessageStatusSuccess(false)
        }
    };
    const handleSubmit = async (e:React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage('')
        setLoading(true)
        setmessageStatusSuccess(false)
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')?.toString().trim() || 'Visitor Name';
        const email = formData.get('email')?.toString().trim() || 'Visitor Email';
        const subject = formData.get('subject')?.toString().trim() || 'Visitor Subject';
        const message = formData.get('message')?.toString().trim() || 'Visitor Message';
        console.log('asd')
        if (!email.includes('@')) {
            setMessage('Email must contain @');
            setmessageStatusSuccess(false)
            setLoading(false)
            return;
        }
        if (!emailRegex.test(email)) {
            setMessage('Please enter a valid email address');
            setmessageStatusSuccess(false)
            setLoading(false)
            return;
        }
        const payload = {
            name,
            email,
            subject,
            message,
        };
        try {
            const res = await fetch('https://portfolio-backend-6tec.onrender.com/api/contact', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(payload)
            })
            const data = await res.json()
            if(data.success) {
                setMessage("Message sent successfully!")
                setmessageStatusSuccess(true)
                formRef.current?.reset();
            } else {
                setMessage("Failed to send message")
                setmessageStatusSuccess(false)
            }
        } catch(err) {
            console.error('Error', err)
            setMessage("Something went wrong.")
            setmessageStatusSuccess(false)
        } finally {
            setLoading(false)
        }
        //using Render and Resend in Backend for email
        //https://dashboard.render.com/
        //https://resend.com/
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
                    <div className='relative text-lg'>
                        <div className='text-sm bg-[var(--m-bg)] absolute top-[-0.9em] left-1 z-1 px-2 text-[var(--m-color-light)]'>Name</div>
                        <input maxLength={18} disabled={loadingStatus} type="text" name="name" className='outline-[var(--m-color-light)] relative w-full px-2 py-1 rounded-lg border border-[var(--m-color-light)] capitalize' placeholder='' required/>
                    </div>
                    <div className='relative text-lg'>
                        <div className='text-sm bg-[var(--m-bg)] absolute top-[-0.9em] left-1 z-1 px-2 text-[var(--m-color-light)]'>Email</div>
                        <input onChange={handleChange} disabled={loadingStatus}  type="text" name="email" className='outline-[var(--m-color-light)] relative w-full px-2 py-1 rounded-lg border border-[var(--m-color-light)]' placeholder='' required/>
                    </div>
                    <div className='relative text-lg'>
                        <div className='text-sm bg-[var(--m-bg)] absolute top-[-0.9em] left-1 z-1 px-2 text-[var(--m-color-light)]'>Subject</div>
                        <input maxLength={50} disabled={loadingStatus}  type="text" name="subject" className='outline-[var(--m-color-light)] relative w-full px-2 py-1 rounded-lg border border-[var(--m-color-light)]' placeholder='' required/>
                    </div>
                    <div className='relative text-lg'>
                        <div className='text-sm bg-[var(--m-bg)] absolute top-[-0.9em] left-1 z-1 px-2 text-[var(--m-color-light)]'>Message</div>
                        <textarea disabled={loadingStatus} name="message" className='outline-[var(--m-color-light)] min-h-35 max-h-35 border border-[var(--m-color-light)] rounded-lg px-2 py-1 w-full' placeholder='' required/>
                    </div>
                </div>
                <button type='submit' disabled={loadingStatus} className='border w-full text-xl rounded-4xl mt-1 py-1'>
                    {loadingStatus ? 'Sending...' : 'Send'}
                </button>
            </form>
            <div className='font-[SFNSDisplay-Bold]'>{messageStatus ? <div className={messageStatusSuccess ? 'text-[var(--m-success)]' : 'text-[var(--m-failed)]'}>{messageStatus}</div>:<div className='opacity-0'>- Message -</div>}</div>
        </div>
        <div className='
        lg:px-25
        grid grid-cols-[max-content_1fr] gap-4 mt-2
        md:mt-0 md:flex md:flex-col md:items-center md:gap-2 md:px-2'>
            <div className='
            md:h-48 md:w-48 md:border-10 md:mt-3
            h-32 w-32 aspect-square border-8 rounded-[10em] overflow-hidden'>
                <img className='h-full w-full object-fill' src={Avatar} alt="avatar" />
            </div>
            <div className='
            md:text-xl md:gap-1 md:w-full md:gap-3
            text-xl flex flex-col text-left mt-2 gap-2'>
                <div className='
                    md:gap-0
                    md:text-2xl md:flex justify-center gap-2 md:items-center'>
                    <div className='
                    font-[SFNSDisplay-Bold]'>Michael Torres</div>
                </div>
                <div className='
                md:text-xl md:gap-3 md:gap-x-2
                grid grid-cols-2 text-sm justify-center gap-2 gap-y-3'>
                    <button onClick={() => copyText('viber')} className='cursor-pointer w-full border px-2 py-1 rounded-4xl md:py-1' disabled={viber}>
                        {viber ? 'Copied!' : 'Viber' }
                    </button>
                    <button onClick={() => copyText('telegram')} className='cursor-pointer w-full border px-2 py-1 rounded-4xl md:py-1' disabled={telegram}>
                        {telegram ? 'Copied!' : 'Telegram' }
                    </button>
                    <button onClick={() => window.open("https://linkedin.com/in/torres-michael36", "_blank")} className='cursor-pointer w-full border py-1 px-2 md:py-1 rounded-4xl'>
                        LinkedIn
                    </button>
                    <button onClick={() => copyText('email')} className='truncate cursor-pointer w-full border py-1 px-2 rounded-4xl md:py-1' disabled={email}>
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
