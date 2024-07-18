"use client";

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";
import { useEffect, useState } from "react";




const productos = initialData.products

export default function Home() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (contador >= 10 || contador <= -10) {
      setContador(0);
    }
  }, [contador]);



  return (

    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />


      <div>
        <button onClick={() => setContador(contador + 1)}>clickMe +</button>
      </div>
      <div>
        <button onClick={() => setContador(contador - 1)}>clickMe -</button>
      </div>
      <div>
        {contador}
      </div>
      <ProductGrid
        products={productos} />

    </>

  );
}

