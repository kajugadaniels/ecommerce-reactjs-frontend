import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="font-sans tracking-wide bg-[#000] py-12 px-16">
      <div className="mt-12 lg:flex lg:items-center">
        <ul className="flex flex-wrap gap-4">
          <li>
            <a href="javascript:void(0)" className="text-sm text-gray-300 hover:text-gray-100">
              Order Status
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-sm text-gray-300 hover:text-gray-100">
              Shipping and Delivery
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-sm text-gray-300 hover:text-gray-100">
              Returns
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-sm text-gray-300 hover:text-gray-100">
              Order Cancelation
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-sm text-gray-300 hover:text-gray-100">
              Payment Options
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-sm text-gray-300 hover:text-gray-100">
              Contact Us
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-sm text-gray-300 hover:text-gray-100">
              About Us
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="text-sm text-gray-300 hover:text-gray-100">
              News
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-12 lg:flex lg:items-center">
        <ul className="flex flex-wrap gap-4">
          <li>
            <p className="text-sm text-gray-700 hover:text-gray-100">
              © 2024 Enso Inc. Alright Reserved
            </p>
          </li>
          <li>
            <a href='' className="text-sm text-gray-700 hover:text-gray-100">
              Guides
            </a>
          </li>
          <li>
            <a href='' className="text-sm text-gray-700 hover:text-gray-100">
              Terms of Sale
            </a>
          </li>
          <li>
            <a href='' className="text-sm text-gray-700 hover:text-gray-100">
              Terms of Use
            </a>
          </li>
          <li>
            <a href='' className="text-sm text-gray-700 hover:text-gray-100">
              Enso Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
