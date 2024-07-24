

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Product } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;


interface Props {
    params: {
        id: Product;

    }
}


const producId = ({ params }: Props) => {


    const { id } = params;
    const products = seedProducts.filter(product => product. === id);

    const labels: Record<Category, string> = {
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