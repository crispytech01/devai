'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const DigestCard = ({ digest, handleToClick, handleEdit, handleDelete }) => {

  const [copied, setCopied] = useState('')

  const {data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleCopy = () =>{
    setCopied(digest.digest);
    navigator.clipboard.writeText(digest.digest);
    setTimeout(() =>setCopied(''), 5000)

  }

  return (
    <div className='prompt_card'>
        <div className='flex justify-between items-start gap-5'>
            <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                <Image 
                 src={digest.author.image}
                 alt='user_image'
                 width={40}
                 height={40}
                 className='rounded-full object-contain'
                />

                <div className='flex flex-col'>
                    <h3 className='font-satoshi font-semibold text-gray-900'>{digest.author.username}</h3>
                    <p className='font-inter text-sm text-gray-500'>{digest.author.email}</p>
                </div>
            </div>

            <div className='copy_btn' onClick={()=>{}}>
                <Image 
                    src={copied === digest.digest ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg' }
                    width={15}
                    height={15}
                    onClick={handleCopy}
                />
            </div>
        </div>
        <p className='my-4 font-satoshi text-sm text-gray-700'>{digest.digest}</p>
        <p className='blue_gradient font-inter text-sm cursor-pointer' onClick={() => handleTagClick && handleTagClick(digest.tag)}>{digest.tag}</p>

        {session?.user.id === digest.author._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}

    </div>
  )
}

export default DigestCard