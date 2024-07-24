"use client";
import { Product } from '@/interfaces';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';




interface Props {
    product: Product;
}



const ProductGridItem = ({ product }: Props) => {


    const cleanImageUrl = (url: string): string => {
        url = url.replace(/^\["|"\]$/g, '');
        return url.replace(/"/g, '');

    }



    const [displayImage, setDisplayImage] = useState(product.images[0])





    return (

        <div className='rounded-md overflow-hidden fade-in'>

            {product.images[0] ? (

                <Card sx={{ maxWidth: 500, maxHeight: 750 }}>

                    <Link href={`/produc/${product.id}`}  >

                        <CardMedia
                            sx={{ height: 250 }}
                            image={cleanImageUrl(displayImage)}
                            title={product.title}
                            onMouseEnter={() => setDisplayImage(product.images[1] || product.images[2] || product.images[0])}
                            onMouseLeave={() => setDisplayImage(product.images[0])}
                        />
                    </Link>

                    <CardContent>

                        <Link href={`/produc/${product.id}`}  >
                            <Typography gutterBottom variant="h5" component="div" className=" hover:text-blue-700">
                                {product.title}
                            </Typography>
                        </Link>

                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>

                    </CardContent>
                    <CardActions >
                        <div>
                            ${product.price}.00
                        </div>
                        <div>
                            <Link href={`/produc/${product.id}`}>
                                <Button size="small" className=" hover:text-red-700">
                                    Buy
                                </Button>
                            </Link>
                            <Button size="small" className=" hover:text-red-700">
                                Add to cart
                            </Button>
                        </div>
                    </CardActions>
                </Card>


                //  <Link href={`/produc/${product.id}`}  >
                //     <Image
                //         src={`/products/${displayImage}`}
                //         alt={product.title}
                //         className='w-full objet-cover rounded'
                //         width={500}
                //         height={500}
                //         onMouseEnter={() => setDisplayImage(product.images[1])}
                //         onMouseLeave={() => setDisplayImage(product.images[0])}
                //     />
                // </Link>

                // <div className='p-4 flex flex-col'>
                //     <Link href={`/produc/${product.id}`} className='hover:text-blue-600'>
                //         {product.title}
                //     </Link>
                //     <span className='fond-bold'>${product.price}</span>
                // </div> 


            ) : null
            }

        </div >
    );
}

export default ProductGridItem
