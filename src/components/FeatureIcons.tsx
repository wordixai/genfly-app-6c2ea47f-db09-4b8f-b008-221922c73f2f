import React from 'react';
import { Truck, Phone, Shield, ShoppingBag } from 'lucide-react';

const FeatureIcons = () => {
  const features = [
    {
      icon: Truck,
      title: 'Inventory is abundant',
      description: 'All goods in stock'
    },
    {
      icon: Phone,
      title: 'Professional consultation',
      description: '24/7 professional service'
    },
    {
      icon: Shield,
      title: 'Credit is guaranteed',
      description: 'Safe payment'
    },
    {
      icon: ShoppingBag,
      title: '100% repair and theft',
      description: 'Reputation and professional'
    }
  ];

  return (
    <div className="py-12 bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-mainColorNormal rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureIcons;