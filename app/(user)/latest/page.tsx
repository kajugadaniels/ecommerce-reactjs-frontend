'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
import { getProducts } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import { toast } from 'react-toastify';

interface Filters {
  categories: string[];
  sizes: string[];
  color: string;
  priceMin: number | null;
  priceMax: number | null;
  bestFor: string[];
}

const Latest = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<string>(''); // e.g., 'price-low-to-high', 'price-high-to-low', 'newest'

  // Prevent body scroll when sidebar is open on small devices
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isSidebarOpen]);

  // Automatically close sidebar when resizing to large devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isSidebarOpen) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Function to fetch products based on filters and sort
  const fetchProducts = async (filters: Filters, sort: string) => {
    setLoading(true);
    try {
      const params: any = {};

      // Apply filters
      if (filters.categories.length > 0) {
        params.category = filters.categories;
      }
      if (filters.sizes.length > 0) {
        params.size = filters.sizes;
      }
      if (filters.color) {
        params.color = filters.color;
      }
      if (filters.priceMin !== null) {
        params.price_min = filters.priceMin;
      }
      if (filters.priceMax !== null) {
        params.price_max = filters.priceMax;
      }
      if (filters.bestFor.length > 0) {
        params.best_for = filters.bestFor;
      }

      // Apply sorting
      if (sort) {
        if (sort === 'price-low-to-high') {
          params.ordering = 'price';
        } else if (sort === 'price-high-to-low') {
          params.ordering = '-price';
        } else if (sort === 'newest') {
          params.ordering = '-created_at';
        }
      } else {
        // Default sorting
        params.ordering = '-created_at';
      }

      const response = await getProducts(params);
      if (response.status === 200) {
        setProducts(response.data.results);
      } else {
        toast.error(response.data.error || 'Failed to fetch products.');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || 'An error occurred while fetching products.');
    } finally {
      setLoading(false);
    }
  };

  // Handle filter changes from Sidebar
  const handleFilterChange = (filters: Filters) => {
    fetchProducts(filters, sortBy);
  };

  // Handle sort changes
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
    // Assuming you have a state to hold current filters
    // For simplicity, refetch products with new sort and existing filters
    // You might want to maintain current filter state separately
    // Here, we'll assume filters are empty if not maintained
    // Ideally, lift filter state up to a higher component
    fetchProducts(
      {
        categories: [],
        sizes: [],
        color: '',
        priceMin: null,
        priceMax: null,
        bestFor: [],
      },
      selectedSort
    );
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchProducts(
      {
        categories: [],
        sizes: [],
        color: '',
        priceMin: null,
        priceMax: null,
        bestFor: [],
      },
      sortBy
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between p-4 text-white bg-black">
        <div>
          <h1 className="text-xl md:text-2xl">Enso By You (79)</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Toggle Filters Button for Small Devices */}
          <button
            className="px-4 py-2 text-sm text-black bg-gray-500 rounded md:hidden"
            onClick={toggleSidebar}
            aria-label="Toggle Filters"
          >
            {isSidebarOpen ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* Sort By Dropdown */}
          <div className="relative">
            <select
              className="px-2 py-2 text-black bg-gray-400 rounded appearance-none focus:outline-none"
              aria-label="Sort by"
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="">Sort By</option>
              <option value="price-low-to-high">Price: Low to High</option>
              <option value="price-high-to-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548c.436-.446 1.043-.481 1.576 0L10 10.28l2.908-2.732c.533-.481 1.141-.446 1.576 0 .436.445.408 1.197 0 1.576l-4 3.908c-.408.396-1.019.481-1.576 0l-4-3.908c-.408-.379-.436-1.13 0-1.576z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onFilterChange={handleFilterChange} />

      {/* Main Content */}
      <div className="container mx-auto mt-4 px-4 md:ml-[20%] md:w-4/5">
        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-700">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-700">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden font-sans transition-transform transform bg-gray-300 rounded-lg shadow-lg hover:-translate-y-2"
              >
                <Link href={`/latest/detail/${product.slug}`}>
                  <div className="flex items-center justify-center h-64 p-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </Link>
                <div className="p-6 bg-white">
                  <h3 className="text-[#D87D4A]">Customize</h3>
                  <h3 className="text-gray-800">{product.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {product.product_sizes.length} Sizes &middot; {product.images.length} Images
                  </p>
                  <div className="mt-4 text-lg font-semibold text-gray-700">
                    ${parseFloat(product.price).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Latest;
