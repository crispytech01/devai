import Link from 'next/link';
import { MdEast } from "react-icons/md";


const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center '>
            Software Development
          <span className='text-center'>{' '}for Supportive Health</span>    
      </h1>
      <p className='desc text-center'>Elevate your Health with Smart Software Solutions</p>
      <div className='animate-bounce flex items-center text-white px-5 rounded-full mt-16 mb-5 transition ease-in-out delay-150 bg-pink-700 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 '>
        <Link href='/digests' className='py-2 px-2 transition'>Read Latest News Digest</Link>
        <MdEast className=''/>
      </div>

      <div className='flex items-center text-white px-5 rounded-full mb-10 transition ease-in-out delay-150 bg-green-700 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 '>
        <Link href='/digests' className='py-2 px-2 transition'>Explore Projects</Link>
      </div>
    </section>
  )
}

export default Home