// 'use client'

import {
  ShoppingBagIcon,
  LinkIcon,
  BanknotesIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Wide Platform Support',
    description:
      'Choose from popular global platforms like Shein, Zalando, Temu, or Lazada and add your desired products to the cart',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Secure Payment Options',
    description:
      'Once done, copy the shopping cart link. This link helps us know what you want to order. Then paste the link into our order form and provide full contact details.',
    icon: LinkIcon,
  },
  {
    name: 'Real-Time Support',
    description:
      'Make a down payment via Post, RIP, or cash. We’ll confirm your order within 24 hours.',
    icon: BanknotesIcon,
  },
  {
    name: 'Fast Delivery',
    description:
      'Your products are delivered to Tunisia within 10–15 days, directly to your home or pickup station.',
    icon: TruckIcon,
  },
]

export default function HeroOfficial() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-white">
      {/* Gradient Background Top */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72rem]"
        />
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-36">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Your Gateway to Global Shopping
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Shop from your favorite international stores like Shein, Zalando, Temu, and Lazada. We handle the process, the payment, and the delivery. You just pick what you love.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Order in a Few Simple Steps
          </p>
          <p className="mt-6 text-lg text-gray-600">
            With Tunilink, placing your international orders has never been easier. Just follow these 4 simple steps to complete your request
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 flex items-center justify-center gap-x-6">
          <a
            href="/place-order"
            className="rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
          >
            Place Your Order Now
          </a>
        </div>
      </div>

      {/* Gradient Background Bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72rem]"
        />
      </div>
    </div>
  );
}
