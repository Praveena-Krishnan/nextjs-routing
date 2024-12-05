import Image from "next/image";
import Link from "next/link";
import contact from "./users/contacts/page"

export default function Home(){
  return(
   

    <div className="bg-white min-h-screen  p-4">
      <div className="text-center text-white text-2xl font-bold">Next.js Routing</div>
      <div className="flex justify-around mt-6 bg-red-100 p-5 rounded-xl text-black font-semibold">
      <Link href="/app" className="">Home</Link>
      <Link href="/users" className="">About</Link>
      <Link href="/users/contacts" className="">Contacts</Link>
      </div>
      <div className='flex text-bold items-center p-40  min-h-screen justify-center bg-red-50 rounded-2xl mt-3'>
      <p className='text-2xl bg-pink-400 p-4 rounded-2xl'>This is your Home page</p>
      </div>
    </div>
    
  )

}