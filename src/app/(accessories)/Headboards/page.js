import React from 'react';

// Define the data
const products = [
  {
    name: 'Ottoman Beds',
    image: 'https://static-01.daraz.pk/p/b39deea82242fdd30ae1b595f8a9c32c.jpg_300x0q75.webp',
    description: 'This is a description for Product 1',
    price: '$100'
  },
  {
    name: 'Ottoman Beds',
    image: 'https://static-01.daraz.pk/p/b39deea82242fdd30ae1b595f8a9c32c.jpg_300x0q75.webp',
    description: 'This is a description for Ottoman Beds',
    price: '$200'
  },
  {
    name: 'Ottoman Beds',
    image: 'https://static-01.daraz.pk/p/b39deea82242fdd30ae1b595f8a9c32c.jpg_300x0q75.webp',
    description: 'This is a description for Ottoman Beds',
    price: '$300'
  }
  ,{
    name: 'Ottoman Beds',
    image: 'https://static-01.daraz.pk/p/b39deea82242fdd30ae1b595f8a9c32c.jpg_300x0q75.webp',
    description: 'This is a description for Ottoman Beds',
    price: '$300'
  }
];

// ProductCard component
const ProductCard = ({ product }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
     <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '10px', }} />
     <h2 style={{ fontSize: '1.2em', marginBottom: '5px', width: '100%', textAlign: 'start' }}>{product.name}</h2>
     <p style={{ fontSize: '1em', marginBottom: '10px' }}>{product.description}</p>
     <p style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>{product.price}</p>
  </div>
 );
 

// Accessories component
const Headboards = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);

export default Headboards;
