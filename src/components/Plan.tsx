import { CheckIcon } from '@heroicons/react/16/solid';

const tiers = [
  {
    name: 'START',
    id: 'tier-hobby',
    priceMonthly: '$500',
    description: '2 хафта',
    features: [
      '1 МОДУЛЬ',
      '2 МОДУЛЬ',
      '🎉 БОНУСЛАР: 3 000 000 сўмлик муолажалар. Юқорида санаб ўтилган муолажалар 2-5 марта.',
    ],
    featured: false,
  },

  {
    name: 'BASIC',
    id: 'tier-hobby',
    priceMonthly: '$800',
    description: '4 хафта',
    features: ['1 МОДУЛЬ', '2 МОДУЛЬ', '3 МОДУЛЬ', 'Сертификат'],
    featured: false,
  },

  {
    name: 'ADVANCED',
    id: 'tier-hobby',
    priceMonthly: '$1500',
    description: '7 хафта + 2 ой амалиёт',
    features: [
      '1 МОДУЛЬ',
      '2 МОДУЛЬ',
      '3 МОДУЛЬ',
      '4 МОДУЛЬ',
      '5 МОДУЛЬ',
      'Сертификат',
    ],
    featured: false,
  },

  {
    name: 'PROFESSIONAL',
    id: 'tier',
    priceMonthly: '$2000',
    description: '12 хафта + 3 ой амалиёт',
    features: [
      '1 МОДУЛЬ',
      '2 МОДУЛЬ',
      '3 МОДУЛЬ',
      '4 МОДУЛЬ',
      '5 МОДУЛЬ',
      '6 МОДУЛЬ',
      '7 МОДУЛЬ',
      '8 МОДУЛЬ',
      'Сертификат',
    ],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className='relative isolate bg-white px-6 pb-24  lg:px-8'>
      <div
        aria-hidden='true'
        className='absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl'
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[rgb(255,10,10)] to-[#fd7302] opacity-30'
        />
      </div>
      <div className='mx-auto max-w-4xl text-center'>
        <p className='mt-2 text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl'>
          <span className='text-orange-500 font-semibold'>КУРС</span> НАРХИ
        </p>
      </div>

      <div className='mx-auto mt-16 gap-6 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2'>
        {tiers.map((tier, tierIdx) => (
          <div
            data-aos='fade-up'
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative bg-gray-900 mt-5 shadow-2xl'
                : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl' : '',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? 'text-orange-400' : 'text-orange-600',
                'text-base/7 font-semibold'
              )}
            >
              {tier.name}
            </h3>
            <p className='mt-4 flex items-baseline gap-x-2'>
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight'
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? 'text-gray-400' : 'text-gray-500',
                  'text-base'
                )}
              ></span>
            </p>
            <p
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-6 text-base/7'
              )}
            >
              {tier.description}
            </p>
            <ul
              role='list'
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10'
              )}
            >
              {tier.features.map((feature) => (
                <a
                  href={'#' + feature.charAt(0)}
                  key={feature}
                  className='flex gap-x-3 hover:text-orange-500'
                >
                  <CheckIcon
                    aria-hidden='true'
                    className={classNames(
                      tier.featured ? 'text-orange-400' : 'text-orange-600',
                      'h-6 w-5 flex-none'
                    )}
                  />
                  {feature}
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
