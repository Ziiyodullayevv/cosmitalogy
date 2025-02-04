import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import axios from 'axios';
import { useState } from 'react';

export default function MyModal() {
  const TELEGRAM_BOT_TOKEN = '7485479714:AAFXqoL8J_H8T7AE9rqqrJgAYPWTqrwl4m4'; // Bot tokenini shu yerga kiriting
  const TELEGRAM_CHAT_ID = '2045626709';

  let [isOpen, setIsOpen] = useState(false);
  let [formData, setFormData] = useState({
    fullName: '',
    phone: '',
  });

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const inputChange = (e: {
    target: { value: any; name: any };
    preventDefault: () => void;
  }) => {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formHanle = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const message = `
      Yangi Foydalanuvchi:
      Ism: ${formData.fullName};
      Telefon: ${formData.phone};
    `;
    try {
      await axios.post(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
        }
      );
    } catch (error) {
      console.error('Telegramga yuborishda xatolik:', error);
    }
    setFormData({
      fullName: '',
      phone: '',
    });
    close();
  };
  return (
    <>
      <Button
        onClick={open}
        className='rounded-sm relative z-10 bg-[#333] h-[48px] text-white py-2 w-[200px]'
      >
        БЕПУЛ ЁЗИЛИШ
      </Button>

      <Dialog
        open={isOpen}
        as='div'
        className='relative w-full h-full bg-red-600 z-10 focus:outline-none'
        onClose={close}
        __demoMode
      >
        <div className='fixed inset-0 bg-black/30 backdrop-blur-3xl z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            >
              <DialogTitle
                as='h3'
                className='text-base/7 font-medium text-black'
              >
                Биз сизга боғланамиз!
              </DialogTitle>

              <form onSubmit={formHanle} className='mt-4 flex flex-col gap-4'>
                <input
                  required
                  onChange={inputChange}
                  className='border placeholder:text-black/80 border-solid focus-within:border-orange-500 border-black px-3 py-2 rounded-md'
                  type='text'
                  name='fullName'
                  placeholder='Исмингизни киритинг'
                />
                <input
                  required
                  onChange={inputChange}
                  className='border placeholder:text-black/80 focus-within:border-orange-500 border-solid border-black px-3 py-2 rounded-md'
                  type='tel'
                  name='phone'
                  placeholder='Телефон рақамингиз'
                />
                <Button
                  className='inline-flex items-center justify-center py-2 gap-2 rounded-md bg-gray-700 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700'
                  type='submit'
                >
                  Юбориш
                </Button>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
