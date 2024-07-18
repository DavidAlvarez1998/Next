"use client";
import { Product } from '@/interfaces'
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
    product: Product;
}



const ProductGridItem = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState(product.images[0])



    return (
        <div className='rounded-md overflow-hidden fade-in'>

            <Link href={`/produc/${product.slug}`}  >
                <Image
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    className='w-full objet-cover rounded'
                    width={500}
                    height={500}
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />
            </Link>

            <div className='p-4 flex flex-col'>
                <Link href={`/produc/${product.slug}`} className='hover:text-blue-600'>
                    {product.title}
                </Link>
                <span className='fond-bold'>${product.price}</span>
            </div>

        </div>
    );
}

export default ProductGridItem
