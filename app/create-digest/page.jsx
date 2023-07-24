'use client'

import {useState} from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Form from '@components/Form'

const CreateDigest = () => {

  const router = useRouter();
  const {data: session} = useSession();

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    digest: '',
    tag: '',
  })

  const creatDigest = async(e) =>{
    e.preventDefault();
    setSubmitting(true);

    try {
       const response = await fetch('/api/digest/post', {
        method: 'POST',
        body: JSON.stringify({
          digest: post.digest,
          userId: session?.user.id,
          tag: post.tag
        })
      })

      if(response.ok){
        router.push('/');
      }

    } catch (error) {
      console.log(error)
    } finally{
      setSubmitting(false)
    }
  }

  return (
    <Form 
        type='Create'
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={creatDigest}
    />
  )
}

export default CreateDigest