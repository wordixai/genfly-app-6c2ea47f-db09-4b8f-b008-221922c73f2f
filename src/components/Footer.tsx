import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Product</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">Faq</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/verdantway" className="text-gray-300 hover:text-white transition-colors">VerdantWay</a></li>
              <li><a href="/category/greenharvest" className="text-gray-300 hover:text-white transition-colors">GreenHarvest</a></li>
              <li><a href="/category/verde" className="text-gray-300 hover:text-white transition-colors">Verde Plant</a></li>
              <li><a href="/category/herbal" className="text-gray-300 hover:text-white transition-colors">Herbal Craft</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Tel: +86-13588889588</li>
              <li className="text-gray-300">Email: blue2025@gmail.com</li>
              <li className="text-gray-300">
                Add: Zhejiang New Tianlong Building 2288 Tianmu 
                Mountain Western Road, Hangzhou, Zhejiang
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Blueheart Technology</h3>
            <p className="text-gray-300 text-sm mb-4">
              Founded in 2018, [Your Company] is a leading e-commerce platform dedicated to delivering a seamless and enjoyable shopping experience.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© 2024 Blueheart Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;