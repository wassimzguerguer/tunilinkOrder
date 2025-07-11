import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Select Your Store',
    description:
      'Choose from popular global platforms like Shein, Zalando, Temu, or Lazada and add your desired products to the cart.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Copy Your Cart Link',
    description:
      'Once done, copy the shopping cart link. This link helps us know what you want to order.',
    icon: LockClosedIcon,
  },
  {
    name: 'Submit the Order Form',
    description:
      'Paste the link into our order form and provide full contact details. Accuracy ensures smooth delivery.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Confirm & Pay 50%',
    description:
      'Make a down payment via Post, RIP, or cash. We’ll confirm your order within 24 hours.',
    icon: FingerPrintIcon,
  },
]

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24 sm:py-32 relative isolate">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">How It Works</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Order in a Few Simple Steps
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            With Tunilink, placing your international orders has never been easier. Just follow these 4 simple steps to complete your request.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="size-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
