'use client'

import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function OrderRow({ order, isAdmin }: any) {
  const [etatOrder, setEtatOrder] = useState(order.etatOrder || 'new')
  const [etatPayment, setEtatPayment] = useState(order.etatPayment || 'no-pay')

  const updateField = async (field: string, value: string) => {
    const orderRef = doc(db, 'orders', order.id)
    await updateDoc(orderRef, { [field]: value })
  }

  return (
    <tr className="border-b text-xs sm:text-sm hover:bg-gray-50 transition-all duration-150">
      <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">
        {order.createdAt?.toDate?.().toLocaleDateString() || '-'}
      </td>
      <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-900 font-medium">
        {order.firstName} {order.lastName}
      </td>
      <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">{order.platform}</td>
      <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">{order.totalPrice}$</td>
      <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">{order.paymentType}</td>
      <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700 max-w-[150px] truncate">
        {order.deliveryAddress}
      </td>
      <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">{order.phone}</td>
      <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">{order.email}</td>

      <td className="px-2 sm:px-4 py-2 whitespace-nowrap">
        {isAdmin ? (
          <select
            value={etatOrder}
            onChange={(e) => {
              setEtatOrder(e.target.value)
              updateField('etatOrder', e.target.value)
            }}
            className="border rounded px-1 py-1 sm:px-2 bg-white text-xs sm:text-sm"
          >
            <option value="new">New</option>
            <option value="on-process">On Process</option>
            <option value="delivered">Delivered</option>
          </select>
        ) : (
          <span className="text-gray-700 capitalize">{etatOrder}</span>
        )}
      </td>

      <td className="px-2 sm:px-4 py-2 whitespace-nowrap">
        {isAdmin ? (
          <select
            value={etatPayment}
            onChange={(e) => {
              setEtatPayment(e.target.value)
              updateField('etatPayment', e.target.value)
            }}
            className="border rounded px-1 py-1 sm:px-2 bg-white text-xs sm:text-sm"
          >
            <option value="no-pay">No Pay</option>
            <option value="50%">50%</option>
            <option value="100%">100%</option>
          </select>
        ) : (
          <span className="text-gray-700">{etatPayment}</span>
        )}
      </td>
    </tr>
  )
}
