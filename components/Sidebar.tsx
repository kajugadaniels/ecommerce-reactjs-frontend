import React from 'react';

const Sidebar = () => {
  return (
    <div>
      <nav className="fixed left-10 top-36 h-[700px] w-64 overflow-auto bg-gray-400 px-10 py-2 font-sans text-black shadow-lg">
        <ul>
          <li className="mb-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider">
              Categories
            </h3>
            <ul className="mt-2 space-y-1">
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Jacket</span>
                </a>
              </li>
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Dress</span>
                </a>
              </li>
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Coat</span>
                </a>
              </li>
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Pants</span>
                </a>
              </li>
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Newest</span>
                </a>
              </li>
            </ul>
          </li>

          <li className="mb-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider">
              Filters
            </h3>
            <ul className="mt-2 space-y-1">
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Gender</span>
                </a>
              </li>
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Color</span>
                </a>
              </li>
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Shop by Price</span>
                </a>
              </li>
              <li className="rounded px-3 py-2 transition-colors hover:bg-gray-700">
                <a href="#" className="flex items-center">
                  <span className="block flex-grow">Best For</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
