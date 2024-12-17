// client/app/(user)/customize/[slug]/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProduct, getProducts } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import Link from 'next/link';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

const CustomizePage = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>('');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
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
          // Initialize selected size and color if available
          if (response.data.product_sizes.length > 0) {
            setSelectedSize(response.data.product_sizes[0].slug);
          }
          if (response.data.color) {
            setSelectedColor(response.data.color);
          }
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

  // Handle size selection
  const handleSizeChange = (sizeSlug: string) => {
    setSelectedSize(sizeSlug);
  };

  // Handle color selection
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-700">Loading customization options...</p>
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
                aria-label={`View image`}
              >
                <img
                  src={img.image}
                  alt={`Thumbnail ${img.id}`}
                  className="object-cover w-20 h-20"
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
              />
            </button>
          </div>
        </div>

        {/* Product Description and Customization Options */}
        <div className="flex flex-col items-start w-full text-white font-alata lg:w-2/5">
          <h2 className="mb-4 text-2xl font-bold text-primary lg:text-3xl">
            Customize {product.title}
          </h2>
          <p className="mb-4 text-sm lg:text-base">
            {product.description}
          </p>
          <p className="mb-6 text-sm text-gray-400">
            Custom-made and delivered to you in 2 weeks or less.
          </p>

          {/* Customization Options */}
          <div className="w-full p-6 bg-gray-800 rounded-lg shadow-md">
            {/* Size Selection */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-white uppercase">Select Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.product_sizes.map((size) => (
                  <label key={size.slug} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="size"
                      value={size.slug}
                      checked={selectedSize === size.slug}
                      onChange={() => handleSizeChange(size.slug)}
                      className="w-4 h-4 text-indigo-600 form-radio"
                    />
                    <span className="text-sm text-white">{size.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <h3 className="mb-2 text-sm font-semibold text-white uppercase">Select Color</h3>
              <div className="flex flex-wrap gap-2">
                {/* Assuming product.color contains a comma-separated list of colors */}
                {product.color.split(',').map((color, idx) => (
                  <label key={idx} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="color"
                      value={color.trim()}
                      checked={selectedColor === color.trim()}
                      onChange={() => handleColorChange(color.trim())}
                      className="w-4 h-4 text-indigo-600 form-radio"
                    />
                    <span className="text-sm text-white">{color.trim()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Customization */}
            <div className="mt-6">
              <Link href={`/latest/${product.slug}`}>
                <button className="w-full rounded-full bg-[#D87D4A] px-4 py-2 text-white font-semibold hover:bg-indigo-600 transition">
                  Save Customization
                </button>
              </Link>
            </div>
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

export default CustomizePage;
