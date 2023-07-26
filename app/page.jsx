import Image from 'next/image';
import Link from 'next/link';
import { MdEast } from "react-icons/md";
import { CiCircleCheck} from 'react-icons/ci';



const Home = () => {
  return (
    <section className='flex flex-col'>
      <div className='flex md:flex-row flex-col items-center justify-center flex-wrap mb-10'>
        <div className='md:w-3/5 max-[770px]:text-center'>
            <h1 className='head_text w-full max-sm:text-md'>Software Development Expertise Unleashed:
              <span className='pt-7 text-sky-700'>{' '}welcome to Crispytechrx!</span>
            </h1>
            <p className='text-gray-300 font-satoshi font-medium text-xl pt-5'>Crafting Cutting-Edge Solutions</p>
        </div>
        <div className='max-[770px]:hidden md:w-2/5'>
          <Image src='/assets/images/re-img.png' width={400} height={400} className='rounded-full'/>
        </div>
      </div>
      <div className='flex flex-col items-center'>
          <div className=''>
            <h2 className='text-pink-700 font-semibold text-2xl'>Our Services</h2>
            <hr className='border-b-5 border-gray-200' />            
          </div>

          <div className='flex flex-row mt-5 flex-wrap gap-5'>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5 grid gap-4 dark:text-white">
                    <a href="/">
                        <h5 class="text-2xl font-bold tracking-tight text-sky-700">Python</h5>
                    </a>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span>Carrying out data analysis, manipulation and/or visualization</span></p>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span>Implementing web scraping and automation with python</span></p>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span>Building highly scalable and secured backend services</span></p>
                    <p className='text-center bg-gray-400 rounded-full px-5 py-2 text-white ease-in duration-300'><Link href=''>Preview sample</Link></p>
                </div>
            </div>  


            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5 grid gap-4 dark:text-white">
                    <a href="/">
                        <h5 class="text-2xl font-bold tracking-tight text-sky-700">MERN Stack</h5>
                    </a>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span> Building scalable and robust client & server-side applications</span></p>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span>Involeved in entire development lifecycle, from database design to front-end implementation</span></p>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span>Long time experience deploying on AWS, Digital Ocean, Heroku, etc.</span></p>
                    <p className='text-center bg-gray-400 rounded-full px-5 py-2 text-white ease-in duration-300'><Link href=''>Preview sample</Link></p>
                </div>
            </div> 

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5 grid gap-4 dark:text-white">
                    <a href="/">
                        <h5 class="text-2xl font-bold tracking-tight text-sky-700">Mobile App development</h5>
                    </a>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span>Proficiency and experience in developing cross-platform applications using a single codebase</span></p>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span>With us, you get push notification services for free</span></p>
                    <p className='flex flex-row gap-x-1'><span className='text-md text-green w-7 pt-1'><CiCircleCheck /> </span><span>Familiarity with manual testing and debugging on mobile devices</span></p>
                    <p className='text-center bg-gray-400 rounded-full px-5 py-2 text-white ease-in duration-300'><Link href=''>Preview sample</Link></p>
                </div>
            </div>   


            <div className='mt-10'>
              <h2 className='text-black font-semibold text-2xl font-satoshi'>Want to know technology update in healthcare? Click the button below</h2>
              <div className='max-w-mdanimate-bounce flex items-center text-white px-5 rounded-full mt-5 mb-5 text-center transition ease-in-out delay-150 bg-pink-700 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 '>
                <Link href='/healthcare/solution' className='py-2 px-2 transition'>Healthcare solution</Link>
                <MdEast className=''/>
              </div>
            </div>


          </div>
      </div>
    </section>
  )
}

export default Home