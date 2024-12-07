// Sidebar.tsx
import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for small devices */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}
      
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-gray-400 px-6 py-4 shadow-lg transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:translate-x-0 md:w-1/3`}
        aria-label="Sidebar Navigation"
      >
        <ul>
          {/* Categories Section */}
          <li className="mb-6">
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Categories
            </h3>
            <ul className="mt-4 space-y-2">
              {['Jacket', 'Dress', 'Coat', 'Pants', 'Newest'].map((category) => (
                <li key={category}>
                  <Link href="#">
                    <span className="block px-3 py-2 transition-colors rounded hover:bg-gray-700">
                      {category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Filters Section */}
          <li className="mb-6">
            <h3 className="text-sm font-semibold tracking-wider uppercase">
              Filters
            </h3>
            <ul className="mt-4 space-y-2">
              {['Gender', 'Color', 'Shop by Price', 'Best For'].map((filter) => (
                <li key={filter}>
                  <Link href="#">
                    <span className="block px-3 py-2 transition-colors rounded hover:bg-gray-700">
                      {filter}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
