'use client';

import React, { useEffect, useState } from 'react';
import { getAllProducts } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import { toast } from 'react-toastify';

const RandomProducts: React.FC = () => {
  const [randomProducts, setRandomProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRandomProducts = async () => {
      try {
        const response = await getAllProducts();
        if (response.status === 200) {
          const allProducts: Product[] = response.data;
          // Shuffle the array and select first 4
          const shuffled = allProducts.sort(() => 0.5 - Math.random());
          setRandomProducts(shuffled.slice(0, 4));
        } else {
          toast.error(response.data.error || 'Failed to fetch products.');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'An error occurred while fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetchRandomProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading random products...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 mt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {randomProducts.map((product) => (
        <div
          key={product.id}
          className="relative p-5 transition-all bg-transparent cursor-pointer rounded-2xl hover:-translate-y-2"
          onClick={() => {
            // Handle product click, e.g., navigate to product details
          }}
        >
          <div className="mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8">
            <img
              src={product.image}
              className="object-cover w-full h-full"
              alt={product.title}
            />
          </div>
          <div className="flex items-center justify-center px-4 py-2 sm:px-10">
            <h3 className="text-lg font-extrabold text-center text-gray-800 sm:text-base">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RandomProducts;
