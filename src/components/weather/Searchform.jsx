import React from 'react'

const Searchform = ({input = '', setInput, placeholder = 'search', callback = ()=> null}) => {

    const handleSearchForm = (e) => {
        e.preventDefault();
        callback();
    };

    return <form onSubmit={handleSearchForm} className=' flex justify-center items-center gap-10'>
        <input
            type="text"
            name='search'
            placeholder={placeholder}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='w-[280px] h-[40px] text-base text-stone-600 first-letter:capitalize border rounded-md shadow-sm px-2  outline-none'
        />
        <button disabled={input.trim('') ? false : true} className='py-2 p-3 rounded-md bg-stone-900 text-white shadow-sm font-semibold'>Search</button>
    </form>
}

export default Searchform
