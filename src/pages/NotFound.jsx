import { Link } from 'wouter'

export default function NotFound () {
  return (
    <section className='min-h-screen p-y-5 max-w-[80%] flex flex-col justify-around items-center'>
      <h1
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className='font-bold py-20  text-5xl text-center'
      >
        404 page not found
      </h1>
      <Link className='text-4xl flex-row justify-center border-solid border-slate-700 bg-slate-800 text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg w-full sm:w-auto px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 opacity-70' to='/'> Back to home</Link>
    </section>
  )
}
