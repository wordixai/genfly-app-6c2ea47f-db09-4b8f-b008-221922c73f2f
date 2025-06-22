import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Phoebe Buffay',
      location: 'Korea',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      quote: 'Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.'
    },
    {
      id: 2,
      name: 'Monica Geller',
      location: 'USA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      quote: 'Great user experience on your website. Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.'
    },
    {
      id: 3,
      name: 'Robort Green',
      location: 'UK',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      quote: 'Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.'
    }
  ];

  return (
    <div className="w-full bg-mainColorLight">
      <div className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Customers Say</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Hear what our valued customers have to say about their experience with our products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col">
              <div className="text-2xl text-mainColorNormal mb-6">
                <Quote className="w-8 h-8" />
              </div>
              <p className="text-gray-700 mb-8 flex-0 text-base">{testimonial.quote}</p>
              <div className="flex items-center mt-auto">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 relative">
                  <img
                    alt={testimonial.name}
                    src={testimonial.image}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">From {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;