



export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    category: {
        id: number,
        name: string,
        image: string,
    },



}



// [
//     {
//       "id": 4,
//       "title": "Handmade Fresh Table",
//       "price": 687,
//       "description": "Andy shoes are designed to keeping in...",
//       "category": {
//         "id": 5,
//         "name": "Others",
//         "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
//       },
//       "images": [
//         "https://placeimg.com/640/480/any?r=0.9178516507833767",
//         "https://placeimg.com/640/480/any?r=0.9300320592588625",
//         "https://placeimg.com/640/480/any?r=0.8807778235430017"
//       ]
//     }
//     // ...
//   ]


// export interface Product {
//     //todo: id: string;
//     description: string;
//     images: string[];
//     inStock: number;
//     price: number;
//     sizes: Size[];
//     slug: string;
//     tags: string[];
//     title: string;
//     type: Type;
//     gender: Category
// }

// export type Category = 'men' | 'women' | 'kid' | 'unisex';
// export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
// export type Type = 'shirts' | 'pants' | 'hoodies' | 'hats';