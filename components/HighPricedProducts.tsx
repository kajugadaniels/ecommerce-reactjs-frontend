'use client';

import React, { useEffect, useState } from 'react';
import { getHighPricedProducts } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import { toast } from 'react-toastify';

const HighPricedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchHighPricedProducts = async () => {
      try {
        const response = await getHighPricedProducts();
        if (response.status === 200) {
          // Set products to response.data.results
          setProducts(response.data.results);
        } else {
          toast.error(response.data.error || 'Failed to fetch high-priced products.');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'An error occurred while fetching products.');
      } finally {
        setLoading(false);
      }
    };

    fetchHighPricedProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-white">Loading high-priced products...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative p-5 transition-all shadow-lg cursor-pointer rounded-2xl hover:-translate-y-2"
          style={{
            background: 'linear-gradient(to bottom, #000000 50%, #FFFFFF 50%)',
          }}
          onClick={() => {
            // Handle product click, e.g., navigate to product details
          }}
        >
          <div className="w-5/6 mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8 h-52 md:mb-2">
            <img
              src={product.image}
              alt={product.title}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-4 py-2 sm:px-10">
            <h3 className="text-lg font-extrabold text-center text-gray-800 sm:text-base">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">${parseFloat(product.price).toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HighPricedProducts;
