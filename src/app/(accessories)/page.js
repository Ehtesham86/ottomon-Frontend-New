import React from 'react';

// Define the data
const products = [
  {
    name: 'Product 1',
    image: 'https://www.catfootwear.com.pk/cdn/shop/products/84046-01TheSixtyDuffelbackpack_Signature_Black_1_450x.jpg?v=1678222317',
    description: 'This is a description for Product 1',
    price: '$100'
  },
  {
    name: 'Product 2',
    image: 'https://www.catfootwear.com.pk/cdn/shop/products/84046-01TheSixtyDuffelbackpack_Signature_Black_1_450x.jpg?v=1678222317',
    description: 'This is a description for Product 2',
    price: '$200'
  },
  {
    name: 'Product 3',
    image: 'https://www.catfootwear.com.pk/cdn/shop/products/84046-01TheSixtyDuffelbackpack_Signature_Black_1_450x.jpg?v=1678222317',
    description: 'This is a description for Product 3',
    price: '$300'
  }
];

// ProductCard component
const ProductCard = ({ product }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
    <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
    <h2 style={{ fontSize: '1.2em', marginBottom: '5px' }}>{product.name}</h2>
    <p style={{ fontSize: '1em', marginBottom: '10px' }}>{product.description}</p>
    <p style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>{product.price}</p>
  </div>
);

// Accessories component
const Accessories = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
    {products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
  </div>
);

export default Accessories;
