'use client'

import HeaderResponsive from '@/components/HeaderResponsive'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export default function PlaceOrderPage() {
  const [form, setForm] = useState({
    url: '',
    numberOfProducts: '',
    totalPrice: '',
    platform: '',
    deliveryAddress: '',
    paymentType: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'orders'), {
        ...form,
        createdAt: serverTimestamp(),
        etatOrder: 'new',
        etatPayment: 'no-pay',
      })
      alert('✅ Order submitted successfully!')
      setForm({
        url: '',
        numberOfProducts: '',
        totalPrice: '',
        platform: '',
        deliveryAddress: '',
        paymentType: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
      })
    } catch (err) {
      console.error(err)
      alert('❌ Error submitting order. Please try again.')
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <HeaderResponsive />
      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Place Your Order</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6">

          <div>
            <label className="block mb-2 font-bold text-gray-800">Cart URL</label>
            <input
              name="url"
              onChange={handleChange}
              value={form.url}
              type="text"
              placeholder="https://example.com/cart"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-bold text-gray-800">Number of Products</label>
              <input
                name="numberOfProducts"
                onChange={handleChange}
                value={form.numberOfProducts}
                type="number"
                placeholder="3"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-800">Total Price (USD)</label>
              <input
                name="totalPrice"
                onChange={handleChange}
                value={form.totalPrice}
                type="number"
                placeholder="59.99"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-bold text-gray-800">Platform</label>
            <select
              name="platform"
              onChange={handleChange}
              value={form.platform}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Platform</option>
              <option value="Shein">Shein</option>
              <option value="Zalando">Zalando</option>
              <option value="Lazada">Lazada</option>
              <option value="Temu">Temu</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-bold text-gray-800">Delivery Address</label>
            <input
              name="deliveryAddress"
              onChange={handleChange}
              value={form.deliveryAddress}
              type="text"
              placeholder="123 Street, City"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-bold text-gray-800">Payment Type</label>
            <select
              name="paymentType"
              onChange={handleChange}
              value={form.paymentType}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Payment</option>
              <option value="Cash">Cash</option>
              <option value="Post">Post</option>
              <option value="RIP">RIP</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-bold text-gray-800">First Name</label>
              <input
                name="firstName"
                onChange={handleChange}
                value={form.firstName}
                type="text"
                placeholder="Mohamed"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block mb-2 font-bold text-gray-800">Last Name</label>
              <input
                name="lastName"
                onChange={handleChange}
                value={form.lastName}
                type="text"
                placeholder="Ali"
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-bold text-gray-800">Phone Number</label>
            <input
              name="phone"
              onChange={handleChange}
              value={form.phone}
              type="tel"
              placeholder="+216 98 123 456"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-bold text-gray-800">Email Address</label>
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              type="email"
              placeholder="your@email.com"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Submit Order
          </button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
