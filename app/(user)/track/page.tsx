    import React from 'react'

    const page = () => {
    return (
        <div className="bg-black text-white min-h-screen p-32">
      {/* Back Button */}
      <button className="text-orange-500 font-bold mb-6">
        <span className="mr-2">🔙</span> BACK
      </button>

      {/* Title */}
      <h2 className="text-center text-orange-500 text-xl font-semibold mb-8">
        ORDER DETAILS
      </h2>

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
        <div className="absolute top-0 left-0 h-[2px] bg-green-500" style={{ width: '40%' }}></div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Side: Payment, Delivery, Current Location */}
        <div>
          {/* Payment Details */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4">PAYMENT</h3>
            <div className="flex items-center">
              <div className="bg-blue-500 text-white px-3 py-1 rounded mr-3">VISA</div>
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
          {/* Product Image */}
          <div className="flex justify-center mb-6">
            <img
              src="/products/product-5.png"
              alt="Kimono"
              className="w-48 h-auto object-contain"
            />
          </div>

          {/* Summary */}
          <div className="text-gray-400">
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
            <div className="flex justify-between text-white font-bold mt-4">
              <span>GRAND TOTAL</span>
              <span>$5,446</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
    }

    export default page