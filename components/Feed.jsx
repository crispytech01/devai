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
      const respnse = await fetch('api/digest/get')
      const data = await respnse.json();
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
          placeholder='Start typing...'
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