'use client'

import HeaderResponsive from '@/components/HeaderResponsive'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  DocumentData
} from 'firebase/firestore'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<DocumentData[]>([])
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

useEffect(() => {
  const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
    if (!u) {
      router.push('/login')
      return
    }

    console.log('👤 Connected user:', u.email)
    setUser(u)

    const ordersRef = collection(db, 'orders')

    const q =
      u.email === 'wassimzguerguerr@gmail.com'
        ? query(ordersRef, orderBy('createdAt', 'desc'))
        : query(
            ordersRef,
            where('email', '==', u.email),
            orderBy('createdAt', 'desc')
          )

    const unsubscribeSnapshot = onSnapshot(
      q,
      (snapshot) => {
        console.log('📦 Orders found:', snapshot.size)
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setOrders(data)
      },
      (error) => {
        console.error('🔥 Error loading orders:', error.message)
      }
    )

    return () => unsubscribeSnapshot()
  })

  return () => unsubscribeAuth()
}, [router])



  if (!user) return null

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <HeaderResponsive />
      <main className="flex-grow max-w-7xl mx-auto py-10 px-4">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl font-semibold text-gray-900">My Orders</h1>
              <p className="text-sm text-gray-500">A list of all your placed orders and their status.</p>
            </div>
          </div>
          <div className="overflow-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Platform</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Paid</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id} className="text-sm">
                    <td className="px-4 py-2 whitespace-nowrap">{order.createdAt?.toDate?.().toLocaleDateString() || '-'}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{order.firstName} {order.lastName}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{order.platform}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{order.totalPrice}$</td>
                    <td className="px-4 py-2 whitespace-nowrap">{order.paymentType}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{order.deliveryAddress}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{order.phone}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{order.email}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {user.email === 'wassimzguerguerr@gmail.com' ? (
                        <select
                          className="border rounded px-2 py-1"
                          value={order.etatOrder}
                          onChange={(e) => {
                            const newValue = e.target.value
                            setOrders((prev) =>
                              prev.map((o) =>
                                o.id === order.id ? { ...o, etatOrder: newValue } : o
                              )
                            )
                          }}
                        >
                          <option value="new">new</option>
                          <option value="on-process">on-process</option>
                          <option value="delivered">delivered</option>
                        </select>
                      ) : (
                        <span>{order.etatOrder}</span>
                      )}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {user.email === 'wassimzguerguerr@gmail.com' ? (
                        <select
                          className="border rounded px-2 py-1"
                          value={order.etatPayment}
                          onChange={(e) => {
                            const newValue = e.target.value
                            setOrders((prev) =>
                              prev.map((o) =>
                                o.id === order.id ? { ...o, etatPayment: newValue } : o
                              )
                            )
                          }}
                        >
                          <option value="no-pay">no-pay</option>
                          <option value="50%">50%</option>
                          <option value="100%">100%</option>
                        </select>
                      ) : (
                        <span>{order.etatPayment}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
