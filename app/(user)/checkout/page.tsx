import React from 'react';

const Checkout = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black p-4 sm:flex-row sm:gap-24 sm:p-8">
      {/* Left Section: Checkout Form */}
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg sm:p-16">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">CHECKOUT</h2>

        {/* Shipping Info */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-[#D87D4A]">SHIPPING INFO</h3>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name*
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Phone Number*
              </label>
              <input
                type="text"
                placeholder="+250"
                className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-600">
              Address*
            </label>
            <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <select className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]">
                <option>Select Country</option>
                {/* Add more options here */}
              </select>
              <select className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]">
                <option>Select City</option>
                {/* Add more options here */}
              </select>
              <input
                type="text"
                placeholder="Enter Full Address"
                className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              />
            </div>
          </div>
        </div>

        {/* Billing Details */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-[#D87D4A]">
            BILLING DETAILS
          </h3>
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:gap-4">
            <label className="flex items-center gap-2 text-gray-500">
              <input
                type="radio"
                name="payment"
                value="Debit Card"
                className="h-4 w-4 text-[#D87D4A] focus:ring-[#D87D4A]"
              />
              Debit Card
            </label>
            <label className="flex items-center gap-2 text-gray-500">
              <input
                type="radio"
                name="payment"
                value="Mobile Money"
                className="h-4 w-4 text-[#D87D4A] focus:ring-[#D87D4A]"
              />
              Mobile Money
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="Enter cardholder name"
                className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Card Number
              </label>
              <input
                type="text"
                placeholder="4111 1111 1111"
                className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Expiry Date
              </label>
              <input
                type="text"
                placeholder="MM/YY"
                className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                CVV
              </label>
              <input
                type="text"
                placeholder="123"
                className="mt-1 w-full rounded border border-gray-300 p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#D87D4A]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Summary */}
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg sm:ml-8 sm:p-16">
        <div className="flex flex-col items-center">
          <img
            src="/products/product-5.png"
            alt="Kimono"
            className="h-48 w-full object-contain sm:h-60"
          />
        </div>
        <div className="mt-6 space-y-2 text-gray-800">
          <p className="flex justify-between">
            <span className="text-gray-500">Number of Kimonos</span>
            <span>2</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Total</span>
            <span>$5,396</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span>$50</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-500">VAT (Included)</span>
            <span>$1,079</span>
          </p>
          <p className="flex justify-between font-semibold text-[#D87D4A]">
            <span>Grand Total</span>
            <span>$5,446</span>
          </p>
        </div>
        <button className="mt-6 w-full rounded bg-[#D87D4A] py-3 text-white hover:bg-[#bf6a39]">
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default Checkout;
