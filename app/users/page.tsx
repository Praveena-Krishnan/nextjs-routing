import React from 'react'
import Link from 'next/link'
const About = () => {
  return (
    <div>
    <div className="bg-black">
    <div className="text-center text-white text-2xl font-bold">Next.js Routing</div>
      <div className="flex justify-around mt-6 bg-red-100 p-5 rounded-xl text-black font-semibold">
      <Link href="/" className="">Home</Link>
      <Link href="/users" className="">About</Link>
      <Link href="/users/contacts" className="">Contacts</Link>
      </div>
    <div className='flex text-bold items-center p-40  min-h-screen justify-center bg-red-50 rounded-2xl mt-3'>
      <p className='text-2xl bg-pink-400 p-4 rounded-2xl'>This is your About page</p>
      </div>
      </div>
      </div>
  )
}

export default About