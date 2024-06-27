import { titleFonts } from '@/config/fonts'
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';

const TopMenu = () => {
    return (
        <nav className='flex px-5 justify-between items-center w-full'>
            <div>
                <Link href="/">
                    <span className={`${titleFonts.className} antialiased font-bold`}>teslo</span>
                    <span>  | Shop</span>
                </Link>
            </div>

            <div className="hidden sm:block">
                <Link className="hover:bg-gray-300 m-2 p-2 rounded-md transition all hover bg-gray" href="/category/men">
                    Hombres</Link>
                <Link className="hover:bg-gray-300 m-2 p-2 rounded-md transition all hover bg-gray" href="/category/women">
                    Mujeres</Link>
                <Link className="hover:bg-gray-300 m-2 p-2 rounded-md transition all hover bg-gray" href="/category/kids">
                    Niños</Link>
            </div>


            <div className='flex items-center'>
                <Link href="/search" className='mx-2 hover:bg-gray-300  rounded-md m-1 p-1'>
                    <IoSearchOutline className='w-5 h-5' />
                </Link>


                <Link href="/cart" className='mx-2 hover:bg-gray-300  rounded-md m-1 p-1' >
                    <div className='relative'>
                        <span className='absolute text-xs rounded-full px-1 fonr-bold -top-2 -right-2 bg-blue-600 text-white'>
                            3
                        </span>
                        <IoCartOutline className='w-5 h-5' />
                    </div>
                </Link>


                <button className='m-1 p-1 rounded-md transition-all hover:bg-gray-300 '>
                    Menu
                </button>

                <button className='hover:text-opacity-55'>
                    toqueme
                </button>

            </div>




        </nav>
    )
}

export default TopMenu
