import MyModal from './components/Modal';
import Example from './components/Plan';
import { MdArrowDownward } from 'react-icons/md';

const App = () => {
  const posts = [
    {
      id: 1,
      title: 'Косметологиянинг умумий тушунчалари',
      description: [
        '1. Косметология асослари, йуналишлари, имкониятлари',
        '2. Косметология сохаси: Мажбуриятлар ва косметология этикаси.',
        '3. Тери анатомия ва физиологияси.',
        '4. Тери турлари, ахамиятли жихатлари, диагностика услублари.',
        '5. Тери парваришининг асосий боскичлари.',
        '6. Косметика: таркибларини урганиш, воситалар таёрлаш.',
      ],
      category: { title: '1 МОДУЛЬ' },
    },
    {
      id: 2,
      title: 'Эстетик косметология',
      description: [
        '1. Тери диагностикаси',
        '2. Юз ва бу’йин парвариши буйича парвариш базаси: кадамлар ва техникалар',
        '3. Пилинглар: механик, кимёвий, ферментатив',
        '4. Сезувчан ва муаммоли тери парвариши',
        '5. Пигмент доглар билан ишлаш',
        '6. Тери сифати билан ишлаш табий ёшариш процессини ишга тушириш',
        '7. Овкатланиш рационининг ташки куриниш билан богликлиги',
      ],
      category: { title: '2 МОДУЛЬ' },
    },
    {
      id: 3,
      title: 'Инъекцион косметология',
      description: [
        '1. Анатомия ва инъекциялар усуллари асослари.',
        '2. Контур пластикасининг асослари.',
        '3. Биоревитализация, биорепарация, редермализация.',
        '4. Мезотерапия, коктейллар.',
        '5. Карши курсатмалар ва асоратлар.',
        '6. Асоратлар билан ишлаш',
      ],
      category: { title: '3 МОДУЛЬ' },
    },
    {
      id: 4,
      title: 'Аппарат косметологияси',
      description: [
        '1. Аппаратли муолажалар билан танишиш ва уларни солиштириш.',
        '2. RF-лифтинг, Termo-lift, Smass-лифтинг тери таранглигини тиклаш.',
        '3. Микроток терапияси, дарсонвализация тер ива мушаклар билан.',
        '4. Лазер косметологияси: ижобий жихатлари ва салбий окибатлари.',
      ],
      category: { title: '4 МОДУЛЬ' },
    },
    {
      id: 5,
      title: 'Инновацион косметология',
      description: [
        '1. Нанокосметология: замонавий формула ва технологиялардан фойдаланиш.',
        '2. Плазмотерапия (PRP): усул ва натижалар.',
        '3. Косметологиядаги генетик ёндашув.',
        '4. Биоматериаллар билан ишлаш.',
        '5. Газсимон элементлар билан тезкор ёшартириш услублари.',
      ],
      category: { title: '5 МОДУЛЬ' },
    },
    {
      id: 6,
      title: 'Дерматология ва косметология асослари',
      description: [
        '1. Тери касалликларининг дифференциал диагностикаси.',
        '2. Акне: сабаблар, боскичлар, даволаш чоралари.',
        '3. Ботулинотерапия: мимик ажинлар билан ишлаш.',
        '4. Кариш аломатлари билан курашишнинг энг кучли услублари.',
        '5. Полимолочная кислота, поликапролактон, экзосомалар.',
        '6. Гиперпигментация: курашиш усуллари.',
        '7. Купероз: сабаблари, профилактика, даволаш ва парвариш.',
        '8. Умуртка погонасида бажариладиган инъекциялар.',
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
        '1. Барча узлаштирилган билимлар намойиши.',
        '2. Моделлар билан ишлаш.',
        '3. Якуний экзамен (назарий ва амалий билимларни текшириш).',
        '4. Сертификатларни такдим этиш.',
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
        <section className='bg-[url(/bg.webp)] relative bg-cover bg-right-top backdrop-blur-2xl'>
          <span className='bg-white/20 absolute left-0 right-0 bottom-0 top-0 backdrop-blur-lg'></span>
          <div className='container mx-auto px-4 sm:px-10'>
            <div
              data-aos='fade-up'
              data-aos-anchor-placement='top-center'
              className='flex flex-col items-center justify-center min-h-[600px]'
            >
              <h1 className='text-4xl relative z-10 sm:text-5xl text-black text-center max-w-[700px] font-bold'>
                <span className='text-[#FB7902]'>7 ХАФТАДА</span> КОСМЕТОЛОГИЯ
                МУТАХАССИСИГА АЙЛАНИНГ
              </h1>

              <p className=' my-6 relative z-10 max-w-xl text-black text-center'>
                Гўзаллик индустриясининг юқори талабдаги касбини эгаллашни
                истаганлар учун экспресс-курс. Қандай қилиб тез ўзгарувчан ва
                юқори рақобатли соҳада ўз ўрнини топиш ва юқори малакали
                мутахассисга айланиш мумкин
              </p>
              <a
                className='py-3 px-10 bg-[#333] relative z-10 text-white'
                href='#contact'
              >
                БЕПУЛ ЁЗИЛИШ
              </a>
              <div className='w-[70px] animate flex justify-center items-center rounded-full mt-5 h-[70px] relative z-10 bg-white'>
                <MdArrowDownward className='text-3xl' />
              </div>
            </div>
          </div>
        </section>

        <section className='py-24'>
          <div className='container mx-auto px-4 sm:px-10'>
            <div className='flex items-center flex-col lg:flex-row lg:justify-between gap-10'>
              <div data-aos='fade-up' className='flex-1 rounded-lg  relative'>
                <img className='w-full' src='/banner.webp' alt='woman' />
              </div>

              <div data-aos='fade-up' data-aos-delay='300' className='flex-1'>
                <h4 className='uppercase'>Курсни ким олиб боради</h4>
                <h2 className='text-3xl font-bold'>Зилола Якубова</h2>

                <div className='flex flex-col mt-10 gap-4'>
                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      01
                    </span>
                    <p>
                      Юкори малакали{' '}
                      <span className='text-orange-500 font-semibold'>
                        фармацевт-косметолог
                      </span>
                    </p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      02
                    </span>
                    <p>
                      Тиббий билим ва{' '}
                      <span className='text-orange-500 font-semibold'>
                        10 йиллик
                      </span>{' '}
                      тажрибага эга
                    </p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      03
                    </span>
                    <p>
                      <span className='text-orange-500 font-semibold'>
                        Alhayaa
                      </span>{' '}
                      косметология маркази асосчиси
                    </p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      04
                    </span>
                    <p>
                      <span className='text-orange-500 font-semibold'>
                        Инъекцион
                      </span>{' '}
                      ва{' '}
                      <span className='text-orange-500 font-semibold'>
                        эстетик
                      </span>{' '}
                      техникалар автори
                    </p>
                  </div>

                  <div className='flex items-center gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      05
                    </span>
                    <p>
                      <span className='text-orange-500 font-semibold'>
                        «Ўзингга ўзинг косметолог»
                      </span>{' '}
                      курсининг етакчиси
                    </p>
                  </div>

                  <div className='flex gap-3'>
                    <span className='text-white font-bold rounded-sm p-3 flex justify-center items-center bg-black'>
                      06
                    </span>
                    <p>
                      Телевидение ва ижтимоий тармоклар оркали{' '}
                      <span className='text-orange-500 font-semibold'>
                        хавфсиз косметология
                      </span>{' '}
                      ғоясини олға сурувчи олга сурувчи лойихалар муаллифи.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 text-white bg-[#222]'>
          <div className='container mx-auto px-4 sm:px-10'>
            <h2 data-aos='fade-up' className='text-4xl text-center'>
              УШБУ <span className='text-orange-500'>КУРС</span> КИМЛАР УЧУН?
            </h2>
            <div className='flex mt-10 justify-between flex-col lg:flex-row items-center gap-5'>
              <div className='flex flex-1 items-center text-lg justify-center flex-col gap-3'>
                <p
                  className='p-5 w-full md:w-[70%] bg-white/5 rounded-md'
                  data-aos='fade-up'
                >
                  1. Косметология сохасини урганишни хохловчи, аммо нимадан
                  бошлашни билмаётганлар учун.
                </p>

                <p
                  className='p-5 w-full md:w-[70%] bg-white/5 rounded-md'
                  data-aos='fade-up'
                >
                  2. Косметология курсларини тамомлаб, ишни бошлай олмаётганлар
                  учун.
                </p>

                <p
                  className='p-5 w-full md:w-[70%] bg-white/5 rounded-md'
                  data-aos='fade-up'
                >
                  3. Назарий{' '}
                  <span className='font-semibold text-orange-500'>
                    билимлари бор,
                  </span>{' '}
                  аммо инъекцион муолажаларга нисбатан куркувни енга
                  олмаётганлар учун.
                </p>

                <p
                  className='p-5 w-full md:w-[70%] bg-white/5 rounded-md'
                  data-aos='fade-up'
                >
                  4. Узок танаффусдан сунг билимларини янгилашни хохлаганлар
                  учун.
                </p>
                <p
                  className='p-5 w-full md:w-[70%] bg-white/5 rounded-md'
                  data-aos='fade-up'
                >
                  5. Косметолог булиб ишлаш учун эмас, у’зи ва оиласи учун
                  урганишни истаганлар учун.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-24'>
          <div className='container mx-auto px-4 sm:px-10'>
            <div className='bg-white'>
              <div className=''>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                  <h2
                    data-aos='fade-up'
                    className='text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl'
                  >
                    Курс ўз ичига қуйидаги мавзуларни олади.
                  </h2>
                </div>
                <div className='mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
                  {posts.map((post) => (
                    <article
                      data-aos='fade-up'
                      key={post.id}
                      id={post.id.toString()}
                      className='flex w-full bg-gray-900 text-white border border-solid border-gray-300 p-6 rounded-lg flex-col items-start'
                    >
                      <div className='flex items-center gap-x-4 text-xs'>
                        <h3 className='relative z-10 rounded-full text-white text-md bg-orange-500 px-3 py-1.5 font-medium'>
                          {post.category.title}
                        </h3>
                      </div>
                      <div className='group relative'>
                        <h3 className='mt-3 text-xl/6 text-gray-50 font-bold mb-3'>
                          <span>
                            <span className='absolute inset-0' />
                            {post.title}
                          </span>
                        </h3>

                        <ul className='list-none flex flex-col gap-3'>
                          {post.description.map((item) => (
                            <li className='' key={item}>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ))}
                </div>
                <div className='flex justify-center mt-20'>
                  <MyModal />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 bg-black'>
          <div className='container mx-auto px-5 sm:px-10'>
            <div className='bg-purple-950/10 mx-auto max-w-[700px] p-10 rounded-lg bg-[url(https://keynote.tailwindui.com/_next/static/media/background-newsletter.488a0204.jpg)] bg-cover bg-no-repeat'>
              <blockquote data-aos='fade-up' className='relative'>
                <div className='relative z-[1]'>
                  <p className='text-base-content text-lg'>
                    <em className='text-black font-bold'>
                      Курс давомида{' '}
                      <span className='text-orange-500 font-semibold'>
                        хамкор компанияларда
                      </span>{' '}
                      қўшимча косметологик тренингларга қатнашиб, малака ошириш
                      ва{' '}
                      <span className='text-orange-500 font-semibold'>
                        қўшимча сертификатларга
                      </span>{' '}
                      эга бўлишингиз мумкин булади.
                    </em>
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        <section className='py-24'>
          <div className='container mx-auto px-4 sm:px-10'>
            <h2 data-aos='fade-up' className='text-4xl uppercase text-center'>
              Бизнинг <span className='text-orange-500'>фалсафамиз</span>
            </h2>

            <h3 className='text-center mt-10 font-semibold text-lg max-w-[600px] mx-auto'>
              <span className='text-orange-500'>Alhayaa cosmetology</span> -
              хамиша бошқалардан ўзининг олий кадриятлари билан ажралиб турган.
            </h3>

            <h4 className='text-center font-semibold mt-5'>
              <span className='font-bold text-orange-500 '>Alhayaa</span> – бу …
            </h4>

            <div className='text-center flex-col md:flex-row mt-10 font-semibold text-lg gap-3 max-w-[900px] flex justify-between mx-auto'>
              <p
                data-aos='fade-up'
                className='flex-1 bg-clip-padding p-8 border border-solid border-gray-300 rounded-lg'
              >
                … хаёт, тириклик, яъни гўзалликга саломатликни йўқотиш эвазига
                эришиш эмас, балки зарарли муолажаларсиз, терини "тириклайин
                сақлаб қолиш" ва сифатини ошириш бизнинг асосий миссиямиз.
              </p>

              <p
                data-aos='fade-up'
                className='flex-1 bg-clip-padding p-8 border border-solid border-gray-300 rounded-lg'
              >
                … хаё. Яъни биз ортиқча бўрттирилишларга, сунъийликга қаршимиз.
                Шуниндек, қолипдагидек бирхил гўзаллик стандартларидан йироқда
                бўлиш, чет элликларга тақлид қилиш эмас, балки улар асрлар
                давомида хавас қилиб келган шарқона гўзалликни сақлаб қолиш.
              </p>
            </div>
          </div>
        </section>

        <Example />

        <section className='py-24 bg-[url(/ban.png)] text-white bg-fixed'>
          <div className='container mx-auto px-4 sm:px-10'>
            <h2 data-aos='fade-up' className='text-4xl uppercase text-center'>
              Нима учун <span className='text-orange-500'> бизни</span>{' '}
              танлашади?
            </h2>

            <div
              data-aos='fade-up'
              className='text-center mt-10 font-semibold text-lg gap-3 max-w-[900px] flex  flex-col mx-auto'
            >
              <p className='w-full  backdrop-blur-xl md:w-[70%] bg-white/10 p-6 rounded-md mx-auto'>
                Назарий хамда амалий билимлар бирдек олиб борилади
              </p>
              <p className='w-full backdrop-blur-xl md:w-[70%] bg-white/10 p-6 rounded-md mx-auto'>
                Салбий асоратлар билан хам ишлаш ургатилади
              </p>

              <p className='w-full backdrop-blur-xl md:w-[70%] bg-white/10 p-6 rounded-md mx-auto'>
                Билимлар:{' '}
                <span className='text-orange-500 font-semibold'>
                  "Муаммо-препарат"
                </span>{' '}
                шаклида эмас, балки даволаш механизмлари кенгқамровлик шаклда
                у'ргатилади. Шунда сиз маълум бир препарат ёки фирмага боғланиб
                қолмайсиз.
              </p>
            </div>
          </div>
        </section>

        <section className='py-24'>
          <div className='container mx-auto px-4 sm:px-10'>
            <h2
              data-aos='fade-up'
              className='text-center text-3xl font-semibold'
            >
              КОСМЕТОЛОГ БИЛАН <br />
              <span className='text-orange-500 font-semibold'>1 КУН</span>
            </h2>
            <div className='text-center mt-10 font-semibold text-lg gap-3 max-w-[900px] flex justify-between mx-auto'>
              <p
                data-aos='fade-up'
                className='flex-1 bg-clip-padding p-8 border border-solid border-gray-300 rounded-lg'
              >
                Агар сизда куркув ёки иккиланишлар булса, бизда{' '}
                <span className='text-orange-500 font-semibold'>
                  «Косметолог билан 1 кун»
                </span>{' '}
                дастури мавжуд. Унга кура сиз кун давомида косметoлог фаолиятини
                консультация бериш жараёнидан бошлаб, барча муолажаларни
                утказилишигача, кузатишингиз мумкин булади, ва бу мутлако{' '}
                <span className='text-orange-500 font-semibold'>БЕПУЛ</span>.
              </p>
            </div>
          </div>
          <div id='contact' className='flex justify-center mt-10'>
            <MyModal />
          </div>
        </section>

        <section className='py-24 relative bg-[url(/footer.webp)] bg-no-repeat bg-cover text-white text-center bg-fixed'>
          <span className='absolute top-0 backdrop-blur-sm left-0 right-0 bottom-0 block -z-0 bg-black/50'></span>
          <div className='container mx-auto px-4 sm:px-10'>
            <h2
              data-aos='fade-up'
              className='text-4xl relative z-10 text-white uppercase text-center'
            >
              Богланиш учун <span className='text-orange-500'>контактлар:</span>
            </h2>

            <div className='flex flex-col relative z-10 mt-4 gap-4 justify-center items-center font-bold text-lg md:text-2xl'>
              <a
                data-aos='fade-up'
                className='hover:text-orange-500 mt-10'
                href='tel:+998998244404'
              >
                Администратор: +998 99 824 4404
              </a>
              <a
                data-aos='fade-up'
                className='hover:text-orange-500'
                href='tel:+998977282040'
              >
                Зилола Якубова: +998 97 728 2040
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className='bg-black text-white py-6'>
        <div className='container mx-auto px-4 sm:px-10'>
          <div className='flex w-full items-center justify-between'>
            <aside className='grid-flow-col items-center'>
              <p>
                ©2025{' '}
                <a className='link link-hover font-medium' href='#'>
                  Alhayaa
                </a>
              </p>
            </aside>
            <div className='flex gap-4 h-5'>
              <a href='#' className='link' aria-label='Facebook Link'>
                <span className='icon-[tabler--brand-telegram] size-5'></span>
              </a>
              <a href='#' className='link' aria-label='X Link'>
                <span className='icon-[tabler--brand-instagram] size-5'></span>
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
