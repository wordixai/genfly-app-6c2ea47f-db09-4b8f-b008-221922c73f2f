import React from 'react';

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'VerdantWay',
      image: 'https://images.unsplash.com/photo-1574281063915-c5c78bf55690?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'GreenHarvest',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Verde Plant',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Herbal Craft',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="py-16 bg-mainColorLight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Categories</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Explore various categories with curated content designed just for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {categories.map((category) => (
            <a key={category.id} className="block group" href={`/category/${category.id}`}>
              <div className="relative overflow-hidden mb-3" style={{ paddingBottom: '100%' }}>
                <div className="absolute w-full h-full top-0 left-0">
                  <img
                    alt={category.name}
                    src={category.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 group-hover:text-mainColorNormal transition-colors">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="inline-block px-6 py-3 bg-mainColorNormal text-white font-medium rounded-md hover:bg-mainColorDeep transition-colors duration-300"
            href="/products"
          >
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;