import Link from 'next/link'
import React from 'react'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'>
            <span className='blue_gradient'>{type} Digest </span>
        </h1>

        <form onSubmit={handleSubmit} className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>Health Digests</span>
                <textarea 
                    className='form_textarea'
                    value={post.digest}
                    onChange={(e) => setPost({...post, digest: e.target.value})}
                    placeholder='Write your digest here'
                    required

                />
            </label>

            <label>
                <span className='font-satoshi font-semibold text-base text-gray-700'>
                    Tag {` `}
                    <span className='font-normal'>(#medication #diseases #innovation)</span>
                </span>
                <input 
                    className='form_input'
                    value={post.tag}
                    onChange={(e) => setPost({...post, tag: e.target.value})}
                    placeholder='#tag'
                />
            </label>

            <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href='/' className='text-gray-500 text-sm'>Cancel</Link>
                <button
                    className='px-5 py-1.5 bg-primary-orange rounded-full text-sm text-white'
                    type='submit'
                    disabled={submitting}
                >
                    {submitting ? `${type}...` : type}
                </button>
            </div>
        </form>
    </section>
  )
}

export default Form