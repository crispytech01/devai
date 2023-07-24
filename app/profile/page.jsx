'use client'

import { useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Profile from '@components/Profile'

const MyProfile = () => {

  const [digests, setDigests] = useState([])
  
  const {data: session} = useSession();
  const router = useRouter();

  const handleEdit = (digest) =>{
    router.push(`/edit-digest?id=${digest._id}`);
  }

  const handleDelete = async (digest) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this digest?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/digest/${digest._id.toString()}`, {
          method: "DELETE",
        });

        const filteredDigests = digests.filter((item) => item._id !== digest._id);

        setDigests(filteredDigests);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(()=>{
    const fetchDigests = async() =>{
      console.log('Before fetch')
      const response = await fetch(`/api/users/${session?.user.id}/digests`);
      const data = await response.json();
      console.log('After fetch')
      setDigests(data)
      
    }

    if(session?.user.id) fetchDigests();
    
  }, [session?.user.id])


  return (
    <>
      <Profile 
      name='my'
      desc='My profile page'
      data={digests}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
    </>
    
  )
}

export default MyProfile