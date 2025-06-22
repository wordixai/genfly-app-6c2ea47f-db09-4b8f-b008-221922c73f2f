import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Pure Nature Essentials',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Verdant Life Goods',
      image: 'https://images.unsplash.com/photo-1574281063915-c5c78bf55690?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Active Flex Path',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Modern Pathway',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Active Nature Gear',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Elite Walker Elite Walker',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Pure Motion',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Street Spirit',
      image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            We have a wide range of products and complete coverage of industry applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative mb-4 overflow-hidden bg-gray-100" style={{ paddingBottom: '100%' }}>
                <a href={`/product/${product.id}`}>
                  <div className="absolute w-full h-full top-0 left-0 transition-transform duration-300 group-hover:scale-105">
                    <img
                      alt={product.name}
                      src={product.image}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </a>
              </div>
              <h3 className="text-base md:text-lg font-medium text-center">
                <a
                  className="hover:text-mainColorNormal transition-colors"
                  href={`/product/${product.id}`}
                >
                  {product.name}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;