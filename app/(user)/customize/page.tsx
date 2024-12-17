// client/app/(user)/customize/page.tsx

'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { getProduct } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import Link from 'next/link';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Customize = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');

  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [cart, setCart] = useState<any[]>([]); // Define a proper interface if needed
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch product details based on slug
  useEffect(() => {
    if (!slug) {
      toast.error('No product selected for customization.');
      setLoading(false);
      return;
    }

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

  // Initialize cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Handle thumbnail click
  const handleThumbnailClick = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    if (!product) {
      toast.error('Product not available.');
      return;
    }

    if (!selectedSize) {
      toast.error('Please select a size.');
      return;
    }

    if (!selectedColor) {
      toast.error('Please select a color.');
      return;
    }

    const cartItem = {
      productId: product.id,
      title: product.title,
      slug: product.slug,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: mainImage,
    };

    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(
      (item) => item.productId === cartItem.productId && item.size === cartItem.size && item.color === cartItem.color
    );

    if (existingItemIndex !== -1) {
      // Optionally, update quantity or notify the user
      toast.info('Item already in cart.');
    } else {
      setCart([...cart, cartItem]);
      toast.success('Product added to cart!');
    }
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
        <p className="text-red-500">Product not found for customization.</p>
      </div>
    );
  }

  return (
    <div className="text-white bg-black">
      {/* Main Cart Content */}
      <div className="flex flex-col gap-10 p-4 bg-black lg:flex-row lg:gap-52 lg:p-0">
        {/* Product Images Section */}
        <div className="flex flex-col w-full p-6 lg:ml-28 lg:w-1/2 lg:flex-row">
          <div className="flex flex-row w-full space-x-2 lg:w-1/5 lg:flex-col lg:space-x-0 lg:space-y-2">
            {/* Thumbnails */}
            {product.images.map((img) => (
              <button
                key={img.id}
                onClick={() => handleThumbnailClick(img.image)}
                className={`border ${
                  mainImage === img.image ? 'border-indigo-600' : 'border-transparent'
                } rounded-md overflow-hidden focus:outline-none`}
                aria-label={`View image ${img.id}`}
              >
                <img
                  src={img.image}
                  alt={`Thumbnail ${img.id}`}
                  className="object-cover w-16 h-16 rounded-md cursor-pointer hover:opacity-80"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full mt-4 lg:ml-4 lg:mt-0 lg:w-4/5">
            <img
              src={mainImage}
              alt="Kimono Main"
              className="object-cover w-full h-auto rounded-lg"
              loading="lazy"
            />

            {/* Badge */}
            <div className="absolute px-2 py-1 text-sm text-black bg-white rounded-md shadow-md left-2 top-2">
              Highly Rated
            </div>

            {/* Navigation Buttons */}
            <div className="absolute flex space-x-2 bottom-2 right-2">
              <button className="flex items-center justify-center w-8 h-8 text-white bg-gray-700 rounded-full hover:bg-gray-800">
                ←
              </button>
              <button className="flex items-center justify-center w-8 h-8 text-white bg-gray-700 rounded-full hover:bg-gray-800">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full p-6 space-y-6 lg:mr-28 lg:w-1/2">
          {/* Price and Additional Thumbnails */}
          <div>
            <h1 className="mb-2 text-2xl font-bold">${parseFloat(product.price).toFixed(2)}</h1>
            <div className="flex flex-wrap gap-2">
              {product.images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => handleThumbnailClick(img.image)}
                  className={`border ${
                    mainImage === img.image ? 'border-indigo-600' : 'border-transparent'
                  } rounded-md overflow-hidden focus:outline-none`}
                  aria-label={`View image ${img.id}`}
                >
                  <img
                    src={img.image}
                    alt={`Additional Thumbnail ${img.id}`}
                    className="object-cover w-16 h-16 rounded-md cursor-pointer hover:opacity-80"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Select Size</h2>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {product.product_sizes.map((size) => (
                <button
                  key={size.slug}
                  onClick={() => setSelectedSize(size.slug)}
                  className={`rounded border border-gray-700 px-4 py-2 ${
                    selectedSize === size.slug
                      ? 'bg-white font-bold text-black'
                      : 'hover:bg-gray-800'
                  }`}
                  aria-pressed={selectedSize === size.slug}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Select Color</h2>
            <div className="flex flex-wrap gap-3">
              {/* Assuming product.color is a string of available colors separated by commas */}
              {product.color.split(',').map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color.trim())}
                  className={`rounded border border-gray-700 px-4 py-2 ${
                    selectedColor === color.trim()
                      ? 'bg-white font-bold text-black'
                      : 'hover:bg-gray-800'
                  }`}
                  aria-pressed={selectedColor === color.trim()}
                >
                  {color.trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="w-full py-4 font-bold text-black bg-white rounded hover:bg-gray-200">
              Learn More
            </button>
            <button
              onClick={handleAddToCart}
              className="w-full rounded-full bg-[#D87D4A] py-4 font-bold hover:bg-[#e08a55]"
            >
              Add to Bag
            </button>
            <button className="w-full py-4 text-gray-400 border border-gray-700 rounded-full hover:bg-gray-800">
              Favorite
            </button>
          </div>

          {/* Shipping Information */}
          <div className="pt-4 text-sm text-gray-400 border-t border-gray-700">
            <p>Shipping</p>
            <p>You`ll see our shipping options at checkout.</p>
            <p className="mt-2">Free Pickup</p>
            <p className="cursor-pointer text-[#D87D4A] underline">
              Find a Store
            </p>
            <div className="mt-4">
              <p>Style: {product.slug}</p>
              <p>Color: {selectedColor || 'N/A'}</p>
            </div>
          </div>

          {/* Product Details Toggle */}
          <div>
            <button
              onClick={() => alert('Toggle Product Details')}
              className="w-full cursor-pointer border-t border-gray-700 pt-4 text-left text-sm text-[#D87D4A] underline"
            >
              View Product Details
            </button>
          </div>

          {/* Shipping & Returns */}
          <div>
            <button
              onClick={() => alert('Toggle Shipping & Returns')}
              className="w-full cursor-pointer border-t border-gray-700 pt-4 text-left text-sm text-[#D87D4A] underline"
            >
              Shipping & Returns
            </button>
          </div>
        </div>
      </div>

      {/* You Might Also Like Section */}
      <div className="flex flex-col items-center justify-between px-4 mt-10 sm:flex-row sm:px-12 md:px-24 lg:px-72">
        <div className="text-xl font-bold">You Might Also Like</div>
        <div className="flex items-center mt-4 sm:mt-0">
          <div className="w-6 h-6 mr-2 bg-white rounded-full"></div>
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="container px-4 mx-auto mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Repeated Product Blocks */}
          {Array(3)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="overflow-hidden font-sans bg-gray-300 rounded-lg shadow-md"
              >
                <div className="flex min-h-[256px] items-center justify-center">
                  <img
                    src="/products/product-5.png"
                    alt={`Product ${idx + 1}`}
                    className="object-contain w-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-[#D87D4A]">Customize</h3>
                  <h3 className="text-gray-800">Hudy Kimono</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    5 Colors &middot; 3 Fabrics
                  </p>
                  <div className="mt-4 text-lg font-semibold text-gray-700">
                    ${parseFloat(product.price).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Customize;
