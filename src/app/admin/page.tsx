'use client'

import HeaderResponsive from '@/components/HeaderResponsive'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  DocumentData
} from 'firebase/firestore'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged, User } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import OrderRow from '@/components/OrderRow'

export default function AdminPage() {
  const [orders, setOrders] = useState<DocumentData[]>([])
  const [filteredOrders, setFilteredOrders] = useState<DocumentData[]>([])
  const [user, setUser] = useState<User | null>(null)
  const [search, setSearch] = useState('')

  const router = useRouter()

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (u) => {
      if (!u || u.email !== 'wassimzguerguerr@gmail.com') {
        router.push('/login')
        return
      }
      setUser(u)

      const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'))
      const unsubscribeSnapshot = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setOrders(data)
        setFilteredOrders(data)
      })

      return () => unsubscribeSnapshot()
    })

    return () => unsubscribeAuth()
  }, [router])

  useEffect(() => {
    const lowerSearch = search.toLowerCase()
    const filtered = orders.filter((order) =>
      order.firstName?.toLowerCase().includes(lowerSearch) ||
      order.lastName?.toLowerCase().includes(lowerSearch) ||
      order.email?.toLowerCase().includes(lowerSearch) ||
      order.phone?.includes(lowerSearch)
    )
    setFilteredOrders(filtered)
  }, [search, orders])

  if (!user) return null

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-100 to-white">
      <HeaderResponsive />
      <main  style={{ marginTop: '80px' }}
  className="">
        {/* ↑↑↑ أضفنا mt-8 لمسافة إضافية تحت الهيدر */}
        <div className="bg-gradient-to-r from-purple-100 to-white  shadow rounded-lg overflow-x-auto max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border-b border-gray-200">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Admin Orders</h2>
              <p className="mt-1 text-sm text-gray-600">Manage all orders placed by users.</p>
            </div>
            <div className="mt-4 sm:mt-0 w-full sm:w-auto">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name, email, phone"
                className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="table-wrapper">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-50 text-xs uppercase font-medium text-gray-500 border-b">
                <tr>
                  <th className="px-2 py-3">Date</th>
                  <th className="px-2 py-3">Name</th>
                  <th className="px-2 py-3">Platform</th>
                  <th className="px-2 py-3">Total</th>
                  <th className="px-2 py-3">Payment</th>
                  <th className="px-2 py-3">Address</th>
                  <th className="px-2 py-3">Phone</th>
                  <th className="px-2 py-3">Email</th>
                  <th className="px-2 py-3">Status</th>
                  <th className="px-2 py-3">Paid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <OrderRow key={order.id} order={order} isAdmin={true} />
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
