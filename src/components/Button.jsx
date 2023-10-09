export default function Button ({ type = '', children = '', onClick: event = () => {}, light = false }) {
  return (
    <button
      type
      onClick={event}
      className={`text-4xl flex-row justify-center border-solid border-slate-700 ${light ? 'bg-slate-800' : 'bg-slate-900'} text-white cursor-pointer hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg w-full sm:w-auto px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 hover:shadow-lg transition-all duration-200 ease-in-out hover:scale-110 scale-90 opacity-70`}
    >
      {children}
    </button>
  )
}
