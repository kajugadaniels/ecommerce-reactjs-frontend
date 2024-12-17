'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProduct, getProducts } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import Link from 'next/link';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ProductDetailPage = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>('');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [relatedLoading, setRelatedLoading] = useState<boolean>(false);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await getProduct(slug);
        if (response.status === 200) {
          setProduct(response.data);
          setMainImage(response.data.image); // Set main image to primary image
        } else {
          toast.error(response.data.error || 'Failed to fetch product details.');
        }
      } catch (error: any) {
        toast.error(error.response?.data?.error || 'An error occurred while fetching product details.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  // Fetch related products based on category
  useEffect(() => {
    if (product) {
      const fetchRelatedProducts = async () => {
        setRelatedLoading(true);
        try {
          const response = await getProducts({
            category: product.category.slug,
            ordering: '-created_at',
            limit: 4, // Adjust the limit as needed
          });
          if (response.status === 200) {
            // Exclude the current product from related products
            const related = response.data.results.filter(
              (item: Product) => item.id !== product.id
            );
            setRelatedProducts(related);
          } else {
            toast.error(response.data.error || 'Failed to fetch related products.');
          }
        } catch (error: any) {
          toast.error(error.response?.data?.error || 'An error occurred while fetching related products.');
        } finally {
          setRelatedLoading(false);
        }
      };

      fetchRelatedProducts();
    }
  }, [product]);

  // Handle thumbnail click
  const handleThumbnailClick = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-700">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-black lg:p-32">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-28">
        {/* Image Section */}
        <div className="flex flex-col items-center justify-center w-full lg:w-3/5">
          {/* Main Image */}
          <div className="w-full mb-4">
            <img
              src={mainImage}
              alt={product.title}
              className="object-contain w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex space-x-4">
            {product.images.map((img) => (
              <button
                key={img.id}
                onClick={() => handleThumbnailClick(img.image)}
                className={`border ${
                  mainImage === img.image ? 'border-indigo-600' : 'border-transparent'
                } rounded-lg overflow-hidden focus:outline-none`}
                aria-label={`View image ${img.id}`}
              >
                <img
                  src={img.image}
                  alt={`Thumbnail ${img.id}`}
                  className="object-cover w-20 h-20"
                  loading="lazy"
                />
              </button>
            ))}
            {/* Main Image as Thumbnail */}
            <button
              onClick={() => handleThumbnailClick(product.image)}
              className={`border ${
                mainImage === product.image ? 'border-indigo-600' : 'border-transparent'
              } rounded-lg overflow-hidden focus:outline-none`}
              aria-label="View main image"
            >
              <img
                src={product.image}
                alt="Main Thumbnail"
                className="object-cover w-20 h-20"
                loading="lazy"
              />
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="flex flex-col items-start w-full text-white font-alata lg:w-2/5">
          <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
            {product.title}
          </h2>
          <p className="mb-4 text-sm lg:text-base">
            {product.description}
          </p>
          <p className="mb-6 text-sm text-gray-400">
            Custom-made and delivered to you in 2 weeks or less.
          </p>
          <div className="w-full mt-8 bg-white rounded-lg shadow-md px-14 py-14 lg:mt-16 lg:w-3/4 lg:p-8">
            {/* Description Text */}
            <p className="mb-2 text-sm text-center text-black">
              Custom-made and delivered to you in 4 weeks or less.
            </p>

            {/* Title */}
            <h2 className="mb-4 text-center text-sm font-bold uppercase text-[#D87D4A]">
              Customize Your Own {product.title}
            </h2>

            {/* Arrows */}
            <div className="flex items-center justify-center mb-4">
              <FaAngleDoubleDown className="h-24 w-24 text-[#D87D4A]" />
            </div>

            {/* Customize Button */}
            <Link href={`/customize?slug=${product.slug}`}>
              <button className="flex items-center justify-center w-full px-4 py-4 font-semibold text-white transition rounded-full bg-[#D87D4A]">
                Customize
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <h2 className="mt-12 text-xl font-extrabold text-center text-white font-alata lg:text-3xl">
        You May Also Like This
      </h2>

      <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {relatedLoading ? (
          <p className="text-center text-gray-700">Loading related products...</p>
        ) : relatedProducts.length > 0 ? (
          relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="relative p-5 transition-all bg-gray-700 shadow-lg cursor-pointer rounded-2xl hover:-translate-y-2"
            >
              <Link href={`/latest/${relatedProduct.slug}`}>
                <div className="w-full mx-auto mb-4 overflow-hidden aspect-w-16 aspect-h-8 h-52 md:mb-2">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="object-contain w-full h-full rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-center px-4 py-2 sm:px-10">
                  <h3 className="text-lg font-extrabold text-center text-gray-800 sm:text-base">
                    {relatedProduct.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
