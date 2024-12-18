'use client';

import React, { useState, useEffect } from 'react';
import { getProducts } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Women = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch Female Products
  useEffect(() => {
    const fetchFemaleProducts = async () => {
      setLoading(true);
      try {
        const response = await getProducts({
          product_type: 'Female', // Filter by product_type
          ordering: '-created_at', // Optional: Order by newest first
          limit: 10, // Adjust the limit as needed
        });

        if (response.status === 200) {
          setProducts(response.data.results);
        } else {
          const errorMessage = response.data.error || 'Failed to fetch products.';
          setError(errorMessage);
          toast.error(errorMessage);
        }
      } catch (error: any) {
        const errorMessage =
          error.response?.data?.error || 'An error occurred while fetching products.';
        setError(errorMessage);
        toast.error(errorMessage);
        console.error('Fetch Products Error:', error.response || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFemaleProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#121212] text-white">
        <p className="text-gray-300">Loading Women's Collection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#121212] text-white">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] text-white">
      <ToastContainer />
      {/* Hero Section */}
      <div className="relative flex flex-col-reverse items-center lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/hero/image.png"
            alt="Women's Collection"
            className="h-full w-full object-contain"
          />
        </div>
        {/* Text Section */}
        <div className="w-full bg-opacity-70 p-8 lg:w-1/2 lg:p-16">
          <h1 className="mb-4 text-4xl font-bold">WOMEN COLLECTIONS</h1>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our
            carefully curated collection of modern styles. Elevate your wardrobe
            with the best of women`s fashion.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explore our
            carefully curated collection of modern styles. Elevate your wardrobe
            with the best of women`s fashion.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-black p-8 text-white sm:p-16">
        {/* Section Title */}
        <h2 className="mb-6 text-center text-2xl font-semibold">STYLES</h2>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="flex flex-col rounded bg-gray-800">
                <div className="flex-1">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[350px] w-full object-contain rounded-t"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 bg-[rgba(0,0,0,0.5)] px-6 py-6 rounded-b">
                  <h3 className="text-lg font-bold">{product.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">${parseFloat(product.price).toFixed(2)}</p>
                  <Link href={`/customize/${product.slug}`}>
                    <button className="mt-4 w-full rounded-full bg-[#D87D4A] px-6 py-3 text-white transition hover:bg-[#e08a55]">
                      Explore
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-300">No products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Women;
