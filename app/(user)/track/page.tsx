import React from 'react';

const Track = () => {
  return (
    <div className="min-h-screen bg-black p-6 text-white sm:p-12 lg:p-32">
      {/* Back Button */}
      <button className="mb-4 flex items-center font-bold text-[#D87D4A] sm:mb-6">
        <span className="mr-2">🔙</span> BACK
      </button>

      {/* Title */}
      <h2 className="mb-6 text-center text-2xl font-semibold text-[#D87D4A] sm:mb-8 sm:text-xl">
        ORDER DETAILS
      </h2>

      {/* Order Timeline */}
      <div className="mb-8 flex flex-col items-center justify-between sm:mb-12 sm:flex-row">
        {/* Step: Order Placed */}
        <div className="mb-4 flex flex-col items-center sm:mb-0 sm:w-1/5">
          <div className="text-sm font-bold text-green-500 sm:text-base">
            Order Placed
          </div>
          <div className="mt-2 h-4 w-4 rounded-full bg-green-500"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">
            Wed, 11th Jan
          </div>
        </div>

        {/* Step: Order Confirmed */}
        <div className="mb-4 flex flex-col items-center sm:mb-0 sm:w-1/5">
          <div className="text-sm font-bold text-green-500 sm:text-base">
            Order Confirmed
          </div>
          <div className="mt-2 h-4 w-4 rounded-full bg-green-500"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">
            Wed, 11th Jan
          </div>
        </div>

        {/* Step: Shipped */}
        <div className="mb-4 flex flex-col items-center sm:mb-0 sm:w-1/5">
          <div className="text-sm font-bold text-gray-200 sm:text-base">
            Shipped
          </div>
          <div className="mt-2 h-4 w-4 rounded-full bg-gray-200"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">
            Wed, 11th Jan
          </div>
        </div>

        {/* Step: Out for Delivery */}
        <div className="mb-4 flex flex-col items-center sm:mb-0 sm:w-1/5">
          <div className="text-sm font-bold text-gray-200 sm:text-base">
            Out For Delivery
          </div>
          <div className="mt-2 h-4 w-4 rounded-full bg-gray-200"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">
            Wed, 11th Jan
          </div>
        </div>

        {/* Step: Delivered */}
        <div className="flex flex-col items-center sm:w-1/5">
          <div className="text-sm font-bold text-gray-200 sm:text-base">
            Delivered
          </div>
          <div className="mt-2 h-4 w-4 rounded-full bg-gray-200"></div>
          <div className="mt-2 text-xs text-gray-400 sm:text-sm">
            Expected by, Mon 16th
          </div>
        </div>
      </div>

      {/* Horizontal Line for Progress */}
      <div className="relative mb-8 h-1 w-full bg-gray-600 sm:mb-12">
        <div
          className="absolute left-0 top-0 h-1 bg-green-500"
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
              <div className="mb-2 mr-3 rounded bg-blue-500 px-3 py-1 text-white sm:mb-0">
                VISA
              </div>
              <span className="text-sm text-gray-400 sm:text-base">
                Visa **56
              </span>
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
            <h3 className="mb-4 text-lg font-bold sm:text-xl">
              CURRENT LOCATION
            </h3>
            <p className="text-sm text-gray-400 sm:text-base">
              KG 56 Avenue, <br />
              Kigali, Rwanda
            </p>
          </div>
        </div>

        {/* Right Side: Product Image and Summary */}
        <div>
          {/* Product Image */}
          <div className="mb-6 flex justify-center">
            <img
              src="/products/product-5.png"
              alt="Kimono"
              className="h-auto w-32 object-contain sm:w-48"
            />
          </div>

          {/* Summary */}
          <div className="text-sm text-gray-400 sm:text-base">
            <div className="mb-2 flex justify-between">
              <span>Number of Kimonos</span>
              <span>2</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>AMOUNT</span>
              <span>$5,396</span>
            </div>
            <div className="mb-2 flex justify-between">
              <span>SHIPPING</span>
              <span>$50</span>
            </div>
            <div className="mt-4 flex justify-between font-bold text-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track;
