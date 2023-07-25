import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='relative inset-x-0 bottom-0 flex flex-col items-center'>
        <div className='flex md:flex-row gap-7 text-md text-center'> 
            <p><Link href='/'>Projects</Link></p>
            <p><Link href='/'>Health Tech Digests</Link></p>
            <p><Link href='https://www.linkedin.com/in/chukwuyem-obiazi-932528195'>LinkedIn</Link></p>
            <p><Link href='https://github.com/crispytech01'>Github</Link></p>
        </div>
        <div className='flex md:hidden justify-center'>
            <Image src='/assets/images/re-img.png' width={150} height={150} className='rounded-full mt-10'/>
        </div>
        <p className='mt-10 text-gray-500 text-sm mb-5'> &#64; crispytechrx, leveraging the power of technology in healthcare</p>
    </footer>
  )
}

export default Footer