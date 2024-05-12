import React from 'react';

const products = [
    {
        name: 'Product 1',
        image: 'https://static-01.daraz.pk/p/2e82ccbf251b986faab8153b305ecfac.jpg_300x0q75.webp',
        description: 'This is a description for Product 1',
        price: '$100'
    },
    {
        name: 'Product 2',
        image: 'https://static-01.daraz.pk/p/2e82ccbf251b986faab8153b305ecfac.jpg_300x0q75.webp',
        description: 'This is a description for Product 2',
        price: '$200'
    },
    {
        name: 'Product 3',
        image: 'https://static-01.daraz.pk/p/2e82ccbf251b986faab8153b305ecfac.jpg_300x0q75.webp',
        description: 'This is a description for Product 3',
        price: '$300'
    }
];

const MattressToppers = () => {
    return (
        <div>
            <h1>Product List</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                {products.map((product, index) => (
                    <div key={index} style={{ display: 'flex', width: '100%', border: '1px solid #ccc', borderRadius: '8px', padding: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        <img src={product.image} alt={product.name} style={{ width: '5%', height: '3rem', objectFit: 'cover' }} />
                        <div style={{ width: '50%', paddingLeft: '10px' }}>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                            <p><strong>Price:</strong> {product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MattressToppers;
