import { CheckIcon } from '@heroicons/react/16/solid';

const tiers = [
  {
    name: 'START',
    id: 'tier-hobby',
    priceMonthly: '$500',
    description: '2 хафта',
    features: [
      '1 МОДУЛЬ (ссылкали тепага)',
      '2 МОДУЛЬ (ссылкали тепага)',
      '(П см.) БОНУСЛАР 3 000 000 сумлик муолажалар: Юкоридаги санаб утилган муолажалар 2-5 маротаба. ',
    ],
    featured: false,
  },

  {
    name: 'BASIC',
    id: 'tier-hobby',
    priceMonthly: '$800',
    description: '2 хафта',
    features: [
      '1 МОДУЛЬ (ссылкали тепага)',
      '2 МОДУЛЬ (ссылкали тепага)',
      '3 МОДУЛЬ (ссылкали тепага)',
      'Сертификат',
    ],
    featured: false,
  },

  {
    name: 'ADVANCED',
    id: 'tier-hobby',
    priceMonthly: '$1500',
    description: '',
    features: [
      '1 МОДУЛЬ (ссылкали тепага)',
      '2 МОДУЛЬ (ссылкали тепага)',
      '3 МОДУЛЬ (ссылкали тепага)',
      '4 МОДУЛЬ (ссылкали тепага)',
      '5 МОДУЛЬ (ссылкали тепага)',
      'Сертификат',
    ],
    featured: false,
  },

  {
    name: 'PROFESSIONAL',
    id: 'tier',
    priceMonthly: '$2000',
    description: '',
    features: [
      '1 МОДУЛЬ (ссылкали тепага)',
      '2 МОДУЛЬ (ссылкали тепага)',
      '3 МОДУЛЬ (ссылкали тепага)',
      '4 МОДУЛЬ (ссылкали тепага)',
      '5 МОДУЛЬ (ссылкали тепага)',
      '6 МОДУЛЬ (ссылкали тепага)',
      '7 МОДУЛЬ (ссылкали тепага)',
      '8 МОДУЛЬ (ссылкали тепага)',
      'Сертификат',
      '(П см.) БОНУСЛАР $700-лик муолажалар: Ботокс, Биоревитализация',
    ],
    featured: true,
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className='relative isolate bg-white px-6 py-24  lg:px-8'>
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
          КУРС НАРХИ <span className='text-orange-500'>НЕЧAПУЛ?</span>
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
                <li key={feature} className='flex gap-x-3'>
                  <CheckIcon
                    aria-hidden='true'
                    className={classNames(
                      tier.featured ? 'text-orange-400' : 'text-orange-600',
                      'h-6 w-5 flex-none'
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
