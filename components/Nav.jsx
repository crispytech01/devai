'use client'

import { useState, useEffect } from 'react'
import { signIn,signOut, useSession, getProviders } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {

  const {data: session} = useSession();

  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)
  
  useEffect(()=>{
    const setUpProviders = async ()=>{
        const response = await getProviders();
        console.log(response)
        setProviders(response);
    }
    setUpProviders();
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link className='flex flex-center gap-2' href='/'>
            <Image src='/assets/images/logo.png' width={50} height={50} className='object-contain' alt='devai logo'/>
            <p className='logo_text'>Crispytechrx</p>
        </Link>
        
        {/* Desktop Navigation */}
        <div className='sm:flex hidden'>
            {session?.user ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href='/create-digest' className='black_btn'>Create Digest</Link>
                    <button className='outline_btn' onClick={signOut}>Sign Out</button>
                    <Link href='/profile'>
                        <Image src={session?.user.image}  width={37} height={37} className='rounded-full' alt='profile' />
                    </Link>
                </div>
            ):(
                <>
                    {providers && Object.values(providers).map((provider)=>(
                        <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
                            Sign In
                        </button>
                    ))}
                </>
            )
            
            }
        </div>

        {/* Mobile Navigation */}

        <div className='sm:hidden flex relative'>
            {session?.user ? (
                <div className='flex'>
                    <Image src={session?.user.image} width={37} height={37} className='rounded-full' alt='profile' onClick={()=>{setToggleDropdown((prev)=> !prev)}}/> 

                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link className='dropdown_link' href='/profile' onClick={()=>setToggleDropdown(false)}>Profile</Link>
                            <Link className='dropdown_link' href='create-digest' onClick={()=>setToggleDropdown(false)}>Create Prompt</Link>
                            <button 
                                className='mt-5 w-full black_btn'
                                type='button' 
                                onClick={()=>{
                                setToggleDropdown(false);
                                signOut();
                            }}>Sign Out</button>
                        </div>
                    )}
                </div>
            ):(
                <>
                    {providers && Object.values(providers).map((provider)=>(
                        <button type='button' key={provider.name} onClick={()=>signIn(provider.id)} className='black_btn'>
                            Sign In
                        </button>
                    ))}
                </>
            )}

        </div>
    </nav>
  )
}

export default Nav