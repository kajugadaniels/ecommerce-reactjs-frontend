import React from 'react';

const page = () => {
  return (
    <div className="bg-black text-white min-h-screen p-32">
      {/* Back Button */}
      <button className="text-orange-500 font-bold mb-6">
        <span className="mr-2">🔙</span> BACK
      </button>

      {/* Title and Buttons */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-center text-orange-500 text-xl font-semibold">
          ORDER DETAILS
        </h2>
        <div className="flex space-x-4">
          {/* Invoice Button */}
          <button className="bg-orange-500 text-white px-4 py-2 rounded font-bold">
            Invoice
          </button>
          {/* Track Order Button */}
          <button className="bg-green-500 text-white px-4 py-2 rounded font-bold">
            Track Order
          </button>
        </div>
      </div>

      {/* Order Header */}
      <div className="bg-gray-800 p-6 rounded-lg mb-12">
        <div className="flex justify-between items-center">
          <span>Order ID: <span className="font-bold">3354654654526</span></span>
          <span>Order Date: <span className="font-bold">Nov 19, 2024</span></span>
        </div>
        <div className="text-right">
          Estimated Delivery: <span className="text-green-500 font-bold">Dec 16, 2024</span>
        </div>
      </div>

      {/* Order Timeline */}
      <div className="flex items-center justify-between mb-12">
        {/* Step: Order Placed */}
        <div className="flex flex-col items-center">
          <div className="text-green-500 font-bold">Order Placed</div>
          <div className="w-4 h-4 rounded-full bg-green-500 mt-2"></div>
          <div className="text-gray-400 text-sm mt-2">Wed, 11th Jan</div>
        </div>

        {/* Step: Order Confirmed */}
        <div className="flex flex-col items-center">
          <div className="text-green-500 font-bold">Order Confirmed</div>
          <div className="w-4 h-4 rounded-full bg-green-500 mt-2"></div>
          <div className="text-gray-400 text-sm mt-2">Wed, 11th Jan</div>
        </div>

        {/* Step: Shipped */}
        <div className="flex flex-col items-center">
          <div className="text-gray-200 font-bold">Shipped</div>
          <div className="w-4 h-4 rounded-full bg-gray-200 mt-2"></div>
          <div className="text-gray-400 text-sm mt-2">Wed, 11th Jan</div>
        </div>

        {/* Step: Out for Delivery */}
        <div className="flex flex-col items-center">
          <div className="text-gray-200 font-bold">Out For Delivery</div>
          <div className="w-4 h-4 rounded-full bg-gray-200 mt-2"></div>
          <div className="text-gray-400 text-sm mt-2">Wed, 11th Jan</div>
        </div>

        {/* Step: Delivered */}
        <div className="flex flex-col items-center">
          <div className="text-gray-200 font-bold">Delivered</div>
          <div className="w-4 h-4 rounded-full bg-gray-200 mt-2"></div>
          <div className="text-gray-400 text-sm mt-2">
            Expected by, Mon 16th
          </div>
        </div>
      </div>

      {/* Horizontal Line for Progress */}
      <div className="w-full h-[2px] bg-gray-600 relative mb-12">
        <div
          className="absolute top-0 left-0 h-[2px] bg-green-500"
          style={{ width: '40%' }}
        ></div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Payment, Delivery, Current Location */}
        <div>
          {/* Payment Details */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">PAYMENT</h3>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white px-3 py-1 rounded mr-3">
                VISA
              </div>
              <span className="text-gray-400">Visa **56</span>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">DELIVERY</h3>
            <p className="text-gray-400">
              Address <br />
              847 Lydesw, Bridge Apt. <br />
              174 London, UK <br />
              474-799-3919
            </p>
          </div>

          {/* Current Location */}
          <div>
            <h3 className="text-lg font-bold mb-4">CURRENT LOCATION</h3>
            <p className="text-gray-400">
              Address <br />
              KG 56 Avenue, <br />
              Kigali, Rwanda
            </p>
          </div>
        </div>

        {/* Right Side: Product Image and Summary */}
        <div>
          {/* Product List */}
          <div className="mb-6">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-600 pb-4 mb-4"
              >
                <img
                  src="/products/product-5.png"
                  alt="Kimono"
                  className="w-16 h-auto object-contain"
                />
                <div>
                  <div className="font-bold">Kimono</div>
                  <div className="text-gray-400">Size: S</div>
                </div>
                <div className="text-gray-400">$2598</div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="text-gray-400">
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>-$554</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax</span>
              <span>$223</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between text-white font-bold mt-4">
              <span>Grand Total</span>
              <span>$0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-12">
        <h3 className="text-lg font-bold mb-4">Need Help?</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-orange-500 underline">
            Order Issues
          </a>
          <a href="#" className="text-orange-500 underline">
            Delivery Info
          </a>
          <a href="#" className="text-orange-500 underline">
            Returns
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
