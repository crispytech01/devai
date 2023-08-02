import React from 'react'

const ContactForm = ({name, email, subject, message, onChange}) => {

    const handleSubmit = () =>{
        console.log(name, email, subject, message)
    }
  return (
    <div>
        <form className="shadow grid">
            <div className='w-[400px] p-5 gap-4'>
                <div className='grid gap-3 mb-4'>
                        <label className='block font-semibold'>Name</label>
                        <input required placeholder='e.g. Obiazi' className='p-2 appearance-none rounded border-cyan-50'/>
                </div>
                <div className='grid gap-3 mb-4'>
                        <label className='block font-semibold'>Email</label>
                        <input value={email} type='email' required placeholder='e.g. example@email.com' className='p-2 appearance-none rounded border-cyan-50'/>
                </div>
                <div className='grid gap-3 mb-4'>
                        <label className='block font-semibold'>Subject</label>
                        <input value={subject} type='text' required placeholder='e.g. Request for Services' className='p-2 appearance-none rounded border-cyan-50'/>
                </div>
                <div className='grid gap-3 mb-4'>
                        <label className='block font-semibold'>Message</label>
                        <textarea value={message} type='text' placeholder='start typing...' className='p-2 appearance-none rounded border-cyan-50'></textarea>
                </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3"></div>
                        <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input className="mr-2 leading-tight" type="checkbox" />
                        <span className="text-sm">
                            Send me your newsletter!
                        </span>
                        </label>
                    </div>
                    <button onSubmit={handleSubmit} className='bg-pink-700 px-5 py-2 text-white'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm