const App = () => {
  const posts = [
    {
      id: 1,
      title: 'Косметологиянинг умумий тушунчалари',
      description: [
        'Косметология асослари, йуналишлари, имкониятлари',
        'Косметология сохаси: Мажбуриятлар ва косметология этикаси.',
        'Тери анатомия ва физиологияси.',
        'Тери турлари, ахамиятли жихатлари, диагностика услублари.',
        'Тери парваришининг асосий боскичлари.',
        'Косметика: таркибларини урганиш, воситалар таёрлаш.',
      ],
      category: { title: '1 МОДУЛЬ' },
    },
    {
      id: 2,
      title: 'Эстетик косметология',
      description: [
        'Тери диагностикаси',
        'Юз ва бу’йин парвариши буйича парвариш базаси: кадамлар ва техникалар',
        'Пилинглар: механик, кимёвий, ферментатив',
        'Сезувчан ва муаммоли тери парвариши',
        'Пигмент доглар билан ишлаш',
        'Тери сифати билан ишлаш табий ёшариш процессини ишга тушириш',
      ],
      category: { title: '2 МОДУЛЬ' },
    },
    {
      id: 3,
      title: 'Инъекцион косметология',
      description: [
        'Анатомия ва инъекциялар усуллари асослари.',
        'Контур пластикасининг асослари.',
        'Биоревитализация, биорепарация, редермализация.',
        'Полимолочная кислота, поликапролактон, экзосомалар.',
        'Мезотерапия, коктейллар.',
        'Ботулинотерапия: мимик ажинлар билан ишлаш.',
        'Карши курсатмалар ва асоратлар.',
        'Асоратлар билан ишлаш',
      ],
      category: { title: '3 МОДУЛЬ' },
    },
    {
      id: 4,
      title: 'Аппарат косметологияси',
      description: [
        'Аппаратли муолажалар билан танишиш ва уларни солиштириш.',
        'RF-лифтинг, Termo-lift, Smass-лифтинг тери таранглигини тиклаш.',
        'Микроток терапияси, дарсонвализация тер ива мушаклар билан.',
        'Лазер косметологияси: ижобий жихатлари ва салбий окибатлари.',
      ],
      category: { title: '4 МОДУЛЬ' },
    },
    {
      id: 5,
      title: 'Инновацион косметология',
      description: [
        'Нанокосметология: замонавий формула ва технологиялардан фойдаланиш.',
        'Плазмотерапия (PRP): усул ва натижалар.',
        'Косметологиядаги генетик ёндашув.',
        'Биоматериаллар билан ишлаш.',
        'Газсимон элементлар билан тезкор ёшартириш услублари.',
      ],
      category: { title: '5 МОДУЛЬ' },
    },
    {
      id: 6,
      title: 'Основы дерматология ва косметология асослари',
      description: [
        'Тери касалликларининг дифференциал диагностикаси.',
        'Акне: сабаблар, боскичлар, даволаш чоралари.',
        'Гиперпигментация: курашиш усуллари.',
        'Купероз: сабаблари, профилактика, даволаш ва парвариш.',
        'Овкатланиш рационининг ташки куриниш билан богликлиги.',
      ],
      category: { title: '6 МОДУЛЬ' },
    },
    {
      id: 7,
      title: 'Alhayaa концепцияси ва сирли мавзулар',
      description: ['(сирли мавзулар)'],
      category: { title: '7 МОДУЛЬ' },
    },
    {
      id: 8,
      title: 'Амалиёт ва сертификация',
      description: [
        'Барча узлаштирилган билимлар намойиши.',
        'Моделлар билан ишлаш.',
        'Якуний экзамен (назарий ва амалий билимларни текшириш).',
        'Сертификатларни такдим этиш.',
      ],
      category: { title: '8 МОДУЛЬ' },
    },
  ];

  return (
    <>
      <header className='border-b border-solid py-3 border-gray-300'>
        <div className='container mx-auto px-10'>
          <div className='flex justify-center sm:justify-start'>
            <img className='w-[170px]' src='gorizontal.png' alt='' />
          </div>
        </div>
      </header>

      <main>
        <section className='bg-[url(banner.png)] bg-cover bg-center backdrop-blur-2xl bg-fixed'>
          <div className='container mx-auto px-4 sm:px-10'>
            <div
              data-aos='fade-up'
              data-aos-anchor-placement='top-center'
              className='flex flex-col items-center justify-center min-h-[calc(100vh-76px)] '
            >
              <h1 className='text-4xl sm:text-5xl text-[#333] text-center max-w-[700px] font-bold'>
                <span className='text-[#FB7902]'>7 ХАФТАДА</span> ПРОФЕССИОНАЛ
                КОСМЕТОЛОГ БУ’ЛИНГ
              </h1>
              <p className='my-5 text-[#444] text-center'>
                Гузаллик индустриясидаги касбни эгаллашни истаганлар учун
                экспресс-курс
              </p>
              <a
                href='#contact'
                className='h-[54px] flex justify-center items-center w-[180px] bg-[#1E1E1E] text-white'
              >
                Курсга ёзилиш
              </a>
            </div>
          </div>
        </section>

        <section className='py-24'>
          <div className='container mx-auto px-4 sm:px-10'>
            <div className='flex items-center flex-col sm:flex-row sm:justify-between gap-10'>
              <div data-aos='fade-up' className='flex-1'>
                <img className='w-full' src='woman.png' alt='woman' />
              </div>

              <div data-aos='fade-up' data-aos-delay='300' className='flex-1'>
                <h4 className='uppercase'>Курсни ким олиб боради</h4>
                <h2 className='text-3xl font-bold'>Зилола Якубова</h2>

                <div className='flex flex-col mt-10 gap-4'>
                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      01
                    </span>
                    Юкори малакали фармацевт-косметолог
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      02
                    </span>
                    Тиббий билим ва 10 йиллик тажрибага эга
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      03
                    </span>
                    20-дан ортик мустакил косметологларни таёрлаган (етиштирган)
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      04
                    </span>
                    Инъекцион ва эстетик техникалар автори
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      05
                    </span>
                    «У’зингга у’зинг косметолог» курсининг етакчиси
                  </div>

                  <div className='flex gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      06
                    </span>
                    <p>
                      Телевидение ва ижтимоий тармоклар оркали хавфсиз
                      косметология гоясини олга сурувчи лойихалар муаллифи.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='container mx-auto px-4 sm:px-10'>
            <div className='bg-white'>
              <div className=''>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                  <h2
                    data-aos='fade-up'
                    className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'
                  >
                    Курс уз ичига куйидаги мавзуларни олади
                  </h2>
                </div>
                <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                  {posts.map((post) => (
                    <article
                      data-aos='fade-up'
                      key={post.id}
                      className='flex max-w-xl bg-[url(https://keynote.tailwindui.com/_next/static/media/background-newsletter.488a0204.jpg)] bg-no-repeat bg-left border border-solid border-gray-300 p-4 rounded-lg flex-col items-start justify-between'
                    >
                      <div className='flex items-center gap-x-4 text-xs'>
                        <h3 className='relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100'>
                          {post.category.title}
                        </h3>
                      </div>
                      <div className='group relative'>
                        <h3 className='mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600'>
                          <span>
                            <span className='absolute inset-0' />
                            {post.title}
                          </span>
                        </h3>

                        <ul className='list-none flex flex-col gap-3'>
                          {post.description.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-24'>
          <div className='container mx-auto sm:px-10'>
            <div className='bg-purple-950/10 p-10 rounded-lg bg-[url(https://keynote.tailwindui.com/_next/static/media/background-newsletter.488a0204.jpg)] bg-cover bg-no-repeat'>
              <blockquote data-aos='fade-up' className='relative'>
                <span className='icon-[tabler--quote] text-base-300/80 absolute -start-3 -top-3 size-16 rotate-180 rtl:rotate-0'></span>

                <div className='relative z-[1]'>
                  <p className='text-base-content text-lg'>
                    <em className='text-black/70'>
                      Косметология хозирги кунда энг тез у’саётган
                      индустриялардан бири. Ушбу соха вакилларига талаб йилдан
                      йилга ошиб бормокда, аммо кандай килиб бундай ракобат
                      кучли бу’лган сохада юксалиш мумкин, кандай килиб халк
                      мехрини козониб муваффакиятга эришиш мумкин?
                    </em>
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        <section className='py-24 text-white bg-[#222]'>
          <div className='container mx-auto px-4 sm:px-10'>
            <div className='flex justify-between flex-col lg:flex-row items-center gap-5'>
              <div className='flex flex-col gap-3 text-base'>
                <h2 data-aos='fade-up' className='text-4xl'>
                  УШБУ <span className='text-orange-500'>КУРС</span> КИМЛАР
                  УЧУН?
                </h2>
                <p data-aos='fade-up'>
                  Косметология сохасини урганишни хохловчи, аммо нимадан
                  бошлашни билмаётганлар учун.
                </p>

                <p data-aos='fade-up'>
                  Косметология курсларини тамомлаб, ишни бошлай олмаётганлар
                  учун.
                </p>

                <p data-aos='fade-up'>
                  Назарий билимлари булган, аммо инъекцион муолажаларга нисбатан
                  куркувни енга олмаётганлар учун.
                </p>

                <p data-aos='fade-up'>
                  Узок танаффусдан сунг билимларини янгилашни хохлаганлар учун.
                </p>
                <p data-aos='fade-up'>
                  Косметолог булиб ишлаш учун эмас, у’зи ва оиласи учун
                  урганишни истаганлар учун.
                </p>
              </div>

              <img data-aos='fade-up' src='c.png' alt='' />
            </div>
          </div>
        </section>

        <section className='py-24'>
          <div className='container mx-auto px-4 sm:px-10'>
            <h2 data-aos='fade-up' className='text-4xl uppercase text-center'>
              Бизнинг <span className='text-orange-500'>фалсафамиз</span>
            </h2>

            <div className='text-center mt-10 font-semibold text-lg gap-3 max-w-[900px] flex  flex-col mx-auto'>
              <p data-aos='fade-up'>
                <span className='text-orange-500'>Alhayaa cosmetology</span>{' '}
                хамиша бошкалардан узининг юкори кадриятлари билан ажралиб
                турган
              </p>
              <p data-aos='fade-up'>
                <span className='text-orange-500'>Alhayaa</span> – бу хаёт. Яъни
                гузалликни зарарли муолажаларсиз, тириклайин саклаб колиш
                бизнинг асосий миссиямиз.
              </p>
              <p data-aos='fade-up'>
                <span className='text-orange-500'>Alhayaa</span> – бу хаё. Яъни
                бурттирилишлардан, сунъийликдан ва бирхил гузаллик
                стандартларидан йирокда булиш, узлигини саклаб, уз «фишкангизга»
                ургу бериш
              </p>
            </div>
          </div>
        </section>

        <section className='py-24 bg-[url(ban.png)] text-white bg-fixed'>
          <div className='container mx-auto px-4 sm:px-10'>
            <h2 data-aos='fade-up' className='text-4xl uppercase text-center'>
              Нима учун <span className='text-orange-500'> бизни</span>{' '}
              танлашади?
            </h2>

            <div
              data-aos='fade-up'
              className='text-center mt-10 font-semibold text-lg gap-3 max-w-[900px] flex  flex-col mx-auto'
            >
              <p>Назарий хамда амалий билимлар бирдек олиб борилади;</p>
              <p>Асоратлар билан хам ишлаш ургатилади</p>
              <p>Укув программаси 3 ойга мулжалланган, аммо хохишингизга</p>
              <p>ура яна 3 ой амалиётингизни мустахкамлашингиз мумкин.</p>
            </div>
          </div>
        </section>

        <section id='contact' className='py-24'>
          <div className='container mx-auto px-4 sm:px-10'>
            <h2 data-aos='fade-up' className='text-4xl uppercase text-center'>
              Контакт
            </h2>
            <form data-aos='fade-up' className='max-w-sm mx-auto'>
              <div className='mt-5'>
                <input
                  className='border w-full rounded-md px-4 py-2 text-black border-solid border-gray-500'
                  type='text'
                  placeholder='Исмингиз'
                  required
                />
              </div>

              <div className='mt-4'>
                <input
                  className='border w-full rounded-md px-4 py-2 text-black border-solid border-gray-500'
                  type='tel'
                  placeholder='Телефон рақамингиз'
                  required
                />
              </div>

              <div className='mt-4'>
                <textarea
                  className='border w-full rounded-md px-4 py-2 text-black border-solid border-gray-500'
                  placeholder='Саволларингиз'
                  required
                />
              </div>
              <button
                type='submit'
                className='bg-black w-full mt-4 rounded-md py-3 text-white px-4'
              >
                Юбориш
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className='bg-black text-white py-6'>
        <div className='container mx-auto px-4 sm:px-10'>
          <div className='flex w-full items-center justify-between'>
            <aside className='grid-flow-col items-center'>
              <p>
                ©2024{' '}
                <a className='link link-hover font-medium' href='#'>
                  Alhayaa
                </a>
              </p>
            </aside>
            <div className='flex gap-4 h-5'>
              <a href='#' className='link' aria-label='Github Link'>
                <span className='icon-[tabler--brand-github] size-5'></span>
              </a>
              <a href='#' className='link' aria-label='Facebook Link'>
                <span className='icon-[tabler--brand-facebook] size-5'></span>
              </a>
              <a href='#' className='link' aria-label='X Link'>
                <span className='icon-[tabler--brand-x] size-5'></span>
              </a>
              <a href='#' className='link' aria-label='Google Link'>
                <span className='icon-[tabler--brand-google] size-5'></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
