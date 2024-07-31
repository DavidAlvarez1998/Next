

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Product } from "@/interfaces";
import { notFound } from "next/navigation";




interface Props {
    params: {
        id: String;

    }
}


const producId = ({ params }: Props) => {


    const { id } = params;
    const products = seedProducts.filter(product => product === id);

    const labels = {
        'men': 'para hombres',
        'women': 'para mujeres',
        'kid': 'para niños',
        'unisex': 'para todos'
    }


    // if (id === 'kids') {
    //     notFound();
    // }


    return (
        <>
            <Title
                title={`Articulos de ${labels[id]}`}
                subtitle="Todos los productos"
                className="mb-2"
            />


            <ProductGrid
                products={products} />

        </>
    )
}