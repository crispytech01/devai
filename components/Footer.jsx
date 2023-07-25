import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='relative inset-x-0 bottom-0 flex flex-col items-center mt-20 bg-pink-100 w-full p-10'>
        <div className='flex flex-col md:flex-row font-md text-center font-semibold md:gap-x-[150px]'> 
            <p className='py-3'><Link href='/'>Projects</Link></p>
            <p className='py-3'><Link href='/'>News Digests</Link></p>
            <p className='py-3'><Link href='https://www.linkedin.com/in/chukwuyem-obiazi-932528195'>LinkedIn</Link></p>
            <p className='py-3'><Link href='https://github.com/crispytech01'>Github</Link></p>
        </div>
        <div className='flex flex-col gap-3 text-pink md:hidden justify-center text-center'>
            <Image src='/assets/images/re-img.png' width={150} height={150} className='rounded-full mt-10'/>
            <p>Developer</p>
        </div>
        <p className='mt-10 text-center text-gray-500 text-sm mb-5'> &#64; crispytechrx, leveraging the power of technology in healthcare</p>
    </footer>
  )
}

export default Footer