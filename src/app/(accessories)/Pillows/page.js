import React from 'react';

// Define the data
const products = [
  {
    name: 'Product 1',
    image: 'https://static-01.daraz.pk/p/5189989a27a505a01686890cdee3388c.png_300x0q75.webp',
    description: 'This is a description for Product 1',
    price: '$100'
  },
  {
    name: 'Product 2',
    image: 'https://static-01.daraz.pk/p/5189989a27a505a01686890cdee3388c.png_300x0q75.webp',
    description: 'This is a description for Product 2',
    price: '$200'
  },
  {
    name: 'Product 3',
    image: 'https://static-01.daraz.pk/p/5189989a27a505a01686890cdee3388c.png_300x0q75.webp',
    description: 'This is a description for Product 3',
    price: '$300'
  }
];

// ProductCard component
const ProductCard = ({ product }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
    <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
    <h2 style={{ fontSize: '1.2em', marginBottom: '5px' }}>{product.name}</h2>
    <p style={{ fontSize: '1em', marginBottom: '10px' }}>{product.description}</p>
    <p style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>{product.price}</p>
  </div>
);

// Accessories component
const Pillows = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);

export default Pillows;
