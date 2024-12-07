import React from 'react';

const Track = () => {
  return (
    <div className="min-h-screen p-6 text-white bg-black sm:p-12 lg:p-32">
      {/* Back Button */}
      <button className="mb-4 sm:mb-6 font-bold text-[#D87D4A] flex items-center">
        <span className="mr-2">🔙</span> BACK
      </button>

      {/* Title */}
      <h2 className="mb-6 sm:mb-8 text-2xl sm:text-xl font-semibold text-center text-[#D87D4A]">
        ORDER DETAILS
      </h2>

      {/* Order Timeline */}
      <div className="flex flex-col items-center justify-between mb-8 sm:flex-row sm:mb-12">
        {/* Step: Order Placed */}
        <div className="flex flex-col items-center mb-4 sm:mb-0 sm:w-1/5">
          <div className="text-sm font-bold text-green-500 sm:text-base">Order Placed</div>
          <div className="w-4 h-4 mt-2 bg-green-500 rounded-full"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">Wed, 11th Jan</div>
        </div>

        {/* Step: Order Confirmed */}
        <div className="flex flex-col items-center mb-4 sm:mb-0 sm:w-1/5">
          <div className="text-sm font-bold text-green-500 sm:text-base">Order Confirmed</div>
          <div className="w-4 h-4 mt-2 bg-green-500 rounded-full"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">Wed, 11th Jan</div>
        </div>

        {/* Step: Shipped */}
        <div className="flex flex-col items-center mb-4 sm:mb-0 sm:w-1/5">
          <div className="text-sm font-bold text-gray-200 sm:text-base">Shipped</div>
          <div className="w-4 h-4 mt-2 bg-gray-200 rounded-full"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">Wed, 11th Jan</div>
        </div>

        {/* Step: Out for Delivery */}
        <div className="flex flex-col items-center mb-4 sm:mb-0 sm:w-1/5">
          <div className="text-sm font-bold text-gray-200 sm:text-base">Out For Delivery</div>
          <div className="w-4 h-4 mt-2 bg-gray-200 rounded-full"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">Wed, 11th Jan</div>
        </div>

        {/* Step: Delivered */}
        <div className="flex flex-col items-center sm:w-1/5">
          <div className="text-sm font-bold text-gray-200 sm:text-base">Delivered</div>
          <div className="w-4 h-4 mt-2 bg-gray-200 rounded-full"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">
            Expected by, Mon 16th
          </div>
        </div>
      </div>

      {/* Horizontal Line for Progress */}
      <div className="relative w-full h-1 mb-8 bg-gray-600 sm:mb-12">
        <div
          className="absolute top-0 left-0 h-1 bg-green-500"
          style={{ width: '40%' }}
        ></div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-2">
        {/* Left Side: Payment, Delivery, Current Location */}
        <div>
          {/* Payment Details */}
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-bold sm:text-xl">PAYMENT</h3>
            <div className="flex flex-wrap items-center">
              <div className="px-3 py-1 mb-2 mr-3 text-white bg-blue-500 rounded sm:mb-0">VISA</div>
              <span className="text-sm text-gray-400 sm:text-base">Visa **56</span>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-bold sm:text-xl">DELIVERY</h3>
            <p className="text-sm text-gray-400 sm:text-base">
              847 Lydesw, Bridge Apt. <br />
              174 London, UK <br />
              474-799-3919
            </p>
          </div>

          {/* Current Location */}
          <div>
            <h3 className="mb-4 text-lg font-bold sm:text-xl">CURRENT LOCATION</h3>
            <p className="text-sm text-gray-400 sm:text-base">
              KG 56 Avenue, <br />
              Kigali, Rwanda
            </p>
          </div>
        </div>

        {/* Right Side: Product Image and Summary */}
        <div>
          {/* Product Image */}
          <div className="flex justify-center mb-6">
            <img
              src="/products/product-5.png"
              alt="Kimono"
              className="object-contain w-32 h-auto sm:w-48"
            />
          </div>

          {/* Summary */}
          <div className="text-sm text-gray-400 sm:text-base">
            <div className="flex justify-between mb-2">
              <span>Number of Kimonos</span>
              <span>2</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>AMOUNT</span>
              <span>$5,396</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>SHIPPING</span>
              <span>$50</span>
            </div>
            <div className="flex justify-between mt-4 font-bold text-white">
              <span>GRAND TOTAL</span>
              <span>$5,446</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
