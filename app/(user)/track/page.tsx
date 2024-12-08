import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen bg-black p-32 text-white">
      {/* Back Button */}
      <button className="mb-6 font-bold text-orange-500">
        <span className="mr-2">🔙</span> BACK
      </button>

      {/* Title */}
      <h2 className="mb-8 text-center text-xl font-semibold text-orange-500">
        ORDER DETAILS
      </h2>

      {/* Order Timeline */}
      <div className="mb-12 flex items-center justify-between">
        {/* Step: Order Placed */}
        <div className="flex flex-col items-center">
          <div className="font-bold text-green-500">Order Placed</div>
          <div className="mt-2 h-4 w-4 rounded-full bg-green-500"></div>
          <div className="mt-2 text-sm text-gray-400">Wed, 11th Jan</div>
        </div>

        {/* Step: Order Confirmed */}
        <div className="flex flex-col items-center">
          <div className="font-bold text-green-500">Order Confirmed</div>
          <div className="mt-2 h-4 w-4 rounded-full bg-green-500"></div>
          <div className="mt-2 text-sm text-gray-400">Wed, 11th Jan</div>
        </div>

        {/* Step: Shipped */}
        <div className="flex flex-col items-center">
          <div className="font-bold text-gray-200">Shipped</div>
          <div className="mt-2 h-4 w-4 rounded-full bg-gray-200"></div>
          <div className="mt-2 text-sm text-gray-400">Wed, 11th Jan</div>
        </div>

        {/* Step: Out for Delivery */}
        <div className="flex flex-col items-center">
          <div className="font-bold text-gray-200">Out For Delivery</div>
          <div className="mt-2 h-4 w-4 rounded-full bg-gray-200"></div>
          <div className="mt-2 text-sm text-gray-400">Wed, 11th Jan</div>
        </div>

        {/* Step: Delivered */}
        <div className="flex flex-col items-center">
          <div className="font-bold text-gray-200">Delivered</div>
          <div className="mt-2 h-4 w-4 rounded-full bg-gray-200"></div>
          <div className="mt-2 text-sm text-gray-400">
            Expected by, Mon 16th
          </div>
        </div>
      </div>

      {/* Horizontal Line for Progress */}
      <div className="relative mb-12 h-[2px] w-full bg-gray-600">
        <div
          className="absolute left-0 top-0 h-[2px] bg-green-500"
          style={{ width: '40%' }}
        ></div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Left Side: Payment, Delivery, Current Location */}
        <div>
          {/* Payment Details */}
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-bold">PAYMENT</h3>
            <div className="flex items-center">
              <div className="mr-3 rounded bg-blue-500 px-3 py-1 text-white">
                VISA
              </div>
              <span className="text-gray-400">Visa **56</span>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-bold">DELIVERY</h3>
            <p className="text-gray-400">
              Address <br />
              847 Lydesw, Bridge Apt. <br />
              174 London, UK <br />
              474-799-3919
            </p>
          </div>

          {/* Current Location */}
          <div>
            <h3 className="mb-4 text-lg font-bold">CURRENT LOCATION</h3>
            <p className="text-gray-400">
              Address <br />
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
              className="h-auto w-48 object-contain"
            />
          </div>

          {/* Summary */}
          <div className="text-gray-400">
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
            <div className="mt-4 flex justify-between font-bold text-white">
              <span>GRAND TOTAL</span>
              <span>$5,446</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
