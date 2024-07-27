

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;


interface Props {
    params: {
        id: Category;

    }
}

const page = ({ params }: Props) => {
    const { id } = params;
    const products = seedProducts.filter(product => product.gender === id);
    const labels: Record<Category, string> = {
        'men': 'para hombres',
        'women': 'para mujeres',
        'kid': 'para niños',
        'unisex': 'para todos'
    }
    return (
        <>
            <Title
                title={`Articulos ${labels[id]}`}
                subtitle="Todos los productos"
                className="mb-2"
            />
            <ProductGrid
                products={products} />

        </>
    )
}

export default page