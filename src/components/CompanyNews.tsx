import React from 'react';

const CompanyNews = () => {
  const newsItems = [
    {
      id: 1,
      title: 'New Standard Store Opens Downtown',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      date: 'Dec 12'
    },
    {
      id: 2,
      title: 'The future of E-commerce and retail Inc.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
      date: 'Nov 28'
    },
    {
      id: 3,
      title: 'Improve your customer experience',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
      date: 'Nov 15'
    }
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Company News</h2>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Learn how to grow your business with our expert advice.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4">
                <span className="inline-block px-3 py-1 bg-white text-gray-800 text-sm font-medium rounded">
                  {item.date}
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-mainColorNormal transition-colors">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
};

export default CompanyNews;