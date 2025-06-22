import React from 'react';

const AboutSection = () => {
  const stats = [
    { number: '10,000+', label: 'Global Customers' },
    { number: '80+', label: 'Countries Served' },
    { number: '18+', label: 'Years Experience' },
    { number: '75+', label: 'Products' }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Learn about our mission, values, and dedicated team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[300px] lg:h-full overflow-hidden">
            <img
              alt="Blueheart Technology"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Blueheart Technology</h3>
            <p className="mb-6 text-gray-700">
              Founded in 2018, [Your Company] is a leading e-commerce platform dedicated to delivering a seamless and enjoyable shopping experience to customers worldwide. Our mission is to connect people with the products they love, offering a curated selection of top-quality items across a variety of categories, including electronics, fashion, home goods, and more.
              <br /><br />
              With a focus on innovation, reliability, and customer satisfaction, we have rapidly grown our user base and built strong relationships with trusted suppliers and brands. Our user-friendly website and mobile app are designed to make shopping fast, easy, and secure for everyone. We utilize advanced technology to ensure safe transactions, prompt delivery, and responsive customer service. We utilize advanced technology to ensure safe transactions, prompt delivery, and responsive customer service.
            </p>
            <a
              className="inline-block px-6 py-3 bg-mainColorNormal text-white font-medium rounded-md hover:bg-mainColorDeep transition-colors duration-300 self-start"
              href="/about"
            >
              View More
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 bg-mainColorLight rounded-md">
              <div className="text-4xl font-bold text-mainColorNormal mb-2">{stat.number}</div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;