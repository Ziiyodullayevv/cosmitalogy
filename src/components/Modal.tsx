import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import axios from 'axios';
import { useState } from 'react';
import { PatternFormat } from 'react-number-format';

export default function MyModal() {
  const TELEGRAM_BOT_TOKEN = '7485479714:AAFXqoL8J_H8T7AE9rqqrJgAYPWTqrwl4m4';
  const TELEGRAM_CHAT_ID = '2045626709';

  let [isOpen, setIsOpen] = useState(false);
  let [isSuccessOpen, setIsSuccessOpen] = useState(false); // Yangi modal uchun holat
  let [formData, setFormData] = useState({ fullName: '', phone: '' });
  let [errors, setErrors] = useState({ fullName: '', phone: '' });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
    setErrors({ fullName: '', phone: '' });
  }

  function closeSuccessModal() {
    setIsSuccessOpen(false);
  }

  const inputChange = (e: { target: { value: any; name: any } }) => {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = { fullName: '', phone: '' };
    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Исм камида 3 та белгидан иборат бўлиши керак';
    }
    if (formData.phone.replace(/\D/g, '').length !== 12) {
      newErrors.phone = 'Телефон рақамингиз 9 та рақамдан иборат бўлиши керак';
    }
    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.phone;
  };

  const formHandle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!validateForm()) return;

    const message = `
      Yangi Foydalanuvchi:
      Ism: ${formData.fullName};
      Telefon: ${formData.phone};
    `;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        { chat_id: TELEGRAM_CHAT_ID, text: message }
      );

      setFormData({ fullName: '', phone: '' });

      // 🔥 SHU YERDA close() ni ishlatmaymiz!
      setIsOpen(false); // Asosiy modal yopiladi
      setTimeout(() => {
        setIsSuccessOpen(true); // Yangi muvaffaqiyat modal ochiladi
      }, 300); // Kichik kechikish qo‘shdik, modal yumshoqroq o‘zgaradi
    } catch (error) {
      console.error('Telegramga yuborishda xatolik:', error);
    }
  };

  return (
    <>
      <Button
        onClick={open}
        className='rounded-sm bg-[#333] h-[48px] text-white py-2 w-[200px]'
      >
        БЕПУЛ ЁЗИЛИШ
      </Button>

      {/* Asosiy forma modali */}
      <Dialog open={isOpen} as='div' className='relative z-10' onClose={close}>
        <div className='fixed inset-0 bg-black/30 backdrop-blur-3xl w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel className='w-full max-w-md rounded-xl bg-white p-6'>
              <DialogTitle as='h3' className='text-base font-medium text-black'>
                Биз сизга боғланамиз!
              </DialogTitle>

              <form onSubmit={formHandle} className='mt-4 flex flex-col gap-4'>
                <input
                  required
                  onChange={inputChange}
                  value={formData.fullName}
                  className='border placeholder:text-black/80 border-black px-3 py-2 rounded-md'
                  type='text'
                  name='fullName'
                  placeholder='Исмингизни киритинг'
                />
                {errors.fullName && (
                  <p className='text-red-500 text-sm'>{errors.fullName}</p>
                )}

                <PatternFormat
                  format='+998 (##) ### ## ##'
                  mask={'-'}
                  name='phone'
                  value={formData.phone}
                  onChange={inputChange}
                  placeholder='Телефон рақамингиз'
                  className='border placeholder:text-black/80 border-black px-3 py-2 rounded-md'
                />
                {errors.phone && (
                  <p className='text-red-500 text-sm'>{errors.phone}</p>
                )}

                <Button
                  className='bg-gray-700 text-white py-2 rounded-md'
                  type='submit'
                >
                  Юбориш
                </Button>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      {/* Muvaffaqiyatli yuborildi modal */}
      <Dialog
        open={isSuccessOpen}
        as='div'
        className='relative z-10'
        onClose={closeSuccessModal}
      >
        <div className='fixed inset-0 bg-black/30 backdrop-blur-3xl w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel className='w-full max-w-md rounded-xl bg-white p-6 text-center'>
              <DialogTitle
                as='h3'
                className='text-lg font-semibold text-green-600'
              >
                ✅ Маълумотингиз муваффақиятли юборилди!
              </DialogTitle>
              <p className='text-gray-700 mt-2'>
                Тез орада сиз билан боғланамиз.
              </p>
              <Button
                onClick={closeSuccessModal}
                className='mt-4 bg-green-600 text-white py-2 px-4 rounded-md'
              >
                Тушунарли
              </Button>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
