'use client'
import { useState } from 'react'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'

export default function OrderRow({ order, isAdmin }: any) {
  const [etatOrder, setEtatOrder] = useState(order.etatOrder)
  const [etatPayment, setEtatPayment] = useState(order.etatPayment)

  const updateField = async (field: string, value: string) => {
    const orderRef = doc(db, 'orders', order.id)
    await updateDoc(orderRef, { [field]: value })
  }

  return (
    <tr className="border-b text-sm text-center">
      <td>{order.createdAt?.toDate?.().toLocaleDateString() || '-'}</td>
      <td>{order.firstName} {order.lastName}</td>
      <td>{order.platform}</td>
      <td>{order.totalPrice}$</td>
      <td>{order.paymentType}</td>
      <td>{order.deliveryAddress}</td>
      <td>{order.phone}</td>
      <td>{order.email}</td>
      <td>
        {isAdmin ? (
          <select
            value={etatOrder}
            onChange={(e) => {
              setEtatOrder(e.target.value)
              updateField('etatOrder', e.target.value)
            }}
            className="border rounded px-2 py-1"
          >
            <option value="new">new</option>
            <option value="on-process">on-process</option>
            <option value="delivered">delivered</option>
          </select>
        ) : (
          <span>{etatOrder}</span>
        )}
      </td>
      <td>
        {isAdmin ? (
          <select
            value={etatPayment}
            onChange={(e) => {
              setEtatPayment(e.target.value)
              updateField('etatPayment', e.target.value)
            }}
            className="border rounded px-2 py-1"
          >
            <option value="no-pay">no-pay</option>
            <option value="50%">50%</option>
            <option value="100%">100%</option>
          </select>
        ) : (
          <span>{etatPayment}</span>
        )}
      </td>
    </tr>
  )
}
