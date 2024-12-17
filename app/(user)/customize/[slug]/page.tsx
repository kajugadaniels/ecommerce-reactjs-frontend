'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getProduct } from '@/Helpers/CallRequestHelper';
import { Product } from '@/types/Product';
import { toast } from 'react-toastify';

const Customize = () => {
  const params = useParams();
  const { slug } = params as { slug: string };

  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null); // Using size ID
  const [quantity, setQuantity] = useState<number>(1);
  const [mainImage, setMainImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await getProduct(slug);
        if (response.status === 200) {
          setProduct(response.data);
          setMainImage(response.data.image); // Set main image
        } else {
          toast.error(response.data.error || 'Failed to fetch product details.');
        }
      } catch (error: any) {
        toast.error(
          error.response?.data?.error || 'An error occurred while fetching product details.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  // Handle quantity change
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size.');
      return;
    }

    if (!product) {
      toast.error('Product information is not available.');
      return;
    }

    const cartItem = {
      productId: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.image,
      sizeId: selectedSize,
      sizeName: product.product_sizes.find((size) => size.id === selectedSize)?.name,
      quantity: quantity,
    };

    // Get existing cart from localStorage
    const existingCart = localStorage.getItem('cart');
    let cart = existingCart ? JSON.parse(existingCart) : [];

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(
      (item: any) =>
        item.productId === cartItem.productId && item.sizeId === cartItem.sizeId
    );

    if (existingItemIndex >= 0) {
      // Update quantity
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.push(cartItem);
    }

    // Save back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success('Product added to cart.');
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

  // Extract sizes from product data
  const sizes = product.product_sizes; // Array of Size objects

  return (
    <div className="text-white bg-black">
      {/* Main Cart Content */}
      <div className="flex flex-col gap-10 p-4 bg-black lg:flex-row lg:gap-52 lg:p-0">
        {/* Product Images Section */}
        <div className="flex flex-col w-full p-6 lg:ml-28 lg:w-1/2 lg:flex-row">
          <div className="flex flex-row w-full space-x-2 lg:w-1/5 lg:flex-col lg:space-x-0 lg:space-y-2">
            {/* Thumbnails */}
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img.image}
                alt={`Thumbnail ${idx + 1}`}
                className="flex-shrink-0 object-cover w-16 h-16 border border-gray-700 rounded-md cursor-pointer hover:opacity-80"
                onClick={() => setMainImage(img.image)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full mt-4 lg:ml-4 lg:mt-0 lg:w-4/5">
            <img
              src={mainImage}
              alt={product.title}
              className="object-cover w-full h-auto rounded-lg"
            />

            {/* Badge */}
            <div className="absolute px-2 py-1 text-sm text-black bg-white rounded-md shadow-md left-2 top-2">
              Highly Rated
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="w-full p-6 space-y-6 lg:mr-28 lg:w-1/2">
          {/* Price and Additional Thumbnails */}
          <div>
            <h1 className="mb-2 text-2xl font-bold">
              ${parseFloat(product.price).toFixed(2)}
            </h1>
            <div className="flex flex-wrap gap-2">
              {/* Additional Thumbnails */}
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.image}
                  alt={`Additional Thumbnail ${idx + 1}`}
                  className="object-cover w-16 h-16 border border-gray-700 rounded-md cursor-pointer hover:opacity-80"
                  onClick={() => setMainImage(img.image)}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Select Size</h2>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
              {sizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`rounded border border-gray-700 px-4 py-2 ${
                    selectedSize === size.id
                      ? 'bg-white font-bold text-black'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {size.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Input */}
          <div>
            <h2 className="mb-4 text-lg font-semibold">Quantity</h2>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-20 text-center text-white bg-black border border-gray-700 rounded"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button className="w-full py-4 font-bold text-black bg-white rounded hover:bg-gray-200">
              Learn More
            </button>
            <button
              className="w-full rounded-full bg-[#D87D4A] py-4 font-bold hover:bg-[#e08a55]"
              onClick={handleAddToCart}
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
              <p>Style: {product.id}</p>
              <p>Color: {product.color}</p>
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
      {/* Keep the existing design and elements here */}
    </div>
  );
};

export default Customize;
