    import React from 'react'

    const page = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black  gap-24">
      {/* Left Section: Checkout Form */}
      <div className="w-full max-w-4xl rounded-lg bg-white p-16 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">CHECKOUT</h2>
        
        {/* Shipping Info */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-orange-500">SHIPPING INFO</h3>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600">Full Name*</label>
              <input
                type="text" 
                placeholder="Enter Full Name"
                className="w-full rounded border border-gray-300 p-3  text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Phone Number*</label>
              <input
                type="text"
                placeholder="+250"
                className="w-full  rounded border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-600">Address*</label>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <select className="w-full rounded border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-orange-500">
                <option>Select Country</option>
                {/* Add more options here */}
              </select>
              <select className="w-full rounded border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-orange-500">
                <option>Select City</option>
                {/* Add more options here */}
              </select>
              <input
                type="text"
                placeholder="Enter Full Address"
                className="w-full rounded border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>
        
        {/* Billing Details */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-orange-500">BILLING DETAILS</h3>
          <div className="mb-4 flex items-center gap-4">
            <label className="flex items-center gap-2 text-gray-500">
              <input
                type="radio"
                name="payment"
                value="Debit Card"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500"
              />
              Debit Card
            </label>
            <label className="flex items-center gap-2 text-gray-500">
              <input
                type="radio"
                name="payment"
                value="Mobile Money"
                className="h-4 w-4 text-orange-500 focus:ring-orange-500"
              />
              Mobile Money
            </label>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-600">Cardholder Name</label>
              <input
                type="text"
                placeholder="Enter cardholder name"
                className="w-full rounded border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Card Number</label>
              <input
                type="text"
                placeholder="4111 1111 1111"
                className="w-full rounded border border-gray-300 p-3 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full rounded border border-gray-300 p-2 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full rounded border border-gray-300 p-2 text-gray-800 focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Section: Summary */}
      <div className="ml-8 w-full max-w-sm rounded-lg bg-white p-16 shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="/products/product-5.png"
            alt="Kimono"
            className="h-48 w-auto object-contain"
          />
        </div>
        <div className="mt-4 space-y-2 text-gray-800">
          <p className="flex justify-between">
            <span className='text-gray-500'>Number of Kimonos</span>
            <span>2</span>
          </p>
          <p className="flex justify-between">
            <span className='text-gray-500'>Total</span>
            <span>$5,396</span>
          </p>
          <p className="flex justify-between">
            <span className='text-gray-500'>Shipping</span>
            <span>$50</span>
          </p>
          <p className="flex justify-between">
            <span className='text-gray-500'>VAT (Included)</span>
            <span>$1,079</span>
          </p>
          <p className="flex justify-between font-semibold text-orange-500">
            <span>Grand Total</span>
            <span>$5,446</span>
          </p>
        </div>
        <button className="mt-6 w-full rounded bg-orange-500 py-3 text-white hover:bg-orange-600">
          CONTINUE
        </button>
      </div>
    </div>
    )
    }

    export default page