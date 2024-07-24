"use client";

import ProductGrid from "@/components/products/product-grid/ProductGrid";
import Title from "@/components/ui/title/Title";
import { Product } from "@/interfaces";
//import { initialData } from "@/seed/seed";
import axios from "axios";
import { useEffect, useState } from "react";



interface Props {
  product: Product;
}





export default function Home() {

  const url = 'https://api.escuelajs.co/api/v1/products';




  const [data, setData] = useState<any[]>([]);

  useEffect(() => {

    axios.get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Hubo un error al hacer la solicitud:', error);
      });
  }, []);



  return (

    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid
        products={data} />

    </>

  );
}

