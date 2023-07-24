'use client'

import { useState, useEffect} from 'react'
import DigestCard from './DigestCard'

const DigestCardList = ({ data, handleTagClick}) =>{
  return(
    <div className='mt-16 prompt_layout'>
      {data.map((digest) => (
        <DigestCard 
          key={digest._id}
          digest={digest}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {

  const [searchDigest, setSearchDigest] = useState('')
  const [digest, setDigest] = useState([])

  const handleSearchDigest = () => {

  }

  useEffect(()=>{
    const fetchDigest = async() =>{
      console.log('debugging')
      const respnse = await fetch('api/digest/get')
      const data = await respnse.json();
      console.log('debugging not')
      console.log(data)
      setDigest(data)
    }

    fetchDigest()
  }, [])

  return (
    <section className='feed'>
      <form className='rlative w-full flex-center'>
        <input 
          className='search_input peer'
          type='text'
          placeholder='Search tag or username'
          value={searchDigest}
          onChange={handleSearchDigest}
          required
        />
      </form>

      <DigestCardList 
        data={digest}
        handleTagClick={()=>{}}
      />
    </section>
  )
}

export default Feed